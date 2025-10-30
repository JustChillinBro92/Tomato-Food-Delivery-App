import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

import { assets } from "../../assets/assets";
import "../AddFood/Add.css";

const AddRestaurant = ({backend_url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    location: "",
    rating: "",
    cuisine: "Organic",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]: value}));
  } 

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("rating", Number(data.rating));
    formData.append("cuisine", data.cuisine);
    formData.append("image", image);
    
    const response = await axios.post(`${backend_url}/api/restaurant/add`, formData);
    if(response.data.success) {     
        setData({
            name: "",
            description: "",
            location: "",
            rating: "",
            cuisine: "Salad",         
        });
        setImage(false);
        toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className="add">
      <h3>ADD RESTAURANT</h3>
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
          <p>Restaurant Name</p>
          <input 
          type="text" 
          name="name" 
          value={data.name}
          placeholder="Type restaurant name here" 
          onChange={onChangeHandler} />
        </div>

        <div className="add-product-description flex-col">
          <p>Restaurant Description</p>
          <textarea
            name="description"
            value={data.description}
            row="6"
            placeholder="Write restaurant description here..."
            onChange={onChangeHandler} />
        </div>

        <div className="add-category-price">
          <div className="add-cuisine flex-col">
            <p>Cuisine</p>
            <select 
            name="cuisine"
            value={data.cuisine}
            onChange={onChangeHandler}
            >
              <option value="Organic">Organic</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Indian">Indian</option>
              <option value="Indian Fusion">Indian Fusion</option>
              <option value="Italian">Italian</option>
              <option value="Bakery & Desserts">Bakery & Desserts</option>
              <option value="Chinese">Chinese</option>
              <option value="American">American</option>
              <option value="Japanese">Japanese</option>
              <option value="Mexican">Mexican</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Grill">Grill</option>
            </select>
          </div>

          <div className="add-product-price flex-col">
            <p>Location</p>
            <input 
            type="text" 
            name="location"
            value={data.location} 
            placeholder="location" 
            onChange={onChangeHandler} />
          </div>

          <div className="add-product-price flex-col">
            <p>Rating</p>
            <input 
            type="Number" 
            name="rating"
            value={data.rating} 
            placeholder="4.5" 
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

export default AddRestaurant;
