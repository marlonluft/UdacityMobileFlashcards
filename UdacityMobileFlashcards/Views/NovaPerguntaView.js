import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

class NovaPerguntaView extends Component {

    state = {
        pergunta: '',
        resposta: '',
        baralhoId: -1
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params

        this.setState({
            baralhoId: id
        })

    }

    salvar = () => {

        const { pergunta, resposta, baralhoId } = this.state

        // Validar os dados

        // salvar pergunta

        // Redirecionar
        this.props.navigation.navigate('Listagem')
    }

    render() {

        return (
            <View>
                <Text>Qual será a nova pergunta?</Text>
                <TextInput
                    style={styles.inputTitulo}
                    onChangeText={(pergunta) => this.setState({ pergunta })}
                    value={this.state.pergunta}
                />

                <Text>Qual será a resposta da pergunta?</Text>
                <TextInput
                    style={styles.inputTitulo}
                    onChangeText={(resposta) => this.setState({ resposta })}
                    value={this.state.resposta}
                />

                <Button onPress={this.salvar} title="Salvar" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputTitulo: {
        height: 20,
        borderColor: 'gray',
        borderWidth: 1
    }
})

export default NovaPerguntaView