import resList from "../utils/mockData";
import ResCards from "./Rescard";
import { useState } from "react";

const Body = () =>{

    const [listOfRes, setListofRes] = useState(resList);
    return (
        <div className="search-container">
            <div className="search">
                <button class="filter-btn"
                onClick= {() =>{
                    const filter = listOfRes.filter(
                        (res) => res.info.avgRating > 4.3 
                    );
                    setListofRes(filter);
                }
                }
                >Top Rated Restaurant</button>
            </div>
            <div className="rescard-container">
           {
            listOfRes.map((restaurant)=>(
                <ResCards key={restaurant.info.id} resData={restaurant} />
            ))
            }
     </div>
        </div>
        
       

    )
}

export default Body;