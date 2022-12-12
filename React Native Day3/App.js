import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import CustomComponent from './CustomComponent.js';
import RnModal from './Modal.js';
import RnProps from './RnProps.js';
import RnSwitch from './RnSwitch.js';
import CustomButton from './CustomButton.js';
import { TextInput } from 'react-native';
import styles from './styles.js';

export default function App() {

  const [name,setName] = useState("");
  const clickMe=()=>{
    console.log(name);
  }

  return (
    
    <View >
      <ScrollView>
        <RnModal />
        <CustomComponent />
        <RnProps />
        <RnSwitch />
        <TextInput style={styles.input} placeholder="Name" onChangeText={(text)=>setName(text)}/>
        <CustomButton name="Push" click={clickMe}/>
      </ScrollView> 
    </View>
    
  );
}




