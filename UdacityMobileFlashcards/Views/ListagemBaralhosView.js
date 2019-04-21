import React, { Component } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import Baralho from '../Components/Baralho'
import { AppLoading } from 'expo'
import { consultarBaralhos } from '../Utils/API'

class ListagemBaralhosView extends Component {

    state = {
        Baralhos: [],
        carregado: false
    }

    componentDidMount() {
        consultarBaralhos((baralhos) => {
            this.setState({
                Baralhos: baralhos || []
            })
        })
            .then(() => this.setState({ carregado: true }))
    }

    exibirBaralho = (id) => {
        this.props.navigation.navigate('Baralho', { id })
    }

    render() {

        if (this.state.carregado === false) {
            return <AppLoading />
        }

        return (
            <View style={styles.container}>
                <Button onPress={() => this.props.navigation.navigate('NovoBaralho')} title="Novo Baralho" />
                {
                    (this.state.Baralhos.length === 0) ? (
                        <Text style={styles.nenhumCadastrado}>Nenhum baralho cadastrado.</Text>
                    ) :
                        this.state.Baralhos.map((baralho) => {
                            return <Baralho key={baralho.id} dados={baralho} exibirBaralho={() => this.exibirBaralho} />
                        })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: 'white'
    },
    nenhumCadastrado: {
        textAlign: 'center',
        color: 'gray'
    }
})

export default ListagemBaralhosView