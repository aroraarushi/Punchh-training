import { Component } from "react";
import { View,Text,Button,TouchableOpacity} from "react-native";
import styles from "./Style";
import { withNavigation } from 'react-navigation';

class RnButtons extends Component{
  
    render(){
        
        return(
            <View>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress = {()=>this.props.navigation.navigate('ButtonClicked')}>
                        <View style={styles.button1}>
                            <Text style={styles.text1}  >{this.props.button1}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>this.props.navigation.navigate('ButtonClicked')}>
                        <View style={styles.button1}>
                            <Text style={styles.text1}>{this.props.button2}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress = {()=>this.props.navigation.navigate('ButtonClicked')}>
                    <View style={styles.button3}>
                        <Text style={styles.text3}>{this.props.button3}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default RnButtons;

//export default withNavigation(RnButtons);

