import { useState } from 'react';
import { Text, View,TextInput,Appearance, ImageBackground  } from 'react-native';

export default function RnAppearance() {
  const colorScheme = Appearance.getColorScheme();
  
  const [name,setName] = useState("");
  const[age,setAge]= useState(0);

  return (
    <View style={{
        flex:1,
        padding:20,
        backgroundColor:colorScheme==='light'?'white':'gray'
    }}>
        
      <TextInput style={{
        marginTop:20,
        backgroundColor:colorScheme==='light'?'gray':'white',
        color:colorScheme==='light'?'white':'gray',
        padding:20
      }} 
      placeholder="Enter your name"
      onChangeText={(text)=>{setName(text);}}
      />

      <TextInput style={{
        marginTop:20,
        backgroundColor:colorScheme==='light'?'gray':'white',
        color:colorScheme==='light'?'white':'gray',
        padding:20
      }} 
      placeholder="Enter your age"
      onChangeText={(text)=>setAge(text)}
      />

      <Text style={{
        fontSize:20,
        marginTop:20, 
        color:colorScheme==='light'?'black':'white'
      }}>{name} {age} </Text>

    </View>
  );
}

