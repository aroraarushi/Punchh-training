import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native';
import RnStatusBar from './RnStatusBar';
import RnTouchableHighlight from './RnTouchableHighlight';

export default function App() {
  const [name,setName] = useState("");
  return (
      
      <ImageBackground source={require('./assets/img.jpg')} style={styles.container}>
        <RnStatusBar />
        <Text style={styles.inside}>Inside</Text>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <TextInput style={styles.input} placeholder="Enter your name" onChangeText={(text)=>setName(text)}></TextInput>
        </KeyboardAvoidingView>
        <RnTouchableHighlight />
      </ImageBackground>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderBottomColor:'black',
    borderBottomWidth:2,
    alignSelf:"stretch",
    margin:16,
    padding:8
  },
  inside:{
    fontSize: 36,
    color:'black',
   
  }
});
