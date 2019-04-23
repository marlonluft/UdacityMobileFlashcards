import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { salvarCarta } from '../Utils/API'

class NovaCartaView extends Component {

    state = {
        pergunta: '',
        resposta: '',
        baralhoId: ''
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
        if (!pergunta || pergunta.length < 3) {
            Alert.alert(
                'Ops...',
                'Informe uma pergunta com pelo menos 3 caracteres para continuar',
                [{ text: 'OK' }],
                { cancelable: false },
            )
        }
        else if (!resposta || pergunta.length < 1) {
            Alert.alert(
                'Ops...',
                'Informe uma resposta com pelo menos 1 caracter para continuar',
                [{ text: 'OK' }],
                { cancelable: false },
            )
        }
        else {

            let cartaObj = {
                pergunta,
                resposta
            }

            // salvar a carta
            salvarCarta(cartaObj, baralhoId, () => {
                // Redirecionar
                this.props.navigation.goBack(null)
            })
        }
    }

    render() {

        return (
            <View>
                <Text>Qual será a pergunta?</Text>
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

export default NovaCartaView