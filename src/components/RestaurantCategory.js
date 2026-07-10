import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.name} ({data?.items.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data?.items} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
