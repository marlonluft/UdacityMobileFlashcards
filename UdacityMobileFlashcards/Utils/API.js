import { AsyncStorage } from 'react-native'

const BARALHO_STORAGE_KEY = 'UdacityMobileFlashcards:baralho'
const CARTA_STORAGE_KEY = 'UdacityMobileFlashcards:carta'

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

    baralho.id = baralho.id || createUUID()

    return AsyncStorage.mergeItem(BARALHO_STORAGE_KEY, JSON.stringify({
        [baralho.id]: baralho
    }))
}

export function consultarCartas(baralhoKey, callBack) {
    AsyncStorage.getItem(CARTA_STORAGE_KEY + baralhoKey)
        .then((cartasJSON) => callBack(JSON.parse(cartasJSON)))
}

export function salvarCarta(carta, baralhoId, callBack) {

    carta.id = createUUID()

    AsyncStorage.mergeItem(CARTA_STORAGE_KEY + baralhoId, JSON.stringify({
        [carta.id]: carta
    })).then(() => {
        consultarBaralho(baralhoId, (baralho) => {
            baralho.qtdCartas = baralho.qtdCartas + 1
            salvarBaralho(baralho)
                .then(callBack)
        })
    })
}