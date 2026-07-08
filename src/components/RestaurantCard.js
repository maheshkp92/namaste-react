const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        src={resData.logo}
        alt={resData.name || "Restaurant Logo"}
        className="res-logo"
      />
      <h3 className="res-name">{resData.name}</h3>
      <h4 className="res-cuisines">{resData.cuisineString}</h4>
      <h4 className="res-rating">{resData.rate} Star</h4>
      <h4 className="res-time">{resData.avgDeliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
