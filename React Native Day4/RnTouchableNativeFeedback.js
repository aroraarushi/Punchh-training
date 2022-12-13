import React, {useState} from "react"
import { StyleSheet, Text, View, SectionList, TouchableNativeFeedback} from 'react-native';
import styles from "./styles";

export default function RnTouchableNativeFeedback(){

    const[rippleOverflow,setRippleOverflow] = useState(false)
    return(
        <View style={styles.TouchableNativeFeedbackBlock}>
            <TouchableNativeFeedback onPress={()=>setRippleOverflow(!rippleOverflow)}
            background={TouchableNativeFeedback.Ripple("red",rippleOverflow)}
            >

        <View style={styles.touchable}>
            <Text style={styles.text}>TouchableNativeFeedback</Text>
        </View>


        </TouchableNativeFeedback>
        </View>
    )
}