
import ResCards from "./Rescard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () =>{

    const [listOfRes, setListofRes] = useState([]);

    const [filterRes, setFilterRes] = useState([]);

    const [searchText, setSearchtext] = useState("");

    useEffect(() =>{
        fetchData();
    }, []);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

  

    return (listOfRes === null )? <Shimmer /> :  (
        <div className="search-container">
            <div className="search">
                <input type="text" value={searchText}
                onChange={
                    (e) =>{
                        setSearchtext(e.target.value)
                    }
                }/>
                <button className="search"
                onClick={() =>{
                    const filterRes = listOfRes.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilterRes(filterRes)
                    
                }
                }>Search</button>
            </div>
                <button className="filter-btn"
                onClick= {() =>{
                    const filter = listOfRes.filter(
                        (res) => res.info.avgRating > 4.3 
                    );
                    setListofRes(filter);
                }
                }
                >Top Rated Restaurant</button>
            
            <div className="rescard-container">
           {
            filterRes?.map((restaurant)=>(
               <Link key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id }><ResCards  resData={restaurant} /></Link> 
            ))
            }
     </div>
        </div>
        
       

    )
}

export default Body;