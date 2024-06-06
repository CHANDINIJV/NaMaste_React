import { useState } from "react";
import Users from "./Users";
const User = ({name}) =>{
    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h2>Count ={count}</h2>
            <h2>Count ={count2}</h2>
           <h2>Name: {name}</h2>
           <h3>Location: Banglore</h3>
           <Users />
        </div>
    )
}
export default User;