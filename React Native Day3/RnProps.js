import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import styles from './styles';
import Display from './Display.js'


export default function RnProps() {
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name"  onChangeText={(text)=>setName(text)}/>
      <TextInput style={styles.input} placeholder="Age"  onChangeText={(text)=>setAge(text)}/>
      <Display name={name} age={age}/>
    </View>
  );
}




