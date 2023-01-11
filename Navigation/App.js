import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/AboutScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SideBar from './screen/SideBar';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Tabs = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

class MaterialTopTabNavigator extends Component  {
  render(){
    return (
      <TopTab.Navigator initialRouteName='Home' 
        screenOptions={{ tabBarStyle:{backgroundColor:'yellow'},}}tabBarPosition='top'>

          <TopTab.Screen name="Home" component={HomeScreen} 
            options={{title:"Overview",tabBarShowLabel:true,tabBarLabelStyle:{fontWeight:'bold'},
            tabBarIcon:()=><MaterialCommunityIcons name='home' color='blue' size={24} />,tabBarBadge:()=><Text>100</Text>,tabBarIndicatorStyle:{backgroundColor:'white'}}} />
          <TopTab.Screen name="About" component={AboutScreen} />

      </TopTab.Navigator>
    );
  }
  
};

class MaterialBottomTabNavigator extends Component  {
  render(){
    return (
      <Tabs.Navigator initialRouteName='Home' 
        labeled = {true} activeColor='black' barStyle={{backgroundColor:'green'}}>

          <Tabs.Screen name="MaterialTopTabNavigator" component={MaterialTopTabNavigator} 
            options={{title:"Overview",tabBarShowLabel:true,tabBarLabelPosition:'beside-icon',tabBarLabelStyle:{fontWeight:'bold'},
            tabBarIcon:()=><MaterialCommunityIcons name='home' color='blue' size={24} />,tabBarBadge:10}} />
          <Tabs.Screen name="About" component={AboutScreen} />

      </Tabs.Navigator>
    );
  }
  
};


class BottomTabNavigator extends Component  {
  render(){
    return (
      <Tab.Navigator initialRouteName='Home' 
      screenOptions={{headerstyle:{backgroundColor:'red'},
      tabBarStyle:{backgroundColor:'pink'}}}>

          <Tab.Screen name="MaterialBottomTabNavigator" component={MaterialBottomTabNavigator} 
            options={{title:"Overview",tabBarShowLabel:true,tabBarLabelPosition:'beside-icon',tabBarLabelStyle:{fontWeight:'bold'},
            tabBarIcon:()=><MaterialCommunityIcons name='home' color='blue' size={24} />,tabBarBadge:10}} />
          <Tab.Screen name="About" component={AboutScreen} />

      </Tab.Navigator>
    );
  }
  
};


class Root extends Component {
  render(){
    return(
        <Drawer.Navigator initialRouteName='Home' 
          screenOptions={{headerStyle:{backgroundColor:'red'},
          drawerActiveBackgroundColor:'pink',drawerActiveTintColor:'black',
            drawerStyle:{backgroundColor:'lightgray',width:300}}} defaultStatus='open'>

            <Drawer.Screen name='BottomTabNavigator' component={BottomTabNavigator} 
              options={{drawerLabel:'Home Screen',headerTitle:'Dashboard',
              drawerIcon:props=><MaterialCommunityIcons name="home" size={30} color='white' style={{padding:2}}/>}}/>
            <Drawer.Screen name='About' component={AboutScreen} />
            
         </Drawer.Navigator>

      //Custom Drawer
      /*<Drawer.Navigator drawerContent={props=><SideBar {...props}/>}>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='About' component={AboutScreen} />
      </Drawer.Navigator>*/
    
    )
  }
  
}

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen name='Root' component={Root}  options={{ headerShown: false }} />
          <Stack.Screen name='About' component={AboutScreen} />
        </Stack.Navigator>
       
      </NavigationContainer>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
