import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () =>{

    const [resInfo, setresInfo] = useState(null);
     const {resId} = useParams();

    useEffect(()=>{
        fetchMenu()
    },[]);
    
    const fetchMenu = async ()=> {
        const data = await fetch( MENU_API+resId);
        const json = await  data.json();
        console.log(json);
        setresInfo(json.data);
     }
    

     if(resInfo === null) return <Shimmer />;
     const {name, cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return (
        <div className="menu">
         <h1>{name}</h1>
        <p>{cuisines} -{costForTwoMessage}</p>
        <h3>Menu</h3>
      
         <ul>
          
           <li>{itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name} -Rs. {item.card.info.defaultPrice/100 || item.card.info.price /100 }</li>))}</li>
         </ul>
        </div>
    )
}
export default RestaurantMenu;