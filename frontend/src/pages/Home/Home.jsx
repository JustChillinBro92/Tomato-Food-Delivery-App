import { useState } from 'react'

import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay'

import './Home.css'

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <RestaurantDisplay/>
    </div>
  )
}

export default Home