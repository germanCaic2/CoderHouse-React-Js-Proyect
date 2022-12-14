import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-primary" to={"/"}>German <strong>Caicedo</strong></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to={"/AboutUs"}>About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to={"/Shop"}>Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to={"/Contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;