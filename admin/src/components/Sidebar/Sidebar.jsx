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
        <NavLink to="/add" className="sidebar-option">
        <FontAwesomeIcon icon={faCirclePlus} />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <FontAwesomeIcon icon={faList} />
          <p>List Items</p>
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
