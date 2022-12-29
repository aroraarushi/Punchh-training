import { Component } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class ButtonClicked extends Component{
    render(){
        return(
            <View style={{ flex: 1,backgroundColor: '#fff',alignItems: 'center'}}>
                <Text>Button Clicked</Text>
                <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')}/> 
                <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')}/> 
                
            </View>
        );
    }
}