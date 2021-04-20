import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  News = (buzzerColor) => {
    this.props.navigation.navigate('News', { color: buzzerColor });
  };
  hor = (buzzerColor) => {
    this.props.navigation.navigate('Horo', { color: buzzerColor });
  };
  weather = (buzzerColor) => {
    this.props.navigation.navigate('weather', { color: buzzerColor });
  };
  Jokes = (buzzerColor) => {
    this.props.navigation.navigate('Jokes', { color: buzzerColor });
  };
  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'magenta' }]}
          onPress={()=>{this.Jokes('magenta')}}
          >
          <Text style={styles.buttonText}>Jokes </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={()=>{this.News('red')}}
          >
          <Text style={styles.buttonText}>News </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'teal' }]}
          onPress={()=>{this.hor('teal')}}
          >
          <Text style={styles.buttonText}>Horoscope </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'cyan' }]}
          onPress={()=>{this.weather('cyan')}}
          >
          <Text style={styles.buttonText}>Weather </Text>
        </TouchableOpacity>
        <Image source={require('../up.png')} style={{width: 60, height: 60, marginLeft:10, marginTop:10}} />
        <Image source={require('../down.png')} style={{width: 40, height: 40, marginLeft:270, marginTop:-45}} />
        <Text style={{ marginLeft:140, marginTop:-40}}>Rate Us</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: { textAlign: 'center', color: 'black' },
});
