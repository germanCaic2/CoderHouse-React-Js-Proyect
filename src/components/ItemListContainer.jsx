import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import products from "./json/products.json"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        debugger
        resolve(id ? products.filter(item => item.category === id) : products);
      }, 2000);
    });

    promise.then((data) => {
      setItems(data);
    })
  }, [id]);

  return (
    <div className="container">
        <ItemList items={items} />
    </div>

  );
}

export default ItemListContainer;