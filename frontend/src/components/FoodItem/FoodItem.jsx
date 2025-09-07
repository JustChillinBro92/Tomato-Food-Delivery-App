import { useContext } from 'react'

import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './FoodItem.css'

const FoodItem = ({id, image, name, description, price, restaurant_id}) => {    
  const {restaurant_list} = useContext(StoreContext);

  return (
    <div className='food-item' id='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-img' src={image} alt="" />
        </div>


        <div className='food-item-info'>
            <p className='food-item-restaurant'>
                {restaurant_list.find(R => R.restaurantId === restaurant_id)?.name}
            </p>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem