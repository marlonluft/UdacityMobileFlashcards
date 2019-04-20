import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Baralho({ dados }) {
    const { descricao, qtdPerguntas } = dados

    return (
        <View style={styles.container}>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.perguntas}>{qtdPerguntas > 0 ? qtdPerguntas + ' pergunta(s)' : 'Nenhuma pergunta cadastrada'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    descricao: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    perguntas: {
        textAlign: 'center',
        fontSize: 14,
        color: 'gray'
    }
})