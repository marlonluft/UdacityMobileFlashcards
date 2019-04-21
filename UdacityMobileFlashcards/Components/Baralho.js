import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Baralho({ dados, exibirBaralho }) {
    const { descricao, qtdCartas, id } = dados

    return (
        <TouchableOpacity onPress={() => exibirBaralho(id)}>
            <View style={styles.container}>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={styles.cartas}>{qtdCartas > 0 ? qtdCartas + ' carta(s)' : 'Nenhuma carta cadastrada'}</Text>
            </View>
        </TouchableOpacity>
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
    cartas: {
        textAlign: 'center',
        fontSize: 14,
        color: 'gray'
    }
})