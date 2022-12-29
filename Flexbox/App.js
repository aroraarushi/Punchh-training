import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Flex from './Flex';
import FlexDirection from './FlexDirection';

export default class App extends Component {
  render(){
    return (
      
      <View style={styles.container}>
        
           <Flex />
           <FlexDirection />
      </View>
       
  
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  outerbox1:{
    backgroundColor:'powderblue',
    flexDirection:'row'
  },
  box:{
    height:20,
    width:50
  }
});
