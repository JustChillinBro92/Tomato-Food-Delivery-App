import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

import { StoreContext } from "../../context/StoreContext";

const Restaurants = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [food, setFood] = useState([]);

  const { id } = useParams();
  const { url } = useContext(StoreContext);

  const fetchRestaurantDetails = async () => {
    const rest_response = await axios.get(url + `/api/restaurant/${id}`);    
    const food_response = await axios.get(url + `/api/food/${id}`);

    if(rest_response.data.success) {
        console.log(rest_response.data.data);
        setRestaurant(rest_response.data.data);
    } else {
        console.log(rest_response.data.message);
    }

    if(food_response.data.success) {
        console.log(food_response.data.data);
        setFood(food_response.data.data);
    } else {
        console.log(food_response.data.message);
    }
  }

  useEffect(()=>{
    fetchRestaurantDetails();
  },[id])

  return (
    <div>

    </div>
  )
}

export default Restaurants;