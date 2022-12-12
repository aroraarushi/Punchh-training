import react,{useState} from 'react'
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import styles from './styles';

export default function CustomButton(props){
    
    return(
        <TouchableOpacity  onPress={()=>props.click()}>
        <View style={styles.button}>
            <Text style={styles.text}>{props.name}</Text>
        </View>

        </TouchableOpacity>
    )
}
