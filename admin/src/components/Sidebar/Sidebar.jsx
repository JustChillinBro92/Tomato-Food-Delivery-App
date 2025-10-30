import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-contents">
        <NavLink to="/add-restaurant" className="sidebar-option">
        <FontAwesomeIcon icon={faCirclePlus} />
          <p>Add Restaurant</p>
        </NavLink>
        <NavLink to="/add-food" className="sidebar-option">
        <FontAwesomeIcon icon={faCirclePlus} />
          <p>Add Food</p>
        </NavLink>
        <NavLink to="/list-restaurants" className="sidebar-option">
          <FontAwesomeIcon icon={faList} />
          <p>List Restaurants</p>
        </NavLink>
        <NavLink to="/list-food" className="sidebar-option">
          <FontAwesomeIcon icon={faList} />
          <p>List Foods</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <FontAwesomeIcon icon={faBowlFood} />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
