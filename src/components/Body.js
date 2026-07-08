import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

import resObj from "../utils/mockdata";

import Shimmer from "./Shimmer";
import { RES_ALL_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable
  const [listOfRestraurants, setListOfRestraurants] = useState([]);
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API Call
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(RES_ALL_URL);
    const json = await data.json();
    console.log(json.pageProps.data.vendors);
    setListOfRestraurants(json.pageProps.data.vendors);
    setFilteredRestraurants(json.pageProps.data.vendors);
  };

  return listOfRestraurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              setFilteredRestraurants(
                listOfRestraurants.filter((res) =>
                  res.name.toLowerCase().includes(searchText.toLowerCase()),
                ),
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestraurants.filter(
              (res) => res.rate > 4.5,
            );
            setFilteredRestraurants(filteredList);
          }}
        >
          Top rated Button
        </button>
      </div>
      <div className="res-container">
        <div className="restaurant-card">
          {filteredRestraurants.map((restaurant, index) => (
            <Link
              key={restaurant.branchSlug}
              to={
                "/restaurants/" +
                restaurant.branchId +
                "/" +
                restaurant.branchSlug
              }
            >
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
