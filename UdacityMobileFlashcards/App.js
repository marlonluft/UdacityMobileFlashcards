import { createStackNavigator, createAppContainer } from "react-navigation";
import ListagemBaralhosView from './Views/ListagemBaralhosView.js'
import NovoBaralhoView from './Views/NovoBaralhoView.js'
import BaralhoView from './Views/BaralhoView.js'
import NovaCartaView from './Views/NovaCartaView.js'
import QuizView from './Views/QuizView.js'

const AppNavigator = createStackNavigator({
  Listagem: {
    screen: ListagemBaralhosView,
    navigationOptions: () => ({
      title: 'Baralhos',
    }),
  },
  Baralho: {
    screen: BaralhoView,
    navigationOptions: () => ({
      title: 'Baralho',
    }),    
  },
  NovaCarta: {
    screen: NovaCartaView,
    navigationOptions: () => ({
      title: 'Nova Carta',
    })
  },
  NovoBaralho: {
    screen: NovoBaralhoView,
    navigationOptions: () => ({
      title: 'Novo Baralho',
    }),
  },  
  Quiz: {
    screen: QuizView,
    navigationOptions: () => ({
      title: 'Quiz',
    }),
  },
});

export default createAppContainer(AppNavigator);