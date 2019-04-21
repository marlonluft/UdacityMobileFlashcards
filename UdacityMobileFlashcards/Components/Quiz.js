import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Quiz({ qtdQuestionado, qtdPerguntas, exibirPergunta, pergunta, resposta, alterarPontuacao, alterarExibicao }) {

    return (
        <View>
            <Text>{qtdQuestionado + '/' + qtdPerguntas}</Text>
            {
                exibirPergunta ?
                    <Text style={{}}>{pergunta}</Text>
                    : <Text>{resposta}</Text>
            }

            <Button onPress={() => alterarExibicao()} title={exibirPergunta ? 'Exibir Resposta' : 'Exibir Pergunta'} />

            <Button disabled={exibirPergunta} onPress={() => alterarPontuacao(true)} title="Correta" />
            <Button disabled={exibirPergunta} onPress={() => alterarPontuacao(false)} title="Incorreta" />
        </View>
    )
}