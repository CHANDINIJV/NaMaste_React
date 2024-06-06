import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";
class About extends Component{
    constructor(props){
        super(props)
        // console.log("Parent constructor called");
    }

    componentDidMount(){
        // console.log("parent componentDidMount called");
    }
render(){
    // console.log("Parent render called");
    return (
        <div>
            <h1>About Us Page</h1>
            <h2>This is learning react from Akshy Saini</h2>
        
            <UserClass name={"first"}/>
           
        </div>
        
    )
   
}
}

export default About;