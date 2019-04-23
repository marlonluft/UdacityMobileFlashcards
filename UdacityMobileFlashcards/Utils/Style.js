import { StyleSheet } from 'react-native'

export default defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    touchableOpacity: {
        alignItems: 'center',
        backgroundColor: '#0077FF',
        padding: 10,
        marginVertical: 10,
    },
    touchableOpacityDisabled: {
        alignItems: 'center',
        backgroundColor: '#D4D5D7',
        padding: 10,
        marginVertical: 10,
    },
    touchableOpacityText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    textInput: {
        borderColor: '#A6A7A8',
        borderBottomWidth: 1,
    },
    texto: {
        textAlign: 'left',
        fontSize: 18,
        marginTop: 10,
    },
})