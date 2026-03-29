import { menu_list } from '../../assets/assets.js'
import './ExploreMenu.css'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore Our Menu</h2>
        <p>Choose from a diverse menu featuring a delectable set of dishes. Our mission is to satsify your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
                return (
                    <div 
                        onClick={()=>setCategory(prev=>prev===item.menu_name? 'All' : item.menu_name)} 
                        key={index}     
                        className='explore-menu-list-item'>
                        <img className={category===item.menu_name? 'active': ''} src={item.menu_image} alt=''/>
                        <span>{item.menu_name}</span>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu