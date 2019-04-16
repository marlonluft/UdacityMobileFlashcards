import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet, Button  } from 'react-native'

class BaralhoView extends Component {

    render() {
        return (
            <View>
                <Text>Baralho</Text>
                <Button onPress={() => this.props.navigation.navigate('Listagem')} title="Listagem"/>
            </View>
        )
    }
}

export default BaralhoView