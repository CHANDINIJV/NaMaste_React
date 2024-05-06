import React from "react";
import ReactDOM from "react-dom/client";

//Assignment
const Header = () =>{
    return (
        <div className="head-container">
           <div className="logo-container">
            <div>
                <img  className="logo" src="https://c1.klipartz.com/pngpicture/504/237/sticker-png-hamburger-logo-silhouette-headgear-cap-cheeseburger-food-fast-food-thumbnail.png"/>
            </div>
           </div>
           <div className="nav-links">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
           </div>
        </div>
    )
}

const BodyComponent = () =>{
    return (
        <div className="search-container">
            <div className="search">
                Search
            </div>
            <div className="rescard-container">
         <ResCards/>
         <ResCards/>
         <ResCards/>
         <ResCards/>
         <ResCards/>
         <ResCards/>
         <ResCards/>
         <ResCards/>
         <ResCards/>
         <ResCards/>
     </div>
        </div>
        
       

    )
}

const ResCards = () =>{
    return (
        <div className="res-container">
            <div className="res-card">
                <div className="res-food-img">
                    <img className="res-food" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/zuthvcwjjvdjmo6n1pbl"/>
                </div>
                <div className="res-reviews">
                <h3>Meghana Biriyani</h3>
                <h4>4.4 rating</h4>
                <h5>Chiken Biriyani, andra style chiken biriyani, south indian</h5>
                </div>
               
            </div>
        </div>
    )
} 
const AppLayout = () =>{
    return(
        <div className="container">
           <Header />
           <BodyComponent />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);