import { StatusBar } from 'expo-status-bar';
import {  Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import AboutScreen from './src/Screens/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactScreen from './src/Screens/ContactScreen';
import ServiceScreen from './src/Screens/ServiceScreen';
import navigationStrings from './src/constants/navigationStrings';



const Stack = createStackNavigator()
console.log(Stack);


export default function App() {
  return (

    /*Screen Props 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={
        {headerStyle:{backgroundColor:"red"}}}>
        <Stack.Screen name="Home" component={HomeScreen} options={
        {headerStyle:{backgroundColor:"red"},
        title:'Arushi App',headerTintColor:'white',
        headerTitleStyle:{fontWeight:'bold'},
        headerTitleAlign:'center',headerShown:true,
        headerLeft:(props)=><MaterialCommunityIcons name="home" size={34} color='white' 
        onPress={()=>console.log('Home Clicked')} />,
        headerRight:(props)=><MaterialCommunityIcons name="bell-circle" size={34} color='white' 
        onPress={()=>console.log('Bell Clicked')} />}} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
        </NavigationContainer>*/

        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Group screenOptions={
          {headerStyle:{backgroundColor:"red"},
        title:'Arushi App',headerTintColor:'white',
        headerTitleStyle:{fontWeight:'bold'},
        headerTitleAlign:'center',headerShown:true,
        headerLeft:(props)=><MaterialCommunityIcons name="home" size={34} color='white' 
        onPress={()=>console.log('Home Clicked')} />,
        headerRight:(props)=><MaterialCommunityIcons name="bell-circle" size={34} color='white' 
        onPress={()=>console.log('Bell Clicked')} />}}>
            <Stack.Screen name={navigationStrings.HOME} component={HomeScreen} />
            <Stack.Screen name={navigationStrings.ABOUT} component={AboutScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={
          {headerStyle:{backgroundColor:"green"},
        title:'Arushi App',headerTintColor:'white',
        headerTitleStyle:{fontWeight:'bold'},
        headerTitleAlign:'center',headerShown:true,
        headerLeft:(props)=><MaterialCommunityIcons name="home" size={34} color='white' 
        onPress={()=>console.log('Home Clicked')} />,
        headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          )}} >
            <Stack.Screen name={navigationStrings.CONTACT} component={ContactScreen} />
            <Stack.Screen name={navigationStrings.SERVICE} component={ServiceScreen} />
          </Stack.Group>
          
          </Stack.Navigator>
          
        </NavigationContainer>
       
       
  );
}