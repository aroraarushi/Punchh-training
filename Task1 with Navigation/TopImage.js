import React,{ Component } from "react";
import { Image ,Text,View} from 'react-native';
import styles from "./Style";

export default class TopImage extends Component{
    render(){
        return(
            <View>
                <Image style={styles.topImage3} source = {require('./assets/topimage3.png')} />
            </View>
           
        );
    }
}