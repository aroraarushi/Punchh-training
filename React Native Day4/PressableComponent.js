import { useState } from 'react';
import {  StyleSheet, Text, View ,TextInput, Pressable} from 'react-native';
import styles from './styles';

export default function PressableComponent() {

    const [count,setCount] = useState(0); 
  return (
    <View style={styles.container}> 
        <Text>{count}</Text> 
         <Pressable style={({pressed})=>[{backgroundColor: pressed?"red":"yellow"}]} onPress={()=>setCount(count+1)}>
            {({pressed})=><Text>{pressed?"Pressed":"Press Me"}</Text>}
         </Pressable>
    </View>
  );
}

