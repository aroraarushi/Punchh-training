import React,{Component} from "react";

//state
class Employee extends Component{
    state={
        name: "ABC",
        designation: this.props.designation
    }
    render(){
        return (  //props
            <>
               <h3>Hello {this.state.name}</h3>
               <h3>Designation: {this.state.designation}</h3>
               
            </>
           )
    }
}
export default Employee; 