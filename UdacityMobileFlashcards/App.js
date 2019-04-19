import { createStackNavigator, createAppContainer } from "react-navigation";
import ListagemBaralhosView from './Views/ListagemBaralhosView.js'
import NovoBaralhoView from './Views/NovoBaralhoView.js'
import BaralhoView from './Views/BaralhoView.js'
import NovaPerguntaView from './Views/NovaPerguntaView.js'
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
  NovaPergunta: {
    screen: NovaPerguntaView,
    navigationOptions: () => ({
      title: 'Nova Pergunta',
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