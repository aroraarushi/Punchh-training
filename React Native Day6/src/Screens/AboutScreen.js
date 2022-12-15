import React from 'react';
import {  Text, View } from 'react-native';

const AboutScreen = ({navigation,route}) => {
    return(
      <View>
        <Text>{route.params.title}</Text>
        <Text style={{fontSize:34}}>About Screen</Text>
      </View>
    )
}
 
export default AboutScreen;
  