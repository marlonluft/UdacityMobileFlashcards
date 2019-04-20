import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class QuizView extends Component {

    state = {
        qtdQuestionado: 0,
        qtdTotal: 0,
        pergunta: '',
        resposta: '',
        exibirPergunta: true
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params

        this.setState({
            pergunta: 'Teste pergunta',
            resposta: 'Teste resposta',
            qtdTotal: 10
        })

    }

    acertei = () => {

        this.setState(oldstate => ({
            qtdQuestionado: oldstate.qtdQuestionado + 1,
            exibirPergunta: true
        }))
    }

    errei = () => {

        this.setState(oldstate => ({
            qtdQuestionado: oldstate.qtdQuestionado + 1,
            exibirPergunta: true
        }))
    }

    render() {

        const { qtdQuestionado, qtdTotal, pergunta, resposta, exibirPergunta } = this.state

        return (
            <View>
                <Text>{qtdQuestionado + '/' + qtdTotal}</Text>
                {
                    exibirPergunta ?
                        <Text style={{}}>{pergunta}</Text>
                        : <Text>{resposta}</Text>
                }

                <Button onPress={() => this.setState({ exibirPergunta: !exibirPergunta })} title={exibirPergunta ? 'Exibir Resposta' : 'Exibir Pergunta'} />

                <Button disabled={exibirPergunta} onPress={() => this.acertei()} title="Acertei" />
                <Button disabled={exibirPergunta} onPress={() => this.errei()} title="Errei" />
            </View>
        )
    }
}

export default QuizView