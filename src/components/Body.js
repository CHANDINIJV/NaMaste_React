import resList from "../utils/mockData";
import ResCards from "./Rescard";

const Body = () =>{
    return (
        <div className="search-container">
            <div className="search">
                Search
            </div>
            <div className="rescard-container">
           {
            resList.map((restaurant)=>(
                <ResCards key={restaurant.info.id} resData={restaurant} />
            ))
            }
     </div>
        </div>
        
       

    )
}

export default Body;