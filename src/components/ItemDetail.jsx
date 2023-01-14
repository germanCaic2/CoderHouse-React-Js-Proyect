import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext);
  const [itemStock, setItemStock] = useState(0);
  
  const onAdd = (quantity)=> {
    setItemStock(itemStock - quantity);
    addItem(item, quantity)
  }

  useEffect(() => {
    setItemStock(item.stock);
  },[item]); 

  return (
      <div className="container">
        <div className="row glasss m-0">
            <div className="col-md-6 flex-end">
              <img src={item.image} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center">
              <div className="text-center d-flex justify-content-around">
                <h3 className="text-light bold">{item.name}</h3>
                <h4 className="text-light ">$ {item.price}</h4>
              </div>
              <p className="card-text text-light">{item.description}</p>
              <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
          </div>
        </div>
  );
} 

export default ItemDetail;