import React, {Component} from "react";
import {View, StyleSheet, Text, Dimensions} from 'react-native'
class Dimension extends Component {
    constructor(props) {
        super(props);
        const {width, height} = Dimensions.get("window")
        this.state = {
            width,
            height
        }
    }
    onLayout() {
        const {width, height} = Dimensions.get("window")
        this.setState({
            width,
            height
        })
    }
    render() {
        return (
            <View onLayout={()=> this.onLayout()}>
                <Text>Width: {this.state.width}</Text>
                <Text>Height: {this.state.height}</Text>
            </View>
        )
    }
}
export default Dimension;




