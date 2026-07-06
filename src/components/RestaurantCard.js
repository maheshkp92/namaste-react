const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img src={resData.resImage} alt="Restaurant Logo" className="res-logo" />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.rating} ⭐</h4>
      <h4>38 Mins</h4>
    </div>
  );
};

export default RestaurantCard;
