import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Horoscope extends React.Component{
  HomeScreen = (buzzerColor) => {
    this.props.navigation.navigate('HomeScreen', { color: buzzerColor });
  };
  render(){
    return(
      <View>
      <AppHeader/>
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>Cancer: Lack of support from family members will disable your efforts. Children also disappoint you. Discord or difference of opinion in family is indicated. Beware of neighbours. Yet, says Ganesha, face circumstances with a smile.</Text>
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>Aries: Today you will have an eye for beautiful and outlandish things. There is a possibility that you may even contemplate starting a business related to these things. Ganesha feels, though, that you will not be able to reach any conclusion about it. But you will keep the option open. </Text> 
      <Text style={{marginTop:20, textAlign:'center',paddingLeft:30, paddingRight:30}}>Leo: You will be filled with extra-ordinary self-confidence and will be able to take on huge risks. Sportspersons will be able to make a lot of progress in their fields. You will square off against any obstacles in your way using your entire might. While it is a good day for you, keep a curb on your speculations, says Ganesha. </Text> 
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