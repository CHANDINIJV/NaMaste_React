
import React from "react";
import ReactDOM from "react-dom/client";



const Header = () =>{
    return (
        <div className="header-container">
            <div className="log-container">
                <img className="logo" src="https://c8.alamy.com/comp/RKYBE3/restaurant-menu-food-logo-icon-vector-concept-flat-design-RKYBE3.jpg" alt="not rendered"/> 
            </div>
            <div className="nav-items">
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

const RestaurantCard = (props) =>{
     const resName = props;
     return (
        <div className="res-card">
            <div className="res-img-container">
                <img className="dish-img" src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/xqwpuhgnsaf18te7zvtv"/>
            </div>
            <div className="res-details">
                <h3>{props.resName}</h3>
                <h3>Chiken biriyani, south indian</h3>
                <h3>400 for two</h3>
                <h3>3.4 ratings</h3>
                
            </div>
        </div>
     )

}
const RestaurantList = {
    name:"Meghana Biriyani",
    cusines:"Chiken biriyani, south indian",
    cost:"400 per two",

}


const BodyComponent = () =>{
    return (
        <div className="body-container">
            <div className="search-container">
                <input type="text" placeholder="Search here"/>
             </div>
            <div className="rescard-container">
            <RestaurantCard resName="Meghana Biriyani"/>
            <RestaurantCard resName="KFC"/>
            </div>
            
        </div>
    )
}
const AppLayout = () =>{
return (
    <div className="container">
        <Header />
        <BodyComponent />
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)