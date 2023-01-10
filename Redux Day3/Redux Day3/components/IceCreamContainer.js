import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';
import {connect} from 'react-redux';
import {buyIceCream} from '../index';
import {addIceCream} from '../index';

class  IceCreamContainer extends Component{
    
    render(){
        return(
            <View>
                <Text>Number of ice cream - {this.props.numOFIceCream}</Text>
                <Button title='Buy Ice Cream' onPress={this.props.buyIceCream}/>
                <Text>Number of Added ice cream - {this.props.addedIceCream}</Text>
                <Button title='Add Ice Cream'  onPress={this.props.addIceCream}/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numOFIceCream: state.icecream.numOFIceCream,
        addedIceCream: state.icecream.addedIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream()),
        addIceCream:() => dispatch(addIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);