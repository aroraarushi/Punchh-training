import React, { Component } from "react";
import Parent from "./Parent";
import {Student} from "./Student";
import {Student1} from "./Student";
import Employee  from "./Employee";
import Event from './event';



class App extends Component{
  render(){
    return(
      //props
      <>
        <Parent name= "Arushi" rollno="102" />
        <Parent  rollno="102" />
        <Student name="Arushi" rollno={100+1} />
        <Student1>Arushi</Student1> 
        <Employee designation = "Manager" />
        <Event roll="105"/>
      </>
    )
  }
}

export default App;




