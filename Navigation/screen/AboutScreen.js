import { Link } from '@react-navigation/native';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class AboutScreen extends Component {
  render(){
    return (
        <View>
            <Text>ABOUT SCREEN</Text>
            <Link to = {{screen:'Home'}}> Go to Home </Link>
            <Button title='Open Drawer'
             onPress={()=>this.props.navigation.openDrawer()} />
            <Button title='Close Drawer'
             onPress={()=>this.props.navigation.closeDrawer()} />
            <Button title='Toggle Drawer'
             onPress={()=>this.props.navigation.toggleDrawer()} />
        </View>
    );
  }
  
}

