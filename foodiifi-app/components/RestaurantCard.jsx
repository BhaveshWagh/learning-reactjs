/* eslint-disable react/prop-types */
import { LOGO_URL } from "../src/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    costForTwo,
    deliveryTime,
    avgRating,
  } = resData;
  return (
    <div className="res-card">
      <div className="img-container">
        <img
          className="res-logo"
          src={LOGO_URL + cloudinaryImageId}
          alt="Food Images"
        />
      </div>
      <h2>{name}</h2>
      <h3>Cuisines: {cuisines.join(", ")}</h3>
      <h4>Area : {area}</h4>
      <h4>Price : ₹{costForTwo / 100} FOR TWO</h4>
      <h4>Delivery : {deliveryTime} Minutes</h4>
      <h4>Rating : {avgRating} ⭐</h4>
    </div>
  );
};

export default RestaurantCard;
