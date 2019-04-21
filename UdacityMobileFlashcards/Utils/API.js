import { AsyncStorage } from 'react-native'

const BARALHO_STORAGE_KEY = 'UdacityMobileFlashcards:baralho'
const PERGUNTA_STORAGE_KEY = 'UdacityMobileFlashcards:pergunta'

// Gera id para os novos registros.
function createUUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export function consultarBaralhos(callBack) {

    return AsyncStorage.getItem(BARALHO_STORAGE_KEY)
        .then((baralhosJSON) => { callBack(JSON.parse(baralhosJSON)) })
}

export function consultarBaralho(id, callBack) {

    consultarBaralhos((baralhos) => {
        callBack(baralhos[id])
    })
}

export function salvarBaralho(baralho) {

    baralho.id = createUUID()

    return AsyncStorage.mergeItem(BARALHO_STORAGE_KEY, JSON.stringify({
        [baralho.id]: baralho
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