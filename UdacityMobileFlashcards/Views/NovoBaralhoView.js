import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { salvarBaralho } from '../Utils/API'

class NovoBaralhoView extends Component {

    state = {
        tituloBaralho: ''
    }

    salvar = () => {

        // Validar titulo do baralho
        if (!this.state.tituloBaralho) {
            console.log('Hey informe um título do baralho para continuar')
        }
        else {

            let baralho = {
                descricao: this.state.tituloBaralho,
                qtdPerguntas: 0
            }

            // salvar novo baralho
            salvarBaralho(baralho).then((retorno) => {

                console.log('retorno')
                console.log(retorno)

                // Redirecionar
                this.props.navigation.navigate('Listagem')
            })
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.tituloPergunta}>Qual o título do seu novo baralho?</Text>

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
    tituloPergunta: {
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