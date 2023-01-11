import { addDoc, collection, doc, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((product) => {
      setItems(product.docs.map((doc) => ({ id: doc.id, ...doc.data() })
      ))
    })
  }, [])

return (
    <div className="container">
      <ItemList items={items} />
    </div>

  );
}

export default ItemListContainer;