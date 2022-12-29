import { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import ButtonClicked from './ButtonClicked';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Details from './Details';

/*const RootStack = createStackNavigator(
  {
    Home: {
      screen:Home,
      navigationOptions:{
        headerShown:false,
      }
    },
    ButtonClicked: {
      screen:ButtonClicked,
      navigationOptions:{
        headerShown:false,
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);*/

export default class App extends Component {
  
  

  render(){ 
    return (
    //<AppContainer />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="ButtonClicked" component={ButtonClicked} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
      
     
    );
  }
  
}

