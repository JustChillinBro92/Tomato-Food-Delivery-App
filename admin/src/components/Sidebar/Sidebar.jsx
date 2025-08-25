import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-contents">
        <div className="sidebar-option">
        <FontAwesomeIcon icon={faCirclePlus} />
          <p>Add Items</p>
        </div>
        <div className="sidebar-option">
          <FontAwesomeIcon icon={faList} />
          <p>List Items</p>
        </div>
        <div className="sidebar-option">
          <FontAwesomeIcon icon={faBowlFood} />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
