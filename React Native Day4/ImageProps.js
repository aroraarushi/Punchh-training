import React from "react"
import { StyleSheet, Text, View,Image } from 'react-native';
import styles from "./styles";

export default function ImageProps(){
    return (
        <View>
            <Image 
            source={require('./assets/tree.jpg')}
            style={{height:300,width:300, borderWidth:30,borderColor:"pink",borderRadius:40,opacity:0.8}}
            resizeMode="cover"
            />

        </View>
    )
}