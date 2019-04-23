import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import defaultStyles from '../Utils/Style'

export default function QuizPerguntas({ qtdQuestionado, qtdPerguntas, exibirPergunta, pergunta, resposta, alterarPontuacao, alterarExibicao }) {

    normalizarPergunta = () => {
        return (pergunta.trim().slice(-1) === '?') ? pergunta : pergunta + '?'
    }

    return (
        <View>
            <Text style={defaultStyles.texto}>{qtdQuestionado + ' de ' + qtdPerguntas + ' pergunta(s)'}</Text>
            {
                exibirPergunta ?
                    <Text style={styles.pergunta}>{normalizarPergunta()}</Text>
                    : <Text style={styles.resposta}>{resposta}</Text>
            }

            <TouchableOpacity
                onPress={() => alterarExibicao()}>
                <Text style={styles.toggleResposta}>{exibirPergunta ? 'Exibir Resposta' : 'Exibir Pergunta'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={exibirPergunta ? defaultStyles.touchableOpacityDisabled : defaultStyles.touchableOpacity}
                disabled={exibirPergunta}
                onPress={() => alterarPontuacao(true)}>
                <Text style={defaultStyles.touchableOpacityText}>Correta</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={exibirPergunta ? defaultStyles.touchableOpacityDisabled : defaultStyles.touchableOpacity}
                disabled={exibirPergunta}
                onPress={() => alterarPontuacao(false)}>
                <Text style={defaultStyles.touchableOpacityText}>Incorreta</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    pergunta: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    resposta: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        marginVertical: 10,
    },
    toggleResposta: {
        color: '#047AFF',
        textAlign: 'center',
    }
})