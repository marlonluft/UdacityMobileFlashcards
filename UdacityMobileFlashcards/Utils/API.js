import { AsyncStorage } from 'react-native'

const BARALHO_STORAGE_KEY = 'UdacityMobileFlashcards:baralho'
const PERGUNTA_STORAGE_KEY = 'UdacityMobileFlashcards:pergunta'

export function consultarBaralhos(callBack) {
    return AsyncStorage.getItem(BARALHO_STORAGE_KEY)
        .then(callBack)
}

export function salvarBaralho({ baralho, key }) {
    return AsyncStorage.mergeItem(BARALHO_STORAGE_KEY, JSON.stringify({
        [key]: baralho
    }))
}

export function consultarPerguntas(baralhoKey, callBack) {
    return AsyncStorage.getItem(PERGUNTA_STORAGE_KEY + baralhoKey)
        .then(callBack)
}

export function salvarPergunta({ pergunta, key, baralhoKey }) {
    return AsyncStorage.mergeItem(PERGUNTA_STORAGE_KEY + baralhoKey, JSON.stringify({
        [key]: pergunta
    }))
}