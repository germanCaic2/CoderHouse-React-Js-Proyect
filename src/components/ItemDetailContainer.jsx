import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "items", id);
    getDoc(item).then((product) => {
      if (product.exists()) {
        setItem({ id: product, ...product.data() });
      } else {
        console.log("Item dont exists")
      }
    })
  }, []);

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;