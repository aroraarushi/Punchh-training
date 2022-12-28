import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Dimension from './Dimension';
import Images from './Images';
import RnDimensions from './RnDimensions';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Dimension />
      <Images />
      <RnDimensions />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
