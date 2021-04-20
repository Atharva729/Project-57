import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class weather extends React.Component{
  HomeScreen = (buzzerColor) => {
    this.props.navigation.navigate('HomeScreen', { color: buzzerColor });
  };
  render(){
    return(
      <View>
      <AppHeader/>
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>Today's temperature in Pune is 37°c. Day's maximum temperature would hover at 37°c, while minimum temperature is predicted to be 22°c.</Text>
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>Today's probability of percipitation: 5%</Text>
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>Speed of wind in pune = 5 kmph</Text>
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>Humid in climate of pune = 15 %</Text>
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>Weather in pune = Sunny</Text>
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>Last updated on = 18/4/2021</Text>

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