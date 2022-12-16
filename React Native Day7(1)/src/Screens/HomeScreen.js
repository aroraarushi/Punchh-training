import React from 'react';
import {  Button, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';

function HomeScreen  ({navigation})  {

  const goToScreen = () => {
    navigation.navigate(navigationStrings.ABOUT,{title:"Hello World"})
  }
    return(
      <View>
        <Text style={{fontSize:24}}>Home Screen</Text>
        {/*<Link to = {{screen:"About"}} style={{fontSize:36}}> Go to About </Link>*/}
        <Link to = {{screen:"Contact"}} style={{fontSize:36}}> Go to Contact </Link>
        <Link to = {{screen:"Service"}} style={{fontSize:36}}> Go to Service </Link>

        <Button onPress={goToScreen} title="Go to About" />
      </View>
    )
}

export default HomeScreen;