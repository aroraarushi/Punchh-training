import React from 'react';
import { StyleSheet,
         Text, 
         View, 
         TouchableHighlight, 
         Alert } from 'react-native';
  
export default function RnTouchableHighlight() {
  return (
    <View style={styles.container}>
  
      <TouchableHighlight onPress={() => {
        Alert.alert("Touchable Highlight pressed.");
      }}
        style={styles.touchable}
        activeOpacity={0}
        underlayColor="#67c904"
      >
        <Text style={styles.text}>Click Me!</Text>
      </TouchableHighlight>
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
  touchable: {
    height: 50,
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4287f5'
  },
  text: {
    color: "#fff"
  }
});
