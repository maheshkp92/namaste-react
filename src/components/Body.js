import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

import resObj from "../utils/mockdata";

const Body = () => {
  // Local State Variable
  const [listOfRestraurants, setListOfRestraurants] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraurants.filter(
              (res) => res.rating > 4.5,
            );
            setListOfRestraurants(filteredList);
          }}
        >
          Top rated Button
        </button>
      </div>
      <div className="res-container">
        <div className="restaurant-card">
          {listOfRestraurants.map((restaurant) => (
            <RestaurantCard key={restaurant.resId} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
