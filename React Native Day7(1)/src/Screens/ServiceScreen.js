import React from 'react';
import {  Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ServiceScreen = () => {
    const route = useRoute()
    console.log('Route..',route)
    return(
      <View>
        <Text>{route.params.id}</Text>
        <Text>{route.params.otherParams}</Text>
        <Text style={{fontSize:34}}>Service Screen</Text>
      </View>
    )
}

export default ServiceScreen;
  