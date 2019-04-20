import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import Baralho from '../Components/Baralho'

class ListagemBaralhosView extends Component {

    state = {
        Baralhos: [
            {
                id: 0,
                descricao: 'Baralho0',
                qtdPerguntas: 0
            },
            {
                id: 1,
                descricao: 'Baralho1',
                qtdPerguntas: 1
            },
            {
                id: 2,
                descricao: 'Baralho2',
                qtdPerguntas: 2
            }
        ]
    }

    ExibirBaralho = (id) => {
        this.props.navigation.navigate('Baralho', { id })
    }

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => this.props.navigation.navigate('NovoBaralho')} title="Novo Baralho" />
                {
                    this.state.Baralhos.map((baralho) => {
                        return <Baralho key={baralho.id} dados={baralho} ExibirBaralho={() => this.ExibirBaralho} />
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
    }
})

export default ListagemBaralhosView