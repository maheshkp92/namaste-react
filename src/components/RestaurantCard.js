const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="m-4 p-4 w-[200px] bg-gray-200 rounded-lg shadow-lg hover:bg-gray-300">
      <img
        src={resData.logo}
        alt={resData.name || "Restaurant Logo"}
        className="rounded-2xl"
      />
      <h3 className="font-bold py-4 text-lg">{resData.name}</h3>
      <h4 className="res-cuisines">{resData.cuisineString}</h4>
      <h4 className="res-rating">{resData.rate} Star</h4>
      <h4 className="res-time">{resData.avgDeliveryTime}</h4>
    </div>
  );
};

export const withShopSponceredLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Sponcered
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
