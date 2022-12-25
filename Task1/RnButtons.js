import { Component } from "react";
import { View,Text,Button,TouchableOpacity} from "react-native";
import styles from "./Style";

export default class RnButtons extends Component{
    render(){
        return(
            <View>
                <View style={styles.buttons}>
                    <TouchableOpacity>
                        <View style={styles.button1}>
                            <Text style={styles.text1} >{this.props.button1}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.button1}>
                            <Text style={styles.text1}>{this.props.button2}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={styles.button3}>
                        <Text style={styles.text3}>{this.props.button3}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}