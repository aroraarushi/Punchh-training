import { Component } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class Details extends Component{
    render(){
        return(
            <View style={{ flex: 1,backgroundColor: '#fff',alignItems: 'center'}}>
                <Text>Details</Text>
                
                <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')}/> 
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}