import React from "react";
import { NavLink } from "react-router-dom";

const ShopCategories = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid glass">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link ShopCategories hoverEffect" to={"/category/Miscellaneous"} activeclassname="page" >Miscellaneous</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ShopCategories hoverEffect" to={"/category/Computers"} activeclassname="page" >Computers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ShopCategories hoverEffect" to={"/category/Keyboards"} activeclassname="page" >Keyboards</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ShopCategories hoverEffect" to={"/category/Consoles"} activeclassname="page" >Consoles</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ShopCategories;