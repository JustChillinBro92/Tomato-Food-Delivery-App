import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import './RestaurantItem.css'

const RestaurantItem = ({restaurant_id, image, name, cuisine, rating, location}) => {
  const {url} = useContext(StoreContext);
    
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/restaurant/${restaurant_id}`);
  }

  return (
    <div className='restaurant-item' id='restaurant-item' onClick={handleClick}>
        <div className='restaurant-item-img-container'>
            <img src={url+"/images/restaurant/"+image} className="restaurant-item-img" />
            <div className='restaurant-item-name'>
                <p>{name}</p>
            </div>
        </div>


        <div className='restaurant-item-info'>
            {/* <p className='restaurant-item-name'>{name}</p> */}
            <div className='restaurant-item-cuisine-rating'>
                <p>{cuisine}</p>
                <div className='restaurant-item-rating'>
                    <p>{rating}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
            </div>
            <p className='restaurant-item-location'>{location}</p>
        </div>
    </div>
  )
}

export default RestaurantItem