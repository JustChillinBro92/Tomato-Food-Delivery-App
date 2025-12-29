import { useState, useEffect } from "react";
import axios from "axios"
import { toast } from "react-toastify";

import { assets } from "../../assets/assets";
import "./Add.css";

const AddFood = ({backend_url}) => {
  const [image, setImage] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
    restaurantId: "",
  })

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`${backend_url}/api/restaurant/list`);
      if(response.data.success)
        setRestaurants(response.data.data);
    } catch (error) {
      toast.error("Error fetching restaurants");
    }
  }

  useEffect(() => {
    fetchRestaurants();
  },[])

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]: value}));
  } 

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Validate restaurant selection
    if (!data.restaurantId) {
      toast.error("Please select a restaurant");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("restaurantId", data.restaurantId);
    formData.append("image", image);
    
    const response = await axios.post(`${backend_url}/api/food/add`, formData);
    if(response.data.success) {     
      setData({
        name: "",
        description: "",
        category: "Salad",
        price: "",          
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  }

  return (
    <div className="add">
      <h3>ADD FOOD ITEM</h3>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input 
          type="file" 
          id="image" 
          hidden required 
          onChange={(e)=>setImage(e.target.files[0])} />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input 
          type="text" 
          name="name" 
          value={data.name}
          placeholder="Type product name here" 
          onChange={onChangeHandler} />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            name="description"
            value={data.description}
            row="6"
            placeholder="Write product description here..."
            onChange={onChangeHandler} />
        </div>

        <div className="add-category-price">
          <div className="add-restaurant flex-col">
            <p>Restaurant</p>
            <select 
              name="restaurantId"
              value={data.restaurantId}
              onChange={onChangeHandler}
              required
            >
              <option value="">Select Restaurant</option>
              {restaurants.map((restaurant) => (
                <option key={restaurant._id} value={restaurant._id}>
                  {restaurant.name}
                </option>
              ))}
            </select>
          </div>

          <div className="add-category flex-col">
            <p>Category</p>
            <select 
            name="category"
            value={data.category}
            onChange={onChangeHandler}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Pure-Veg">Pure Veg</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Deserts">Deserts</option>
            </select>
          </div>

          <div className="add-product-price flex-col">
            <p>Price</p>
            <input 
            type="Number" 
            name="price"
            value={data.price} 
            placeholder="$20" 
            onChange={onChangeHandler} />
          </div>
        </div>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddFood;
