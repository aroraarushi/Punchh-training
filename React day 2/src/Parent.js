import React,{Component,Fragment} from "react";
import PropTypes from "prop-types";

class Parent extends Component{
    render(){
        return (
            //props
            <>
                <h3>Hello {this.props.name}</h3>
                <h3>Roll No: {this.props.rollno}</h3>
                
            </>
        )
    }
}

Parent.propTypes = {
    name: PropTypes.string.isRequired
}; 

Parent.defaultTypes = {
    name: "ABC"
}; 



export default Parent;

