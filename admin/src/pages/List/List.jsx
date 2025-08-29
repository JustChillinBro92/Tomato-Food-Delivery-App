import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import './List.css'
import { toast } from 'react-toastify'

const List = () => {
  const [list, setList] = useState([]);
  const backend_url = "http://localhost:4000";

  const fetchList = async () => {
    const response = await axios.get(`${backend_url}/api/food/list`);
    console.log(response.data);
    
    if(response.data.success) {
      setList(response.data.data); 
    } else {
      toast.error(response.data.message);
    }
  }

  const removeItem = async (food_id) => {
    const response = await axios.post(`${backend_url}/api/food/remove`, {id: food_id});
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
      <h3>ALL FOOD ENTRIES</h3>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
          return(
            <div key={index} className="list-table-format data">
              <img className="food-img" src={`${backend_url}/images/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeItem(item._id)}><FontAwesomeIcon className="remove-icon" icon={faCircleXmark} /></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List