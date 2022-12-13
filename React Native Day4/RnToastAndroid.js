import React from "react"
import { StyleSheet, Text, View, ToastAndroid, Button } from 'react-native';
import styles from "./styles";

export default function RnToastAndroid(){

    const showToast = () => {
        ToastAndroid.show("Welcome to Arushi App",ToastAndroid.SHORT)
    }

    const showToastWithGravity = () =>{
        ToastAndroid.showWithGravity(
            "Welcome to Arushi App",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
    };

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Welcome to Arushi App",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            30,
            50
        )
    }

    return(
        <View >
            <Button title="show toast" onPress={()=>showToast()} />
            <Button title="show Toast with Gravity" onPress={()=>showToastWithGravity()} />
            <Button title="show toast with gravity and offset" onPress={()=>showToastWithGravityAndOffset()} />
        </View>
    )
}