import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { consultarBaralho } from '../Utils/API'
import { AppLoading } from 'expo'

class BaralhoView extends Component {

    state = {
        descricao: '',
        qtdCartas: 0,
        id: '',
        carregado: false
    }

    atualizarComponente = () => {
        consultarBaralho(this.state.id, (retorno) => {
            this.setState({
                descricao: retorno.descricao,
                qtdCartas: retorno.qtdCartas,
                carregado: true
            })
        })
    }

    componentDidMount() {

        const { baralhoId } = this.props.navigation.state.params

        this.setState({
            id: baralhoId
        }, () => {
            // Registra para que quando a tela for carregada de novo a mesma seja atualizada, pois 'componentDidMount' não será invocado
            this.props.navigation.addListener('willFocus', () => this.atualizarComponente())

            // Recupera os dados do baralho para exibição
            this.atualizarComponente()
        })
    }

    render() {

        const { descricao, qtdCartas, id } = this.state

        if (this.state.carregado === false) {
            return <AppLoading />
        }

        return (

            <View style={styles.container}>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.cartas}>{qtdCartas > 0 ? qtdCartas + ' carta(s)' : 'Nenhuma carta cadastrada'}</Text>
                <Button onPress={() => this.props.navigation.navigate('NovaCarta', { id })} title="Nova Carta" />
                <Button disabled={qtdCartas === 0} onPress={() => this.props.navigation.navigate('Quiz', { id })} title="Começar Quiz" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    descricao: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
    },
    cartas: {
        textAlign: 'center',
        fontSize: 20,
        color: 'gray'
    }
})

export default BaralhoView