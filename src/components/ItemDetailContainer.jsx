import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import arrayProductos from "./json/products.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrayProductos.find(item => item.id === 1));
      }, 2000);
    })

    promesa.then((data) => {
      setItem(data);
    })
  })

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;