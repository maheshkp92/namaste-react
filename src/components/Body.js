import RestaurantCard, { withShopSponceredLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";

import resObj from "../utils/mockdata";

import Shimmer from "./Shimmer";
import { RES_ALL_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable
  const [listOfRestraurants, setListOfRestraurants] = useState([]);
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardSponcered = withShopSponceredLabel(RestaurantCard);

  useEffect(() => {
    // API Call
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(RES_ALL_URL);
    const json = await data.json();
    // console.log(json.pageProps.data.vendors);
    setListOfRestraurants(json.pageProps.data.vendors);
    setFilteredRestraurants(json.pageProps.data.vendors);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>Looks Like Your offile! Please check your Internet connection</h1>
    );
  }

  const data = useContext(UserContext);
  console.log(data);
  return listOfRestraurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // console.log(searchText);
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <label>UserName</label>
          <input
            type="text"
            className="border border-solid border-black p-2 text-black"
            value={data.loggedInUser}
            onChange={(e) => data.setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
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
            {restaurant.isShopSponcered ? (
              <RestaurantCardSponcered
                key={restaurant.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
