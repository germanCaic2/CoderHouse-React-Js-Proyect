import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-cart position-relative m-2">
            <img src="/images/cart.svg" alt="Cart" width="20"/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
            <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    );
}

export default CartWidget;