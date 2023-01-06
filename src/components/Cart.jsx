import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartTotal, clear, removeItem} = useContext(CartContext);
  console.log(cart);

  if (cartTotal() === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center p-5 glass m-5">
            <div className="lead">"No products found"</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"> #</th>
                <th scope="col"> Name</th>
                <th scope="col"> Quantity</th>
                <th scope="col"> Price</th>
                <th scope="col"> Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td><img src={item.image} alt={item.name} width={80} /> </td>
                  <td>{item.name }</td>
                  <td>{item.quantity }</td>
                  <td>{item.price }</td>
                  <td>{item.quantity * item.price}</td>
                  <td><Link onClick={() => {removeItem(item.id)}}><img src="/images/trash.svg" alt="trash" width={30}/> </Link></td>
                </tr>

              ))
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default Cart;