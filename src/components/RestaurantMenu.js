import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId, resSlug } = useParams();
  console.log(resId, resSlug);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId + "&branchSlug=" + resSlug);
    const json = await data.json();
    // console.log(json.pageProps.initialMenuState.menuData.items);
    setResInfo(json.pageProps.initialMenuState);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.restaurant?.name}</h1>
      <h3>Cuisines:{resInfo?.restaurant?.cuisineString}</h3>
      <h2>Rate:{resInfo?.restaurant?.rate}</h2>
      <h2>Total ratings:{resInfo?.restaurant?.totalRatings}</h2>
      <h2>menu</h2>
      <ul>
        {resInfo?.menuData?.items.map((item, index) => (
          <li key={index}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
