import React,{Component,Fragment} from "react";

class Parent extends Component{
    render(){
        return (
         <>
                <h3>hello World</h3>
                <h3>hello {this.props.name}</h3>
                
            </>
        )
    }
}


export default Parent; 