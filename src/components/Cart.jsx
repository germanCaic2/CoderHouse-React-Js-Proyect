import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartTotal, clear, removeItem, priceTotal } = useContext(CartContext);
  console.log(cart);

  if (cartTotal() === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center p-5 glass m-5">
            <div className="lead m-1">"No products found"</div>
            <Link to={"/"} className="btn btn-success item animation"> go home </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-12 my-5">
          <div className="text-end">
            <Link onClick={clear} className="btn btn-danger">Empty Cart </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col"> Name</th>
                <th scope="col"> Quantity</th>
                <th scope="col"> Price</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className="align-middle"><img src={item.image} alt={item.name} width={80} /> </td>
                  <td className="align-middle">{item.name}</td>
                  <td className="align-middle">{item.quantity}</td>
                  <td className="align-middle">$ {item.quantity * item.price}</td>
                  <td className="align-middle text-end"><Link onClick={() => { removeItem(item.id) }} title="delete product"><img src="/images/trash.svg" alt="trash" width={30} /> </Link></td>
                </tr>
              ))
              }

              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td><b>Total:</b></td>
                <td><b>$ {priceTotal()}</b></td>
                <td className="text-end"><Link to="/finish" className="btn btn-success item animation"> Finish punchase</Link></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default Cart;