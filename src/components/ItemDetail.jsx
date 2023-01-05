import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const {hi} = useContext(CartContext);
  const [itemStock, setItemStock] = useState(0);
  
  const onAdd = (quantity)=> {
    setItemStock(itemStock - quantity);
    hi();
  }

  useEffect(() => {
    setItemStock(item.stock);
  },[item]); 

  return (
    <div className="row p-5">
      <div className="col-md-6">
        <img src={item.image} alt={item.name} className="img-fluid" />
      </div>
      <div className="col-md-4 pt-3 d-flex flex-column justify-content-center">
        <div className="text-center">
          <h3 className="text-dark bold">{item.name}</h3>
          <h4 className="text-dark ">$ {item.price}</h4>
        </div>
        <p className="card-text text-dark">{item.description}</p>
        <ItemCount stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  );
} 
export default ItemDetail;