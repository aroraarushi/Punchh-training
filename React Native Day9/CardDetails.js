import { Component } from "react";
import { StyleSheet,View,Text,Image } from "react-native";

export default class CardDetails extends Component{
  
    render(){const{textdata,imgsrc}=this.props;
        return (
            <View>
                <Text style={styles.text}>{textdata}</Text>
                <Image style= {styles.image} source={imgsrc} />
            </View>
        
        );
    }
}

const styles= StyleSheet.create({
    image:{
        height:300,
        width:300
    },
    text:{
        marginTop:20,
        fontSize:20
    }
});