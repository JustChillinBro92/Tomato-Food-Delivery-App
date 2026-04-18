import { useContext, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

import "./SearchBar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { assets, slider_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const SearchBar = ({ searchFood, setSearchFood }) => {
  const { food_list, cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  const filteredData = food_list.filter((item) =>
    item.name.toLowerCase().includes(searchFood?.toLowerCase()),
  );


  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: "0px", 
    infinite: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 363,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // useEffect(() => {
  //   console.log(filteredData);
  // },[])

  return (
    <>
      {searchFood != "" ? (
        filteredData.length > 0 ? (
          <div className="rest-container">
            <h2>Dishes you can choose from</h2>
            <div className="rest-food-list">
              {filteredData.map((item, foodIndex) => (
                <div className="food-item" id="foodIndex" key={foodIndex}>
                  <div className="food-item-img-container">
                    <img
                      src={url + "/images/food/" + item.image}
                      alt=""
                      className="food-item-img"
                    />
                    {!cartItems.items[item._id] ? (
                      <div
                        className="add-to-cart"
                        onClick={() =>
                          addToCart(item.restaurantId._id, item._id)
                        }
                      >
                        <p>ADD</p>
                      </div>
                    ) : (
                      <div className="food-item-counter-container">
                        <div className="food-item-counter">
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="cart-operation-icon"
                            onClick={() => removeFromCart(item._id, 1)}
                          />
                          {cartItems.items[item._id]}
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="cart-operation-icon"
                            onClick={() =>
                              addToCart(item.restaurantId._id, item._id)
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="food-item-info">
                    <p className="food-item-restaurant">
                      {item.restaurantId.name}
                    </p>
                    <div className="food-item-name-rating">
                      <p>{item.name}</p>
                      <img src={assets.rating_starts} alt="" />
                    </div>
                    <p className="food-item-desc">"{item.description}"</p>
                    <p className="food-item-price">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="food-not-found cart">
            <div className="empty-cart">
              <div className="empty-cart-bg"></div>
              <h2>Oops nothing but empty clouds here!</h2>
              <div className="empty-cart-redirect">
                <p>
                  Looks like we couldn't find what you searched for. Delicious
                  Food is getting prepped as we speak!
                </p>
                <button onClick={() => setSearchFood("")}>Refresh</button>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="search-landing">            
          <div className="hero">
            <h2>Discover Restaurnats And Foods</h2>
            <p>Good food is always prepping in the meantime</p>
            <div className="filter-by">
              <button>Restaurant</button>
              <button>Dishes</button>
            </div>
          </div>

          <div className="scroll-food">
            <Slider {...sliderSettings} className='slider'>
                {slider_list.map((img, index)=> (
                    <div className='slider-item-container' key={index}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
