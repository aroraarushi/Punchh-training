import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
      marginTop:40,
      padding:20
    },
    input:{
        backgroundColor:'yellow',
        padding:20,
        marginBottom:20
    },
    text:{
        padding:20,
        marginVertical:10,
    
    },
    texts:{
        color:'red',
        fontFamily:'sans-serif-thin',
        fontStyle:"italic",
        fontWeight:"bold",
        letterSpacing:1,
        textAlign:'auto',
        textDecorationLine:'underline',
        textDecorationColor:'yellow',
        textTransform:"capitalize",
        fontSize:20
    },
    block:{
      backgroundColor:"red",

      padding:120,
      margin:50,
      borderWidth:15,
      borderLeftColor:"orange",
      borderBottomColor:"yellow",
      borderTopColor:"blue",
      borderRightColor:"green",
      borderBottomLeftRadius:50,
      borderBottomRightRadius:100,
      borderTopLeftRadius:80,
      borderTopRightRadius:50,
      opacity:0.4
    },
    touchable : {
    
      borderColor:"black",
      borderWidth:1
  },
  TouchableNativeFeedbackBlock:{
    height:700,
    width:400,
    marginTop:40,
    padding:20
  },
  item:{
    backgroundColor:"yellow",
    padding:20,
    marginVertical:10,

  },
  header:{
    fontSize:30,

  },
  title:{
    fontSize:25
  }
});

export default styles;