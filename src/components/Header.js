import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
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