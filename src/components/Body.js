
import ResCards from "./Rescard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  
  
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like your offline!!Please Check your internet Connection</h1>;
    return (listOfRes === 0 ) ? <Shimmer /> :  (
        <div className="m-4">
            <div className=" flex search">
                <div className=" ">
                <input type="text" className="border rounded p-1 m-1" value={searchText}
                onChange={
                    (e) =>{
                        setSearchtext(e.target.value)
                    }
                }/>
                <button className="bg-green-300 p-1 rounded"
                onClick={() =>{
                    const filterRes = listOfRes.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilterRes(filterRes)
                    
                }
                }>Search</button>
            </div>
            <div>
            <button className="text-center bg-slate-100 border rounded mt-2 m-2 p-0"
                onClick= {() =>{
                    const filter = listOfRes.filter(
                        (res) => res.info.avgRating > 4.3 
                    );
                    setListofRes(filterRes);
                }
                }
                >Top Rated Restaurant</button>
            </div>
            </div>
                
            <div className="flex flex-wrap">
           {
            filterRes?.map((restaurant)=>(
               <Link key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id }><ResCards   resData={restaurant} /></Link> 
            ))
            }
     </div>
        </div>
        
       

    )
}

export default Body;