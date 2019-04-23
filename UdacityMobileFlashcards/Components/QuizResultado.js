import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import defaultStyles from '../Utils/Style'

export default function QuizResultado({ qtdAcertos, qtdTotal, recomecarQuiz, voltarBaralho }) {

    getMensagem = () => {

        var porcentagem = (qtdAcertos * 100) / qtdTotal

        if (porcentagem === 100) {
            return 'Acertou todas as perguntas! Você é um(a) deus(a) do conhecimento 🤩'
        }
        else if (porcentagem >= 70) {
            return 'Bahh ' + porcentagem + '% de acerto, ai sim ein 👏👏👏'
        }
        else if (porcentagem >= 50) {
            return porcentagem + '% de acertos, na próxima vai! 🤨'
        }
        else if (porcentagem > 0) {
            return 'Você acertou ' + porcentagem + '% das pergunta(s) 😅'
        }
        else {
            return 'Vish, acho que bugou aqui, deu ' + porcentagem + '% de acerto 🤔'
        }
    }

    return (
        <View>

            <Text style={styles.resultado}>{getMensagem()}</Text>

            <TouchableOpacity
                style={defaultStyles.touchableOpacity}
                onPress={() => recomecarQuiz()}>
                <Text style={defaultStyles.touchableOpacityText}>Recomeçar quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={defaultStyles.touchableOpacity}
                onPress={() => voltarBaralho()}>
                <Text style={defaultStyles.touchableOpacityText}>Voltar ao baralho</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        marginVertical: 10,
    },
})