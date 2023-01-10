import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Component } from 'react';
import UpdatedComponent from './withCounter';

class ClickCounter extends Component {
  

  render(){
    const {count,incrementCount} = this.props
    return (
      <View >
        <TouchableOpacity onPress={incrementCount} style={{backgroundColor:"lightgray",borderColor:'black',borderWidth:1,padding:5}}>
            <Text>{this.props.name} Clicked {count} Times </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}export default UpdatedComponent(ClickCounter,5);

