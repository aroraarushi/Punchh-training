import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react';
import ClickCounter from './components/ClickCounter';
import ClickCounter2 from './components/ClickCounter2';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
       <ClickCounter name="Arushi" />
       <ClickCounter2 />
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
