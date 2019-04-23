import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'

export default function Baralho({ dados, exibirBaralho }) {
    const { descricao, qtdCartas, id } = dados
    let bounceValue = new Animated.Value(1)

    onBaralhoClick = () => {

        // Anima o título do baralho e navega para o detalhe da mesma
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 100, toValue: 1.04 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4 })
        ]).start(() => exibirBaralho(id))
    }

    return (
        <TouchableOpacity onPress={onBaralhoClick}>
            <View style={styles.container}>
                <Animated.Text style={[styles.descricaoBaralho, { transform: [{ scale: bounceValue }] }]}>{descricao}</Animated.Text>
                <Text style={styles.qtdCartas}>{qtdCartas > 0 ? qtdCartas + ' carta(s)' : 'Nenhuma carta cadastrada'}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 3,
        padding: 5,
        backgroundColor: '#F3F3F3',
        borderColor: '#A6A7A8',
        borderWidth: 0.5,
        borderRadius: 4,
    },
    descricaoBaralho: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    qtdCartas: {
        textAlign: 'center',
        fontSize: 14,
        color: 'gray'
    }
})