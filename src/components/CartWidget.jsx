import React, { useContext }from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
  const {cartTotal} = useContext(CartContext);

  return (
      <Link to={"/Cart"} type="button" className="btn btn-cart position-relative m-2">
        <img src="/images/cart.svg" alt="Cart" width="20" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartTotal()}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link>
  );
}

export default CartWidget;