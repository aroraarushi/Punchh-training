import { Component } from "react";
import { View,Text } from "react-native";
import styles from "./Style";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RnText extends Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>
                    Good Afternoon, qc!
                </Text>
                <Text style={styles.point}>00</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginLeft:-8}}>
                        <Text style={styles.rewardText}>Kwik Stop Rewards Points</Text>
                    </View>
                    <View style={{marginLeft:-15,paddingTop:4}}>
                        <MaterialCommunityIcons name="help-circle-outline" size={13} />
                    </View>
                </View>
                
                <Text style={styles.rewardText}>You're 100 points away from earning your next reward!</Text> 
            </View>
        );
    }
}