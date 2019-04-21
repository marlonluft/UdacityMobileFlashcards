import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { consultarPerguntas } from '../Utils/API'
import QuizPerguntas from '../Components/QuizPerguntas'
import QuizResultado from '../Components/QuizResultado'

class QuizView extends Component {

    state = {
        qtdQuestionado: 0,
        perguntas: [],
        pergunta: '',
        resposta: '',
        exibirPergunta: true,
        qtdCorreta: 0,
        exibirResultado: false
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
        else {
            // Exibe o resultado do quiz
            this.setState({
                exibirResultado: true
            })

        }
    }

    alterarExibicao = () => {
        this.setState(oldstate => ({
            exibirPergunta: !oldstate.exibirPergunta
        }))
    }

    recomecarQuiz = () => {
        this.setState({
            qtdQuestionado: 0,
            pergunta: '',
            resposta: '',
            exibirPergunta: true,
            qtdCorreta: 0,
            exibirResultado: false
        }, () => this.proximaPergunta())
    }

    render() {

        const { qtdQuestionado, perguntas, pergunta, resposta, exibirPergunta, exibirResultado, qtdCorreta } = this.state

        return (
            <View>
                {
                    (exibirResultado) ?
                        <QuizResultado
                            qtdAcertos={qtdCorreta}
                            qtdTotal={perguntas.length}
                            recomecarQuiz={this.recomecarQuiz}
                            voltarBaralho={() => this.props.navigation.goBack(null)} /> :
                        <QuizPerguntas
                            qtdQuestionado={qtdQuestionado}
                            qtdPerguntas={perguntas.length}
                            exibirPergunta={exibirPergunta}
                            pergunta={pergunta}
                            resposta={resposta}
                            alterarPontuacao={this.alterarPontuacao}
                            alterarExibicao={this.alterarExibicao} />

                }
            </View>
        )
    }
}

export default QuizView