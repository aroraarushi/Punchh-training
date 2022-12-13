import React from "react"
import { Text, View} from 'react-native';
import styles from "./styles";

export default function TextStyle(){
    return(
        <View>
            <Text style={styles.texts}>
            React Native is an open source framework for building Android and iOS applications using React and the app platform’s native capabilities. With React Native, you use JavaScript to access your platform’s APIs as well as to describe the appearance and behavior of your UI using React components: bundles of reusable, nestable code.
            </Text>
        </View>
    )
}