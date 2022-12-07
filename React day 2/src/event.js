import React, { Component } from 'react'

class Event extends Component{
    constructor(props){
        super(props);
        this.state={
            id:1,
            name:"ABC",
            roll:this.props.roll
        };
    }
    //update the state
    change=()=>{
        this.setState({
            name:"XYZ",
            roll:"102"
        });
        this.setState((state,props)=>{
            console.log(state.name);
            console.log(props.roll);
        });
    }
    handleClick=(id,e)=>{
        console.log("button clicked",this);
        console.log(id);
        console.log(e);
    }

    handleClickArg=e=>{
        this.handleClick(this.state.id,e);
    }
    click=( )=>{
        console.log("clicked");
    }
    clicked=(e)=>{
        e.preventDefault();
        console.log("clicked");
    }
    render(){
        return(
            <>
                <h3>Name:{this.state.name} Roll No:{this.state.roll}</h3>
                <a href="https://github.com/aroraarushi/Punchh-training" on onClick={this.clicked}>Prevent Default</a>
                <button onClick={this.handleClick}>Click </button>
                <a href="https://github.com/aroraarushi/Punchh-training" on onClick={this.click}>click</a>
                <button onClick={this.change}>Change Values</button>
                <button onClick={this.handleClickArg}>Id</button>
               
            </>
        )
    }
}
export default Event;