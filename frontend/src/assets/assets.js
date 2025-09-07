import basket_icon from "./basket_icon.png";
import logo from "./logo.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";
import menu_1 from "./menu_1.png";
import menu_2 from "./menu_2.png";
import menu_3 from "./menu_3.png";
import menu_4 from "./menu_4.png";
import menu_5 from "./menu_5.png";
import menu_6 from "./menu_6.png";
import menu_7 from "./menu_7.png";
import menu_8 from "./menu_8.png";

import food_1 from "./food_1.png";
import food_2 from "./food_2.png";
import food_3 from "./food_3.png";
import food_4 from "./food_4.png";
import food_5 from "./food_5.png";
import food_6 from "./food_6.png";
import food_7 from "./food_7.png";
import food_8 from "./food_8.png";
import food_9 from "./food_9.png";
import food_10 from "./food_10.png";
import food_11 from "./food_11.png";
import food_12 from "./food_12.png";
import food_13 from "./food_13.png";
import food_14 from "./food_14.png";
import food_15 from "./food_15.png";
import food_16 from "./food_16.png";
import food_17 from "./food_17.png";
import food_18 from "./food_18.png";
import food_19 from "./food_19.png";
import food_20 from "./food_20.png";
import food_21 from "./food_21.png";
import food_22 from "./food_22.png";
import food_23 from "./food_23.png";
import food_24 from "./food_24.png";
import food_25 from "./food_25.png";
import food_26 from "./food_26.png";
import food_27 from "./food_27.png";
import food_28 from "./food_28.png";
import food_29 from "./food_29.png";
import food_30 from "./food_30.png";
import food_31 from "./food_31.png";
import food_32 from "./food_32.png";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";

export const assets = {
  logo,
  logo2,
  logo3,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
};

export const restaurant_list = [
  {
    restaurantId: "r1",
    name: "GreenLeaf Restaurant",
    location: "Downtown",
    rating: 4.5,
    cuisine: "Healthy / Organic",
  },
  {
    restaurantId: "r2",
    name: "HealthyBites",
    location: "Uptown",
    rating: 4.2,
    cuisine: "Vegetarian",
  },
  {
    restaurantId: "r3",
    name: "SpiceHub",
    location: "City Center",
    rating: 4.7,
    cuisine: "Indian / Fast Food",
  },
  {
    restaurantId: "r4",
    name: "Urban Tandoor",
    location: "West Side",
    rating: 4.3,
    cuisine: "Indian Fusion",
  },
  {
    restaurantId: "r5",
    name: "Pasta Palace",
    location: "East End",
    rating: 4.6,
    cuisine: "Italian",
  },
  {
    restaurantId: "r6",
    name: "Sweet Treats",
    location: "Midtown",
    rating: 4.4,
    cuisine: "Bakery & Desserts",
  },
  {
    restaurantId: "r7",
    name: "Noodle Nation",
    location: "South Market",
    rating: 4.1,
    cuisine: "Asian / Chinese",
  },
];

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image: menu_1,
  },
  {
    menu_name: "Rolls",
    menu_image: menu_2,
  },
  {
    menu_name: "Deserts",
    menu_image: menu_3,
  },
  {
    menu_name: "Sandwich",
    menu_image: menu_4,
  },
  {
    menu_name: "Cake",
    menu_image: menu_5,
  },
  {
    menu_name: "Pure Veg",
    menu_image: menu_6,
  },
  {
    menu_name: "Pasta",
    menu_image: menu_7,
  },
  {
    menu_name: "Noodles",
    menu_image: menu_8,
  },
];

