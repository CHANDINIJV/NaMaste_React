import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () =>{

    const [btnToggle, setBtnToggle] = useState("Login");
    return (
        <div className="head-container">
           <div className="logo-container">
            <div>
                <img  className="logo" src={LOGO_URL}/>
            </div>
           </div>
           <div className="nav-links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                
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