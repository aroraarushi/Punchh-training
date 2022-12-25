import { Component } from "react";
import { View,Text,Image, TouchableOpacity } from "react-native";
import styles from "./Style";

export default class Offers extends Component{
    render(){
        return(
            <View>
                <Text style={styles.offer}>Swipe up to see offers</Text>
                <View style={styles.container}>
                    <Image style={styles.image1} source = {require('./assets/Image1.png')} />
                </View>
                <View style={styles.container1}>
                    <Text style={styles.offerText2}>Offer Valid Thru: February20,2023</Text>
                    <Text style={styles.offerText3}>SU - 25 cents per gallon Max 20 Gallons</Text>
                    <Text style={styles.offerText4}>25 cents per gallon Max 20 Gallons</Text>
                    <TouchableOpacity>
                        <View style={styles.offerButton1}>
                            <Text style={styles.text1}>{this.props.button1}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}