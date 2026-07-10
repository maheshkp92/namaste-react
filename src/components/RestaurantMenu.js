import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId, resSlug } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const handleToggle = (index) => {
    setShowIndex(index === showIndex ? null : index);
  };

  const dummy = "dummy data from parent";

  const resInfo = useRestaurantMenu(resId, resSlug);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resInfo?.restaurant?.name}</h1>
      <h3 className="font-bold text-lg my-4">
        Cuisines:{resInfo?.restaurant?.cuisineString}
      </h3>
      <h2 className="font-bold text-sm">Rate:{resInfo?.restaurant?.rate}</h2>
      <h2 className="font-bold text-sm">
        Total ratings:{resInfo?.restaurant?.totalRatings}
      </h2>
      {/* Build Accordian for the menu */}
      {resInfo?.menuData?.categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category.name}
          data={category}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => handleToggle(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
