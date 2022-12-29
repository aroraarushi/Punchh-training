import { Component } from "react";
import { View,Text,StyleSheet } from "react-native";

export default class Flex extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: "red" }} />
                <View style={{ flex: 2, backgroundColor: "orange" }} />
                <View style={{ flex: 3, backgroundColor: "green" }} />
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexDirection:"column"
    },
  });