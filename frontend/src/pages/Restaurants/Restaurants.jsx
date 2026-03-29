import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

import "./Restaurants.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Restaurants = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [food, setFood] = useState([]);

  const { id } = useParams();
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  const fetchRestaurantDetails = async () => {
    const rest_response = await axios.get(url + `/api/restaurant/${id}`);
    const food_response = await axios.get(url + `/api/food/${id}`);

    if (rest_response.data.success) {
      // console.log(rest_response.data.data);
      setRestaurant(rest_response.data.data);
    } else {
      console.log(rest_response.data.message);
    }

    if (food_response.data.success) {
      // console.log(food_response.data.data);
      setFood(food_response.data.data);
    } else {
      console.log(food_response.data.message);
    }
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, [id]);

  return (
    <div className="rest-container">
      <div className="rest-img-details">
        <img
          className="rest-img"
          src={url + "/images/restaurant/" + restaurant.image}
          alt={restaurant.name}
        />
        <div className="rest-details">
          <h1>{restaurant.name}</h1>
          <p>Cuisine: {restaurant.cuisine}</p>
          <span className="rest-rating">
            <p>
              Rating: {restaurant.rating}
              <img src={assets.rating_starts} alt="" />
            </p>
          </span>
          <p>Location: {restaurant.location}</p>
          <p>"{restaurant.description}"</p>
        </div>
      </div>

      <h2>Dishes you can choose from</h2>

      <div className="rest-food-list">
        {food.map((item, foodIndex) => (
          <div className="food-item" id="foodIndex" key={foodIndex}>
            <div className="food-item-img-container">
              <img
                src={url + "/images/food/" + item.image} alt=""
                className="food-item-img"
              />
              {!cartItems.items[item._id] ? (
                <div className="add-to-cart" onClick={() => addToCart(id, item._id)}>
                  <p>ADD</p>
                </div>
              ) : (
                <div className="food-item-counter-container">
                  <div className="food-item-counter">
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="cart-operation-icon"
                      onClick={() => removeFromCart(item._id)}
                    />
                    {cartItems.items[item._id]}
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="cart-operation-icon"
                      onClick={() => addToCart(id, item._id)}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="food-item-info">
              <div className="food-item-name-rating">
                <p>{item.name}</p>
                <img src={assets.rating_starts} alt="" />
              </div>
              <p className="food-item-desc">"{item.description}"</p>
              <p className="food-item-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
