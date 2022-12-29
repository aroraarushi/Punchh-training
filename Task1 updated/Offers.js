import { Component } from "react";
import { View,Text,Image, TouchableOpacity } from "react-native";
import styles from "./Style";
import Data from './Data.json';


let items = Data;
export default class Offers extends Component{

    render(){
        console.log(items);
        return(
            <View>
                <Text style={styles.offer}>Swipe up to see offers</Text>
                <View style={styles.container}>
                    <Image style={styles.image1} source = {require('./assets/Image1.png')} />
                </View>
                <View style={styles.container1}>
                    <View>
                        {items.map(item => (
                            <View key={item.key}>
                                <Text style={styles.offerText2}>{item.data1}</Text>
                                <Text style={styles.offerText3}>{item.data2}</Text>
                                <Text style={styles.offerText4}>{item.data3}</Text>
                            </View>
                            ))}
                            <TouchableOpacity onPress = {()=>this.props.navigation.navigate('ButtonClicked')}>
                                <View style={styles.offerButton1}>
                                    <Text style={styles.text1}>{this.props.button1}</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                </View>
               
            </View>
        );
    }
}