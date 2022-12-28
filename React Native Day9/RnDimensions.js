import React, {Component} from "react";
import {View, SafeAreaView, StyleSheet, Text, Dimensions, Button} from 'react-native'


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const showDimension = () => {
    console.log(deviceHeight + " " + deviceWidth);
}

const display = (color) => (
    <View style={{
        height: height / 3,
        width: (width / 2) - 20,
        backgroundColor: color,
        borderRadius: 20,
        padding: 16,
        margin: 10
    }}>
        <Text style={{fontSize: 25, color: "black"}}>
            This is a responsive element
        </Text>
    </View>
       
)
export default class RnDimensions extends Component {
    constructor(){
    super();
    
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {display("red")}
                {display("blue")}
                {display("pink")}
                {display("yellow")}
            </View>

        )
}
}


