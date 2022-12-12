import React from 'react';
import { Text, View,TextInput, Alert} from 'react-native';
import styles from './styles';


export default function Display(props){
    
    if(props.age>=18){
        Alert.alert("Notice","You can vote")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello {props.name}
            </Text>
            
        </View>
    )
}

