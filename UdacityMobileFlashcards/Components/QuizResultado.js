import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function QuizResultado({qtdAcertos, qtdTotal, recomecarQuiz, voltarBaralho}) {

    return (
        <View>

            <Text>Você acertou {qtdAcertos} de {qtdTotal} pergunta(s)!</Text>

            <Button onPress={() => recomecarQuiz()} title="Recomeçar quiz" />
            <Button onPress={() => voltarBaralho()} title="Voltar ao baralho" />
        </View>
    )
}