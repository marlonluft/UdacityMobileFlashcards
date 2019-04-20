import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class BaralhoView extends Component {

    state = {
        descricao: '',
        qtdPerguntas: 0,
        id: -1
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params

        this.setState({
            descricao: 'Baralho View',
            qtdPerguntas: 2,
            id: id
        })

    }

    render() {

        const { descricao, qtdPerguntas, id } = this.state

        return (

            <View style={styles.container}>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.perguntas}>{qtdPerguntas > 0 ? qtdPerguntas + ' pergunta(s)' : 'Nenhuma pergunta cadastrada'}</Text>
                <Button onPress={() => this.props.navigation.navigate('NovaPergunta', { id })} title="Nova Pergunta" />
                <Button disabled={qtdPerguntas === 0} onPress={() => this.props.navigation.navigate('Quiz', { id })} title="Começar Quiz" />
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
    perguntas: {
        textAlign: 'center',
        fontSize: 20,
        color: 'gray'
    }
})

export default BaralhoView