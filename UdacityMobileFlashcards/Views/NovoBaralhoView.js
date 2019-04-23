import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { salvarBaralho } from '../Utils/API'
import defaultStyles from '../Utils/Style'

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
            <View style={defaultStyles.container}>
                <Text style={styles.tituloBaralho}>Qual o título do seu novo baralho?</Text>

                <TextInput
                    style={defaultStyles.textInput}
                    onChangeText={(tituloBaralho) => this.setState({ tituloBaralho })}
                    value={this.state.tituloBaralho}
                />

                <TouchableOpacity style={defaultStyles.touchableOpacity} onPress={this.salvar}>
                    <Text style={defaultStyles.touchableOpacityText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tituloBaralho: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
    }
})

export default NovoBaralhoView