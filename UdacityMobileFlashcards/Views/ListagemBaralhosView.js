import React, { Component } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import Baralho from '../Components/Baralho'
import { AppLoading } from 'expo'
import { consultarBaralhos } from '../Utils/API'
import { setarNotificacaoLocal } from '../Utils/Helper'

class ListagemBaralhosView extends Component {

    state = {
        Baralhos: {},
        carregado: false
    }

    componentDidMount() {
        // Carrega a lista de baralhos
        this.props.navigation.addListener('willFocus', () => {
            consultarBaralhos((baralhos) => {
                this.setState({
                    Baralhos: baralhos || {}
                })
            }).then(() => this.setState({ carregado: true }))
        })

        // Agenda as notificações de lembrete para estudo para amanhã
        setarNotificacaoLocal()
    }

    exibirBaralho = (baralhoId) => {
        this.props.navigation.navigate('Baralho', { baralhoId })
    }

    render() {

        const { Baralhos } = this.state

        if (this.state.carregado === false) {
            return <AppLoading />
        }

        return (

            <View style={styles.container}>
                <Button onPress={() => this.props.navigation.navigate('NovoBaralho')} title="Novo Baralho" />
                {
                    (Object.keys(Baralhos).length === 0) ? (
                        <Text style={styles.nenhumCadastrado}>Nenhum baralho cadastrado.</Text>
                    ) :
                        Object.keys(Baralhos).map((id) => {
                            return <Baralho key={id} dados={Baralhos[id]} exibirBaralho={this.exibirBaralho} />
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