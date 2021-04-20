import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import News from './screens/News';
import Horoscope from './screens/Horo';
import weather from './screens/weather';
import Jokes from './screens/Jokes';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Container/>
      </View>
    );
  }
}

var Navigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  News:News,
  Horo:Horoscope,
  weather:weather,
  Jokes:Jokes
})
const Container = createAppContainer(Navigator)
