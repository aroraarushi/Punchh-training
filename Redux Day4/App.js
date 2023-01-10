import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CounterApp from './CounterApp';
import store from './store';
import {Provider} from 'react-redux';

class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CounterApp />
        </View>
      </Provider>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
