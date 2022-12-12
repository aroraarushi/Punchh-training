import React, { useState } from 'react';
import { StyleSheet, Text, View,Modal} from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import styles from './styles';

export default function CustomComponent() {
    const [name,setName] = useState("")
    return(
        <View style={styles.container}> 
            <TextInput style={styles.input} placeholder='Name' onChangeText={(text) => setName(text)}/>
            <Button title="Greet" onPress={()=>console.log("Good Morning"+" "+name)} /> 
        </View>
    )
}