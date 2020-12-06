import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'UdacityMobileFlashcards:notifications'

export function limparNotificacoesLocais() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function criarNotificacao() {
    return {
        title: 'Hora de estudar!',
        body: "Você ainda não completou pelo menos um quiz hoje!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setarNotificacaoLocal() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            // Verifica se ainda não criada uma notificação
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let amanha = new Date()
                            amanha.setDate(amanha.getDate() + 1)
                            amanha.setHours(22)
                            amanha.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                criarNotificacao(),
                                {
                                    time: amanha,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}