export const food_list = [
  {
    _id: "1",
    name: "Greek Salad",
    image: food_1,
    price: 12,
    description:
      "A refreshing mix of cucumbers, tomatoes, olives, and feta cheese with a light vinaigrette.",
    category: "Salad",
    restaurantId: "r1",
  },
  {
    _id: "2",
    name: "Veg Salad",
    image: food_2,
    price: 18,
    description:
      "A colorful bowl of seasonal vegetables tossed with olive oil and herbs.",
    category: "Salad",
    restaurantId: "r2",
  },
  {
    _id: "3",
    name: "Clover Salad",
    image: food_3,
    price: 16,
    description:
      "A crunchy mix of sprouts, lettuce, and fresh greens with lemon dressing.",
    category: "Salad",
    restaurantId: "r3",
  },
  {
    _id: "4",
    name: "Chicken Salad",
    image: food_4,
    price: 24,
    description:
      "Grilled chicken pieces served on a bed of lettuce, cucumbers, and cherry tomatoes.",
    category: "Salad",
    restaurantId: "r4",
  },

  {
    _id: "5",
    name: "Lasagna Rolls",
    image: food_5,
    price: 14,
    description:
      "Mini rolled lasagna sheets filled with cheese and herbs, baked to perfection.",
    category: "Rolls",
    restaurantId: "r5",
  },
  {
    _id: "6",
    name: "Peri Peri Rolls",
    image: food_6,
    price: 12,
    description:
      "Spicy peri peri flavored veggie rolls with a crispy golden crust.",
    category: "Rolls",
    restaurantId: "r3",
  },
  {
    _id: "7",
    name: "Chicken Rolls",
    image: food_7,
    price: 20,
    description:
      "Juicy chicken wrapped in a soft paratha with sauces and onions.",
    category: "Rolls",
    restaurantId: "r4",
  },
  {
    _id: "8",
    name: "Veg Rolls",
    image: food_8,
    price: 15,
    description:
      "Stuffed rolls with potatoes, peas, and spices wrapped in flatbread.",
    category: "Rolls",
    restaurantId: "r2",
  },

  {
    _id: "9",
    name: "Ripple Ice Cream",
    image: food_9,
    price: 14,
    description:
      "Creamy ice cream swirled with fruit ripple and topped with nuts.",
    category: "Deserts",
    restaurantId: "r6",
  },
  {
    _id: "10",
    name: "Fruit Ice Cream",
    image: food_10,
    price: 22,
    description:
      "Refreshing ice cream made with chunks of seasonal fresh fruits.",
    category: "Deserts",
    restaurantId: "r6",
  },
  {
    _id: "11",
    name: "Jar Ice Cream",
    image: food_11,
    price: 10,
    description:
      "Layered ice cream served in a jar with chocolate and biscuit crumbs.",
    category: "Deserts",
    restaurantId: "r6",
  },
  {
    _id: "12",
    name: "Vanilla Ice Cream",
    image: food_12,
    price: 12,
    description:
      "Classic vanilla ice cream made with fresh cream and vanilla beans.",
    category: "Deserts",
    restaurantId: "r6",
  },

  {
    _id: "13",
    name: "Chicken Sandwich",
    image: food_13,
    price: 12,
    description:
      "Grilled chicken slices layered with lettuce, mayo, and bread.",
    category: "Sandwich",
    restaurantId: "r3",
  },
  {
    _id: "14",
    name: "Vegan Sandwich",
    image: food_14,
    price: 18,
    description:
      "Whole grain bread stuffed with hummus, cucumber, and fresh greens.",
    category: "Sandwich",
    restaurantId: "r2",
  },
  {
    _id: "15",
    name: "Grilled Sandwich",
    image: food_15,
    price: 16,
    description: "Toasted sandwich filled with cheese, tomato, and herbs.",
    category: "Sandwich",
    restaurantId: "r1",
  },
  {
    _id: "16",
    name: "Bread Sandwich",
    image: food_16,
    price: 24,
    description:
      "Simple homemade sandwich made with butter and soft white bread.",
    category: "Sandwich",
    restaurantId: "r4",
  },

  {
    _id: "17",
    name: "Cup Cake",
    image: food_17,
    price: 14,
    description:
      "Soft sponge cupcakes topped with creamy frosting and sprinkles.",
    category: "Cake",
    restaurantId: "r6",
  },
  {
    _id: "18",
    name: "Vegan Cake",
    image: food_18,
    price: 12,
    description:
      "Egg-free and dairy-free cake made with almond milk and cocoa.",
    category: "Cake",
    restaurantId: "r2",
  },
  {
    _id: "19",
    name: "Butterscotch Cake",
    image: food_19,
    price: 20,
    description: "Rich butterscotch flavored cake layered with caramel cream.",
    category: "Cake",
    restaurantId: "r6",
  },
  {
    _id: "20",
    name: "Sliced Cake",
    image: food_20,
    price: 15,
    description: "Freshly baked cake slices available in multiple flavors.",
    category: "Cake",
    restaurantId: "r6",
  },

  {
    _id: "21",
    name: "Garlic Mushroom",
    image: food_21,
    price: 14,
    description: "Button mushrooms sautéed in garlic butter with herbs.",
    category: "Pure Veg",
    restaurantId: "r2",
  },
  {
    _id: "22",
    name: "Fried Cauliflower",
    image: food_22,
    price: 22,
    description: "Crispy fried cauliflower florets served with spicy dip.",
    category: "Pure Veg",
    restaurantId: "r1",
  },
  {
    _id: "23",
    name: "Mix Veg Pulao",
    image: food_23,
    price: 10,
    description:
      "Aromatic rice cooked with mixed vegetables and Indian spices.",
    category: "Pure Veg",
    restaurantId: "r3",
  },
  {
    _id: "24",
    name: "Rice Zucchini",
    image: food_24,
    price: 12,
    description: "Steamed rice tossed with zucchini, garlic, and olive oil.",
    category: "Pure Veg",
    restaurantId: "r4",
  },

  {
    _id: "25",
    name: "Cheese Pasta",
    image: food_25,
    price: 12,
    description: "Pasta smothered in a creamy cheese sauce with herbs.",
    category: "Pasta",
    restaurantId: "r5",
  },
  {
    _id: "26",
    name: "Tomato Pasta",
    image: food_26,
    price: 18,
    description: "Classic pasta with tangy tomato sauce and fresh basil.",
    category: "Pasta",
    restaurantId: "r5",
  },
  {
    _id: "27",
    name: "Creamy Pasta",
    image: food_27,
    price: 16,
    description: "Rich white sauce pasta with mushrooms and cream.",
    category: "Pasta",
    restaurantId: "r5",
  },
  {
    _id: "28",
    name: "Chicken Pasta",
    image: food_28,
    price: 24,
    description: "Pasta tossed with grilled chicken and a creamy sauce.",
    category: "Pasta",
    restaurantId: "r4",
  },

  {
    _id: "29",
    name: "Butter Noodles",
    image: food_29,
    price: 14,
    description: "Noodles tossed in butter and garlic, simple yet flavorful.",
    category: "Noodles",
    restaurantId: "r7",
  },
  {
    _id: "30",
    name: "Veg Noodles",
    image: food_30,
    price: 12,
    description: "Stir-fried noodles with assorted vegetables and soy sauce.",
    category: "Noodles",
    restaurantId: "r2",
  },
  {
    _id: "31",
    name: "Somen Noodles",
    image: food_31,
    price: 20,
    description: "Thin Japanese noodles served with a light soy broth.",
    category: "Noodles",
    restaurantId: "r7",
  },
  {
    _id: "32",
    name: "Cooked Noodles",
    image: food_32,
    price: 15,
    description: "Boiled noodles stir-fried with mild spices and herbs.",
    category: "Noodles",
    restaurantId: "r7",
  },
];
