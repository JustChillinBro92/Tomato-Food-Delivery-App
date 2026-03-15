import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import MyOrders from "./pages/MyOrder/MyOrders";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Verify from "./pages/Verfiy/Verify";
import "./index.css";
import Restaurants from "./pages/Restaurants/Restaurants";


export const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="page">
        <div className="app">
        <Navbar setShowLogin={setShowLogin} />
          <div className="app-content">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/myorders" element={<MyOrders/>}/>
              <Route path="/restaurant/:id" element={<Restaurants/>}/>
              <Route path="/orders" element={<PlaceOrder/>}/>
              <Route path="/verify" element={<Verify/>}/>
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
