import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, ActivityIndicator, Button, Alert } from 'react-native';
import styles from './styles.js';

export default function RnActivityIndicator() {
  const [name,setName] = useState("");
  const [show,setShow] = useState(false);

  const clickMe = () => {
    setShow(true);
    
    setTimeout(()=>{
      setShow(false);
      Alert.alert("Welcome","Welcome to our app");
      console.log(name);
    },3000)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(text)=>setName(text)}/>
      <ActivityIndicator size='large' color='red' animating={show} />
      <Button title='Show' onPress={()=>clickMe()}/>
    </View>
  );
}

