import { CARD_URL } from "../utils/constants";
const ResCards = (props) =>{
    
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info;
    
        return (
            <div className="w-60 m-5 border hover:shadow-lg">
              
                    <div className="res-food-img">
                        <img className="w-25 m-1" src={CARD_URL+cloudinaryImageId }/>
                    </div>
                    <div className="res-reviews">
                    <h3>{name}</h3>
                    <h4>{cuisines.join(",")}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{avgRating} Ratings</h4>
                  
                    </div>
                   
               
            </div>
        )
    } 
    export default ResCards;