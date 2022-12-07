import React, { Component } from "react";
import Parent from "./Parent.js";
import { Student } from "./Student.js";

const el=React.createElement("h3",null,"Hello World");
class App extends Component{
    render(){
        return (<>
            <h1>Using JSX</h1>
            <h3>Hello World</h3>
            <h1>Using Create React Element</h1>
            {el}
            <h1> Class Component </h1>
            <Parent name = "Arushi" />
            <h1>Functional Component</h1>
            <Student name = "Arushi" />
            <Student name = "Arora" />
            <Student />
        </>
        )

    }
}
export default App;