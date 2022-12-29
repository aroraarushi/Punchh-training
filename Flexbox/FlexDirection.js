import { Component } from "react";
import { ScrollView,View,Text,StyleSheet } from "react-native";

export default class FlexDirection extends Component{
    render(){
        return(
            <ScrollView>
            <View>
                <View style={styles.outerbox1}>
                    <Text style={styles.box}>A</Text>
                    <Text style={styles.box}>B</Text>
                    <Text style={styles.box}>C</Text>
                    <Text style={styles.box}>D</Text>
                </View>
                <View style={styles.outerbox2}>
                    <Text style={styles.box}>A</Text>
                    <Text style={styles.box}>B</Text>
                    <Text style={styles.box}>C</Text>
                    <Text style={styles.box4}>D</Text>
                </View>
                <View style={styles.outerbox3}>
                    <Text style={styles.box}>A</Text>
                    <Text style={styles.box}>B</Text>
                    <Text style={styles.box}>C</Text>
                    <Text style={styles.box}>D</Text>
                </View>
                <View style={styles.outerbox4}>
                    <Text style={[styles.box,{alignSelf:'flex-start'}]}>A</Text>
                    <Text style={[styles.box,{alignSelf:'baseline'}]}>B</Text>
                    <Text style={styles.box}>C</Text>
                    <Text style={[styles.box,{alignSelf:'flex-end'}]}>D</Text>
                </View>
                <View style={styles.outerbox5}>
                    <Text style={[styles.box,{alignSelf:'stretch',width:"auto",minWidth:50}]}>A</Text>
                    <Text style={[styles.box,{alignSelf:'center'}]}>B</Text>
                    <Text style={styles.box}>C</Text>
                    <Text style={styles.box}>D</Text>
                </View>
                <View style={styles.outerbox6}>
                    <Text style={styles.box}>A</Text>
                    <Text style={styles.box}>B</Text>
                    <Text style={styles.box}>C</Text>
                    <Text style={styles.box}>D</Text>
                    <Text style={styles.box}>E</Text>
                    <Text style={styles.box}>F</Text>
                    <Text style={styles.box}>G</Text>
                    <Text style={styles.box}>H</Text>
                </View>
              
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  
    outerbox1:{
      height:120,
      backgroundColor:'aliceblue',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start'
     
      
    },
    box:{
      height:50,
      width:50,
      backgroundColor:'skyblue',
      margin:4,
      fontSize:35,
      paddingLeft:10
    },

    box4:{
        width:"auto",
        minWidth:50,
        height:50,
        backgroundColor:'skyblue',
        margin:4,
        fontSize:35,
        paddingLeft:10
    },
    outerbox2:{
        marginTop:20,
        height:300,
        backgroundColor:'aliceblue',
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'stretch'
    },
    outerbox3:{
        marginTop:20,
        height:120,
        backgroundColor:'aliceblue',
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    outerbox4:{
        marginTop:20,
        backgroundColor:'aliceblue',
        flexDirection:'column-reverse',
        height:300,
        justifyContent:'center',
        alignItems:'center'
    },
    outerbox5:{
        marginTop:20,
        backgroundColor:'aliceblue',
        flexDirection:'column',
        height:300,
        justifyContent:'space-around',
        alignItems:'baseline'
    },
    outerbox6:{
        marginTop:20,
        backgroundColor:'aliceblue',
        flexDirection:'column',
        height:300,
        justifyContent:'space-evenly',
        flexWrap: "wrap",
    }
  });
  