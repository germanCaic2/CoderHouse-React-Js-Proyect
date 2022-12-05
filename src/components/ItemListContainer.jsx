import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "./json/products.json"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(products);
      }, 2000);
    });

    promise.then((data)=> {
      setItems(data);
    })
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-success d-flex align-items-center" role="alert">
            <div>
              <ItemList items={items} />
            </div>
          </div>
        </div>
      </div>
      <ItemCount stock={10} />
    </div>
  );
}

export default ItemListContainer;