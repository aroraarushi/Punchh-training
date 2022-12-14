import { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RnAppearance from './RnAppearance';

export default function App() {
  
  return (
    <View style={styles.container}>
      
      <RnAppearance />
      <Text>OS</Text>
      <Text style={styles.value}>{Platform.OS}</Text>
      <Text>OS Version</Text>
      <Text style={styles.value}>{Platform.Version}</Text>
      <Text>isTV</Text>
      <Text style={styles.value}>{Platform.isTV+""}</Text> 
      
      <Text>Constants</Text>
        <Text style={styles.value}>
          {JSON.stringify(Platform.constants,null,2)}
      </Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  value:{
    fontWeight:"bold",
    padding:3,
    marginBottom:10
  }
});
