import React from "react";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
    return(
        <header className="container">
            <div className="row">
                <div className="col-md-11">
                    <NavBar />
                </div>
                <div className="col-md-1 align-items-center justify content-end">
                    <CartWidget />
                </div>
            </div>
        </header>
    )
};

export default Header;