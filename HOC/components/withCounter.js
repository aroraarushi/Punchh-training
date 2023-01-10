import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,{ Component } from 'react';

const UpdatedComponent = (WrappedComponent,incrementNumber) => {
    class NewComponent extends Component {
        constructor(props){
            super(props)
            this.state = {
              count: 0
            }
        }
        
        incrementCount = () => {
            this.setState(prevState => {
              return {count: prevState.count + incrementNumber}
            })
        }

        render(){
            return(
                <WrappedComponent 
                count = {this.state.count} 
                incrementCount = {this.incrementCount}
                {...this.props}
                />
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent

