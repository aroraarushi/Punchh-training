import { useState } from 'react';
import {  StyleSheet, Text, View ,TextInput,ScrollView,RefreshControl} from 'react-native';
import styles from './styles';

export default function RnRefreshControl () {

  const [refresh,setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);
    setTimeout(()=>{
      setRefresh(false);
    },12000)
  } 
  return (
    <View style={styles.container}> 
        <ScrollView 
        refreshControl={<RefreshControl 
          refreshing={refresh}
          onRefresh={()=>pullMe()}
        />
        }
        >
        <Text>Pull to refresh</Text>
        </ScrollView>
        
    </View>
  );
}

