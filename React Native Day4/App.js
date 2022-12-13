import { ActivityIndicator, StyleSheet, Text, View ,TextInput, ScrollView} from 'react-native';
import RnActivityIndicator from './RnActivityIndicator.js';
import PressableComponent from './PressableComponent.js';
import RnRefreshControl from './RnRefreshControl.js';
import TextStyle from './TextStyle.js';
import ViewStyleProps from './ViewStyleProps.js';
import ImageProps from './ImageProps.js';
import RnTouchableNativeFeedback from './RnTouchableNativeFeedback.js';
import RnToastAndroid from './RnToastAndroid.js';
import RnSectionList from './RnSectionList.js';
import CustomSectionList from './CustomSectionList.js';

export default function App() {

  const DATA = [
    {
        title:" Main Items",
        data: ["Pizza", "Burger"]
    },
    {
        title:"Sides",
        data:["French Fries", "Zingy Parcel"]
    },
  ]
  const DATA2=[
    {
        title:"Beverages",
        data:["Coca Cola", "Cold Coffee", "Sprite"]
    },
    {
        title:"Desserts",
        data:[ "Cake","Ice Creams"]
    }   
  ]

  return (
    <View style={{flex:1}}>
      <ScrollView>
         <RnActivityIndicator />
         <PressableComponent />
         <RnSectionList />
         <CustomSectionList data={DATA}/>
         <CustomSectionList data={DATA2}/>
         <RnRefreshControl />
         <TextStyle />
         <ViewStyleProps />
         <ImageProps />
         <RnTouchableNativeFeedback />
         <RnToastAndroid />
         </ScrollView>
    </View>
  );
}

