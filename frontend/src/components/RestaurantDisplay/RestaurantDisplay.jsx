import { useContext } from 'react'

import RestaurantItem from '../RestaurantItem/RestaurantItem'
import { StoreContext } from '../../context/StoreContext'
import './RestaurantDisplay.css'

const RestaurantDisplay = () => {
  const {restaurant_list} = useContext(StoreContext);

  return (
    <div className='restaurant-display'>
        <h2>Top Restaurants Near You</h2>
        <div className='restaurant-display-list'>
            {
                restaurant_list.map((item, index) => {
                    return <RestaurantItem
                        key={index}
                        restaurant_id={item.restaurantId}
                        image={item.image}
                        name={item.name}
                        cuisine={item.cuisine}
                        rating={item.rating}
                        location={item.location}
                    />
                })
            }
        </div>
    </div>
  )
}

export default RestaurantDisplay