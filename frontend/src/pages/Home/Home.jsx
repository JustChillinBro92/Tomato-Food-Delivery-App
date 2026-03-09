import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay'

import './Home.css'

const Home = () => {
  const [category, setCategory] = useState("All");

  const location = useLocation();

  useEffect(() => {
    if(location.hash) {
      const el = document.querySelector(location.hash);
      if(el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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