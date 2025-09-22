import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './FoodItem.css'

const FoodItem = ({item_id, image, name, description, price, restaurant_id}) => {    
  const {restaurant_list, cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item' id='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-img' src={image} alt="" />
                {
                    !cartItems.items[item_id] ?
                    <div className='add-to-cart' onClick={()=> addToCart(restaurant_id, item_id)}><p>ADD</p></div> : 
                    <div className='food-item-counter-container'>
                        <div className='food-item-counter'>
                            <FontAwesomeIcon icon={faMinus} className='cart-operation-icon' onClick={()=> removeFromCart(item_id)}/>
                            {cartItems.items[item_id]}
                            <FontAwesomeIcon icon={faPlus} className='cart-operation-icon' onClick={()=> addToCart(restaurant_id, item_id)}/>
                        </div>
                    </div>
                }
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