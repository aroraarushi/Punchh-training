import { StatusBar } from 'expo-status-bar';
import { useEffect,useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,Image, Alert, ScrollView,TouchableWithoutFeedback,Keyboard,TouchableOpacity } from 'react-native';

export default function App() {
  //vote
  const[age,setAge] = useState(0);
  const ageHandler = () => {
    if(age>=18){
      Alert.alert("You can vote");
    }
    else{
      Alert.alert("You cannot vote");
    }
  }

  //dice
  const [dice,setDice] = useState(1);
  const images={
    pics:{
      '0': require('./assets/Alea_1.png'),
      '1': require('./assets/Alea_2.png'),
      '2': require('./assets/Alea_3.png'),
      '3': require('./assets/Alea_4.png'),
      '4': require('./assets/Alea_5.png'),
      '5': require('./assets/Alea_6.png'),
    }
  }

  //custom alert dialog
  const [name,setName] = useState("");
  const [personage,setPersonAge] = useState(0);
  const [gender,setGender] = useState("");

  const Submit = () => {
    Alert.alert("Details","Are you sure you want to submit ?",[
    {text:"Yes", onPress: ()=> console.log("Yes")},
    {text:"No", onPress: ()=> noHandler()}
    ])
  }

  const noHandler = () =>{
    setName("");
    setPersonAge(0);
    setGender("");
  }

  const [FathersName,setFathersName] = useState("");
  
  //use effect
  const [number, setNumber] = useState(0);

  useEffect(()=>{
    if(number>5){
      console.warn("Warning! you can only increase upto 5")
    }
  })

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("Keyboard is dismissed");
    }}>
    <View style={styles.container}>
      <ScrollView>
      <TextInput style={styles.input} placeholder="enter your name"/>
      <TextInput style={styles.input} placeholder="enter your age" onChangeText={(text)=>setAge(text)}/>
      <Button title="Can I Vote" style={styles.button} onPress={()=>ageHandler()}/>

      <Image style={styles.image} source ={images.pics[dice]} />
      <Button style={styles.button} title='Roll' onPress={() => setDice(Math.floor(Math.random()*6))} />

      <TextInput onChangeText={(text)=>setName(text)} style={styles.input} placeholder="Name"/>
      <TextInput onChangeText={(text)=>setPersonAge(text)} style={styles.input} placeholder="Age"/>
      <TextInput onChangeText={(text)=>setGender(text)} style={styles.input} placeholder="Gender"/>
      <Button title='Submit' style={styles.button} onPress={()=>Submit()}/>
      <Text>{name} {personage} {gender}</Text>

      <TextInput style={styles.input} onChangeText={(text) => setFathersName(text)} placeholder="Enter your Father's Name"/>
        <TouchableOpacity onPress={()=> Alert.alert("Details","Your father name is " + FathersName.toString())}>
          <View style={styles.customButton}>
            <Text>Press</Text>
          </View>
      </TouchableOpacity>

      <Text style={styles.label}>{number}</Text>
      <Button title = "Update" onPress={()=>setNumber(number+1)}/>

      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    margin:"10%"
  },
  input:{
    width: "90%",
    backgroundColor:"lightgray",
    borderColor:"black",
    borderWidth:1,
    margin:10,
    padding:10
  },
  image:{
    margin:30
  },
  button:{
    margin:20
  },
  customButton:{
    backgroundColor: "yellowgreen",
    padding:10,
    borderWidth: 3,
    borderColor:"black",
    borderRadius:20,
    marginTop:30,
    justifyContent:"center",
    alignItems:"center",
  },
  label: {
    fontSize: 20,
    color: "red",
    padding: 20
  }
});
