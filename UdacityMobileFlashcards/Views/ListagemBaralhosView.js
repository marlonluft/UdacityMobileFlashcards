import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native'
import Baralho from '../Components/Baralho'
import { AppLoading } from 'expo'
import { consultarBaralhos } from '../Utils/API'
import { setarNotificacaoLocal } from '../Utils/Helper'
import defaultStyles from '../Utils/Style'

class ListagemBaralhosView extends Component {

    state = {
        Baralhos: {},
        carregado: false
    }

    componentDidMount() {
        // Carrega a lista de baralhos
        this.props.navigation.addListener('willFocus', () => {
            consultarBaralhos((baralhos) => {

                baralhos = baralhos || {}
                baralhos = Object.keys(baralhos).map((id) => {
                    return baralhos[id]
                })

                this.setState({
                    Baralhos: baralhos
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

            <View style={defaultStyles.container}>
                <TouchableOpacity style={defaultStyles.touchableOpacity} onPress={() => this.props.navigation.navigate('NovoBaralho')}>
                    <Text style={defaultStyles.touchableOpacityText}>Novo Baralho</Text>
                </TouchableOpacity>
                {
                    Baralhos.length === 0 ? (
                        <Text style={styles.nenhumCadastrado}>Nenhum baralho cadastrado.</Text>
                    ) :
                        <FlatList
                            data={Baralhos}
                            renderItem={({ item }) => <Baralho key={item.id} dados={item} exibirBaralho={this.exibirBaralho} />}
                            keyExtractor={(item) => item.id.toString()}
                        />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nenhumCadastrado: {
        textAlign: 'center',
        color: 'gray'
    }
})

export default ListagemBaralhosView