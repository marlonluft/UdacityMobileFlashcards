import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { salvarBaralho } from '../Utils/API'

class NovoBaralhoView extends Component {

    state = {
        tituloBaralho: ''
    }

    salvar = () => {

        // Validar titulo do baralho
        if (!this.state.tituloBaralho || this.state.tituloBaralho.length < 3) {
            Alert.alert(
                'Ops...',
                'Informe um título do baralho com pelo menos 3 caracteres para continuar',
                [
                    { text: 'OK' },
                ],
                { cancelable: false },
            )
        }
        else {

            let baralho = {
                descricao: this.state.tituloBaralho,
                qtdCartas: 0,
                id: null
            }

            // salvar novo baralho e redireciona para tela de listagem
            salvarBaralho(baralho).then((baralhoId) => this.props.navigation.navigate('Baralho', { baralhoId }))
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.tituloBaralho}>Qual o título do seu novo baralho?</Text>

                <TextInput
                    style={styles.inputTitulo}
                    onChangeText={(tituloBaralho) => this.setState({ tituloBaralho })}
                    value={this.state.tituloBaralho}
                />

                <Button onPress={this.salvar} title="Salvar" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tituloBaralho: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
    },
    inputTitulo: {
        height: 20,
        borderColor: 'gray',
        borderWidth: 1
    }
})

export default NovoBaralhoView