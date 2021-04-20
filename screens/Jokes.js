import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Jokes extends React.Component{
  HomeScreen = (buzzerColor) => {
    this.props.navigation.navigate('HomeScreen', { color: buzzerColor });
  };
  render(){
    return(
      <View>
      <AppHeader/>
      <Image source={require('../maths.png')} style={{width: 300, height: 190, marginLeft:10, marginTop:10}} />
      <Image source={require('../clock.png')} style={{width: 300, height: 290, marginLeft:10, marginTop:10}} />
      <TouchableOpacity
          style={[styles.button, { backgroundColor: 'teal' }]}
          onPress={()=>{this.HomeScreen('teal')}}
          >
          <Text style={styles.buttonText}>Back </Text>
        </TouchableOpacity>
      </View>
    )
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
    marginLeft:20
  },
  buttonText: { textAlign: 'center', color: 'black' },
});