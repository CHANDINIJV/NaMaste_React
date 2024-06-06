import React from "react";
import About from "./About";
class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userInfo:{
              login:"chandini",
              location:"banglore"
            }
         }
        
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/CHANDINIJV");
        const json = await data.json();
        console.log(json);

        this.setState(
             {
                userInfo:json
             }
        )
        
    }
    componentDidUpdate(){
        console.log("component updated");
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
      const {login,location, avatar_url} = this.state.userInfo 
        return(
            <div className="user-card">
                <img src={avatar_url} alt="not rendered"/>
            <h2>Name: {login}</h2>
            <h3>Location: {location}</h3>
            
         </div>
        )
        
    }
}
export default UserClass;