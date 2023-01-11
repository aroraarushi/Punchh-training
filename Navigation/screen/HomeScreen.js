import { Link } from '@react-navigation/native';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render(){
    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Link to = {{screen:'About'}}> Go to About </Link>
        </View>
    );
  }
  
}

