import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {connect} from 'react-redux';
import { decreaseCounter, increaseCounter } from "./action";

class CounterApp extends Component{
    render(){
        return(
            <View style={{flexDirection:'row',justifyContent:'space-around',width:200}}>
                <TouchableOpacity onPress={()=>this.props.increaseCounter() }>
                    <Text style={{fontSize:20}}>Increase</Text>
                </TouchableOpacity>
                <Text style={{fontSize:20}}>{this.props.counter}</Text>
                <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
                    <Text style={{fontSize:20}}>Decrease</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch){
    return{
        increaseCounter  : () => dispatch(increaseCounter()),
        decreaseCounter : () => dispatch(decreaseCounter())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);