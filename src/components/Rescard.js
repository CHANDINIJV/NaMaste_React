import { CARD_URL } from "../utils/constants";
const ResCards = (props) =>{
    
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info;
    
        return (
            <div className="res-card">
              
                    <div className="res-food-img">
                        <img className="res-food" src={CARD_URL+cloudinaryImageId }/>
                    </div>
                    <div className="res-reviews">
                    <h3>{name}</h3>
                    <h4>{cuisines}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{avgRating} Ratings</h4>
                  
                    </div>
                   
               
            </div>
        )
    } 
    export default ResCards;