
import { Component } from 'react';
import { StyleSheet, Text, View,ScrollView,Button,TextInput,FlatList, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      name: "My name is Arushi Arora",
      person:{
        
          name:'ABC',
          age:22
        },
      designation:"Software Engineer",
      age:30,
      fruit:[
        {name:"Apple",key:1},
        {name:"Mango",key:2},
        {name:"Grapes",key:3},
        {name:"Orange",key:4},
        {name:"Banana",key:5}
      ]

    }
  }

  changeName=()=>{
    this.setState({name:"Arushi"})
    this.setState({person:{name:"DEF",age:50}})
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.textStyle}>Arushi Arora</Text>
          <Button title='Click Me' color="red" onPress={()=>alert("Hello World!")} ></Button>
          <Button title='OK' color="blue" onPress={()=>alert("Hello World!")} disabled={true}></Button>

          <Text>{this.state.name}</Text>
          <Text>Name:{this.state.person.name} Age:{this.state.person.age}</Text>
          <View style={styles.button}>
            <Button title="change"  onPress={this.changeName} />
          </View>

          <Text>Designation:{this.state.designation} Age:{this.state.age}</Text>
          <TextInput style={styles.input} placeholder='enter your designation' onChangeText={(text)=>this.setState({designation:text})}/>
          <TextInput style={styles.input} placeholder='enter your age' onChangeText={(text)=>this.setState({age:text})} keyboardType="numeric" />

          {
            this.state.fruit.map((item)=>{
            return(
              <View>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
            })
          }

          <FlatList 
            keyExtractor={(item)=>item.key}
            data={this.state.fruit}
            renderItem={({item})=>(
            <TouchableOpacity><Text style={styles.item}>{item.name}</Text></TouchableOpacity>
          )}
          />

       
        </ScrollView>
      </View>
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
  textStyle:{
    margin:40,
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
});
