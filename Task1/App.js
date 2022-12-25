import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RnButtons from './RnButtons';
import RnStatusBar from './RnStatusBar';
import RnText from './RnText';
import TopImage from './TopImage';
import Offers from './Offers';

export default class App extends Component {
  render(){
    return (
      <ScrollView>
      <View style={styles.container}>
        <RnStatusBar />
        <TopImage />
        <RnText />
        <RnButtons button1="SCAN" button2="MY REWARDS" button3="UNLOCK CLUB OFFERS  >"/>
        <Offers button1="REDEEM IN-STORE" />
      </View>
      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
});
