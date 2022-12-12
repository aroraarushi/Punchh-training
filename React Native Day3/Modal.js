import { useState } from 'react';
import { StyleSheet, Text, View,Modal} from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import styles from './styles';


export default function RnModal() {
  const [open,setOpen] = useState(false);
  const [name,setName] = useState();
  const [age,setAge] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name"  onChangeText={(text)=>setName(text)}/>
      <TextInput style={styles.input} placeholder="Age"  onChangeText={(text)=>setAge(text)} />
      <Button title="Click" onPress ={()=>setOpen(true)} />
        <Modal visible={open}>
            <View style={styles.container}>
            <Text style={{fontSize:20}}>Your name is {name} and age is {age}</Text>
            <Button  title="Close" onPress ={()=>setOpen(false)} />
            </View>
        </Modal>
    </View>
  );
}





