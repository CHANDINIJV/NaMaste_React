import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const onlineStatus = useOnlineStatus();

    const [btnToggle, setBtnToggle] = useState("Login");
    return (
        <div className="flex m-5 mt-0 mx-1 justify-between border bg-blue-100 shadow-lg">
           <div className="m-2">
       
                <img  className="w-16" src={LOGO_URL}/>
           
           </div>
           <div className="text-center m-5">
            <ul className="flex space-x-4 m-2 text-center">
                <li className="text-center">Online Status: {onlineStatus ? <div className="success-color"></div>:<div className= "danger-color"></div>}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                
                <button className="btnToogle"
                onClick={
                    () =>{
                        btnToggle === "Login" ? setBtnToggle("LogOut") : setBtnToggle("Login")
                    }
                }
               >{btnToggle}</button>
            </ul>
           </div>
        </div>
    )
}

export default Header;