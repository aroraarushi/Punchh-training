import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Component } from 'react';
import UpdatedComponent from './withCounter';

class ClickCounter2 extends Component {

  render(){
    const {count,incrementCount} = this.props
    return (
      <View >
        <TouchableOpacity onPress={incrementCount} style={{backgroundColor:"lightgray",borderColor:'black',borderWidth:1,padding:5,margin:20}}>
            <Text> Clicked {count} Times </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}

export default UpdatedComponent(ClickCounter2,10);
