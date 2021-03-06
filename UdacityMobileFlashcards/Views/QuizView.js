import React, { Component } from 'react'
import { View } from 'react-native'
import { consultarCartas } from '../Utils/API'
import QuizPerguntas from '../Components/QuizPerguntas'
import QuizResultado from '../Components/QuizResultado'
import { limparNotificacoesLocais, setarNotificacaoLocal } from '../Utils/Helper'
import defaultStyles from '../Utils/Style'

class QuizView extends Component {

    state = {
        qtdQuestionado: 0,
        cartas: [],
        pergunta: '',
        resposta: '',
        exibirPergunta: true,
        qtdCorreta: 0,
        exibirResultado: false
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params

        consultarCartas(id, (cartasObj) => {

            var lista = [];
            Object.keys(cartasObj).map((cartaKey) => {
                lista.push(cartasObj[cartaKey])
            })

            this.setState({
                cartas: lista
            }, () => this.proximaCarta())
        })
    }

    proximaCarta = () => {

        const { qtdQuestionado, cartas } = this.state
        const cartaObj = cartas[qtdQuestionado]

        this.setState({
            pergunta: cartaObj.pergunta,
            resposta: cartaObj.resposta,
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

        if (this.state.qtdQuestionado < this.state.cartas.length) {
            // Mostra a próxima pergunta
            this.proximaCarta()
        }
        else {
            // Exibe o resultado do quiz
            this.setState({
                exibirResultado: true
            })

            // Limpa as notificações de lembrete para estudo de hoje e após
            // Agenda as notificações de lembrete para estudo para amanhã
            limparNotificacoesLocais().then(setarNotificacaoLocal)
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
        }, () => this.proximaCarta())
    }

    render() {

        const { qtdQuestionado, cartas, pergunta, resposta, exibirPergunta, exibirResultado, qtdCorreta } = this.state

        return (
            <View style={defaultStyles.container}>
                {
                    (exibirResultado) ?
                        <QuizResultado
                            qtdAcertos={qtdCorreta}
                            qtdTotal={cartas.length}
                            recomecarQuiz={this.recomecarQuiz}
                            voltarBaralho={() => this.props.navigation.goBack(null)} /> :
                        <QuizPerguntas
                            qtdQuestionado={qtdQuestionado}
                            qtdPerguntas={cartas.length}
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