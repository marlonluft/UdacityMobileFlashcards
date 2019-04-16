import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import ListagemBaralhosView from './Views/ListagemBaralhosView.js'
import BaralhoView from './Views/BaralhoView.js'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button onPress={() => this.props.navigation.navigate('Baralho')} title="Baralho"/>
        <Button onPress={() => this.props.navigation.navigate('Listagem')} title="Listagem"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  },
  Listagem: {
    screen: ListagemBaralhosView
  },
  Baralho: {
    screen: BaralhoView
  }
});

export default createAppContainer(AppNavigator);