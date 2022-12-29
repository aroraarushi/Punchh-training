import { Component } from "react";
import { StatusBar,View } from "react-native";

export default class RnStatusBar extends Component{
    render(){
        return(
            <View>
                 <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
            </View>
        );
    }
}