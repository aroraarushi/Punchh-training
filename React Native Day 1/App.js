import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const [name,setName] = useState("My name is Arushi Arora")
  const [person,setPerson] = useState({name:"ABC",age:30})
  const [age,setAge] = useState(24) 
  const [designation,setDesignation] =useState("Software Engineer")
  const [fruit,setFruit] = useState([
    {name:"Apple",key:1},
    {name:"Mango",key:2},
    {name:"Grapes",key:3},
    {name:"Orange",key:4},
    {name:"Banana",key:5}
  ]);
  const[people,setPeople]=useState([
    {name:"ABC",key:1},
    {name:"DEF",key:2},
    {name:"XYZ",key:3},
    {name:"QWE",key:4},
    {name:"TYU",key:5},
  ])

  const changeName=()=>{
    setName("Arushi")
    setPerson({name:"DEF",age:50})
  }

  const pressHandler=(name)=>{
    console.log(name);
  }
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.textStyle}>Arushi Arora</Text>
      <Button title='Click Me' color="red" onPress={()=>alert("Hello World!")} ></Button>
      <Button title='OK' color="blue" onPress={()=>alert("Hello hvWorld!")} disabled={true}></Button>
      <Text>{name}</Text>
      <Text>Name:{person.name} Age:{person.age}</Text>
      <View style={styles.button}>
        <Button title="change"  onPress={changeName} />
      </View>

      <Text>Designation:{designation} Age:{age}</Text>
      <TextInput style={styles.input} placeholder='enter your designation' onChangeText={(text)=>setDesignation(text)}/>
      <TextInput style={styles.input} placeholder='enter your age' onChangeText={(text)=>setAge(text)} keyboardType="numeric" />
      
      {
        fruit.map((item)=>{
           return(
            <View>
              <Text style={styles.item}>{item.name}</Text>
            </View>
           )
        })
      }
      
      <FlatList 
        keyExtractor={(item)=>item.key}
        data={fruit}
        renderItem={({item})=>(
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      
      <FlatList 
        
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>pressHandler(item.name)}><Text style={styles.items}>{item.name}</Text></TouchableOpacity>
        )}
      />
      
    </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40
  },
  textStyle:{
    fontSize:30,
    color:"green",
    fontWeight:"bold",
    fontStyle:"italic",
    backgroundColor:"yellow",
  },
  button:{
    padding:10,
    margin:30
  },
  input:{
    borderColor:"black",
    borderWidth:1,
    padding:10,
    margin:30,
    width:150
  },
  item:{
    fontSize:30,
    backgroundColor:"pink",
    marginTop:20,
    padding:20
  },
  items:{
    fontSize:30,
    backgroundColor:"cyan",
    marginTop:20,
    padding:20
  }
});
