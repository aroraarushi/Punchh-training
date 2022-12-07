import React, { Component } from "react";
import "./App.css";

//JSX

let user = {
    firstname: "Arushi"
  };
  
const element = <h1 className="bg">Hello {user.firstname}</h1>

export default element;