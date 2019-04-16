import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet, Button  } from 'react-native'

class ListagemBaralhosView extends Component {

    render() {
        return (
            <View>
                <Text>Listagem Baralho</Text>
                <Button onPress={() => this.props.navigation.navigate('Baralho')} title="Baralho"/>
            </View>
        )
    }
}

export default ListagemBaralhosView