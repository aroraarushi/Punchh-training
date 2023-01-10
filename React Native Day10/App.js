import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomCard from './CustomCard';

const first = {uri: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Cones500.jpg" }
const second = {uri: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg"}

export default class App extends Component{
  render(){
    return(
      <View>
        <CustomCard url={first} title={"First title"}/>
        <CustomCard url={second} title={"Second title"}/>
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
