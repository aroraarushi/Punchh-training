import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './store';
import IceCreamContainer from './components/IceCreamContainer';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CakeContainer />
        <IceCreamContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
