import React from 'react';
import {  Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const ContactScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    return(
      <View>
        <Text style={{fontSize:34}}>Contact Screen</Text>
        <Button title='Go to Back' onPress={()=>navigation.goBack()} />
        <Button title='Go to Service' onPress={()=>navigation.navigate('Service',{id:1,otherParams:"Hello"})} />
      </View>
    )
}

export default ContactScreen;
  