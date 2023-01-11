import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';


export default class SideBar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <DrawerContentScrollView {...this.props}>
            <View>
                <Image source={require('../assets/photo.jpeg')} 
                style={{height:80,width:80,borderRadius:40,marginBottom:10}}/>
                <Text style={{fontSize:18,fontWeight:'bold',marginBottom:5,marginLeft:5}}>Arushi Arora</Text>
            </View>
            <DrawerItemList {...this.props}/>
            <DrawerItem label='Help' onPress={()=>console.log("Opening Helping Page")} />
      </DrawerContentScrollView>
    )
  }
}