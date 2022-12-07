import React from "react"

//props
export const Student = (props) => {
    return (
    <>
        <h3>Hello {props.name}</h3>
        <h3>Roll No: {props.rollno}</h3>
       
    </>
    )
}

//children in jsx
export const Student1 = (props) => {
    return (
    <>
        <h3>Hello {props.children}</h3>
    </>
    )
}
 