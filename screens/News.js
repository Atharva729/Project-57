import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class News extends React.Component{
  HomeScreen = (buzzerColor) => {
    this.props.navigation.navigate('HomeScreen', { color: buzzerColor });
  };
  render(){
    return(
      <View>
      <AppHeader/>
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>i)  Maharashtra, Delhi and Kerala on Saturday recorded highest ever single-day spike in coronavirus cases with 67,123, 24,000 and 13,835 infections respectively. With 120 deaths, Uttar Pradesh reported its largest one-day toll.</Text>
      <Text style={{marginTop:10, textAlign:'center',paddingLeft:30, paddingRight:30}}> ii) The sillicon valley exodus to florida </Text>
      <Text style={{marginTop:10, textAlign:'center',paddingLeft:30, paddingRight:30}}> iii) Amazon, Allibab, Flipkart, Snapdeal and others get an angry letter from india's telecom regulator </Text>
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