import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';
import { buyCake } from '../index';
import {connect} from 'react-redux';
import {addCake} from '../index';

class  CakeContainer extends Component{
    
    render(){
        return(
            <View>
                <Text>Number of cakes - {this.props.numOfCakes}</Text>
                <Button title='Buy Cake' onPress={this.props.buyCake}/>
                <Text>Number of Added cakes - {this.props.addedCake}</Text>
                <Button title='Add Cake'  onPress={this.props.addCake}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
        addedCake: state.cake.addedCake
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake:() => dispatch(addCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);