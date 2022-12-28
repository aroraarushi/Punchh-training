import { Component } from "react";
import { View,Text,Image } from "react-native";
import CardDetails from "./CardDetails";

export default class Images extends Component{
    render(){
        return (
            <View>
                <CardDetails  textdata="This is my first image" imgsrc= {require("./assets/tree.jpg")} />
                <CardDetails  textdata="This is my second image" imgsrc= {require("./assets/tree.jpg")} />
                <CardDetails  textdata="This is my third image" imgsrc= {require("./assets/tree.jpg")} />
            </View>
        );
    } 
}