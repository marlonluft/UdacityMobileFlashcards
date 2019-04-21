import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { consultarPerguntas } from '../Utils/API'
import Quiz from '../Components/Quiz'

class QuizView extends Component {

    state = {
        qtdQuestionado: 0,
        perguntas: [],
        pergunta: '',
        resposta: '',
        exibirPergunta: true,
        qtdCorreta: 0
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params

        consultarPerguntas(id, (perguntasObj) => {

            var lista = [];
            Object.keys(perguntasObj).map((perguntaKey) => {
                lista.push(perguntasObj[perguntaKey])
            })

            this.setState({
                perguntas: lista
            }, () => this.proximaPergunta())
        })
    }

    proximaPergunta = () => {

        const { qtdQuestionado, perguntas } = this.state
        const perguntaObj = perguntas[qtdQuestionado]

        this.setState({
            pergunta: perguntaObj.pergunta,
            resposta: perguntaObj.resposta,
            qtdQuestionado: qtdQuestionado + 1,
            exibirPergunta: true
        })
    }

    alterarPontuacao = (ehCorreta) => {

        if (ehCorreta) {
            this.setState(oldstate => ({
                qtdCorreta: oldstate.qtdCorreta + 1
            }))
        }

        if (this.state.qtdQuestionado < this.state.perguntas.length) {
            // Mostra a próxima pergunta
            this.proximaPergunta()
        }
    }

    alterarExibicao = () => {
        this.setState(oldstate => ({
            exibirPergunta: !oldstate.exibirPergunta
        }))
    }

    render() {

        const { qtdQuestionado, perguntas, pergunta, resposta, exibirPergunta } = this.state

        return (
            <View>
                <Quiz
                    qtdQuestionado={qtdQuestionado}
                    qtdPerguntas={perguntas.length}
                    exibirPergunta={exibirPergunta}
                    pergunta={pergunta}
                    resposta={resposta}
                    alterarPontuacao={this.alterarPontuacao}
                    alterarExibicao={this.alterarExibicao} />
            </View>
        )
    }
}

export default QuizView