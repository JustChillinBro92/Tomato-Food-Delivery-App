import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import '../ListFoods/List.css'

const ListRestaurants = ({backend_url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${backend_url}/api/restaurant/list`);
    console.log(response.data);
    
    if(response.data.success) {
      setList(response.data.data); 
    } else {
      toast.error(response.data.message);
    }
  }

  const removeItem = async (restaurant_id) => {
    const response = await axios.post(`${backend_url}/api/restaurant/remove`, {id: restaurant_id});
    await fetchList();

    if(response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  }

  useEffect(() => {
    fetchList();
  },[]);

  return (
    <div className="list add flex-col">
      <h3>ALL RESTAURANT ENTRIES</h3>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Location</b>
          <b>Cuisine</b>  
          <b>Rating</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
          return(
            <div key={index} className="list-table-format data">
              <img className="food-img" src={`${backend_url}/images/restaurant/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.location}</p>
              <p>{item.cuisine}</p>
              <p>{item.rating}</p>
              <p onClick={()=>removeItem(item._id)}><FontAwesomeIcon className="remove-icon" icon={faCircleXmark} /></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListRestaurants;