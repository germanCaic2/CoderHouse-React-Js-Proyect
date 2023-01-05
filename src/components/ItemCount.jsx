import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd  }) => {
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [soldOut, setSoldOut] = useState(false);

  const decreaseStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  const increaseStock = () => {
    if (counter < itemStock) {
      setCounter(counter + 1);
    }
  }

  const addToCart = (quantity) => {
    if (counter <= itemStock) {
      setCounter(1);
      setItemStock(itemStock - quantity);
      setSoldOut(true);
      onAdd(quantity);
    }
  }

  useEffect(()=>{
    setItemStock(stock);
  }, [stock])

  return (
    <div>
      <div className="row">
        <div className="text-center">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary" onClick={decreaseStock}> - </button>
            <button type="button" className="btn btn-outline-primary">{counter}</button>
            <button type="button" className="btn btn-outline-primary" onClick={increaseStock}> + </button>
          </div>
          {soldOut ? <Link to={"/cart"} className="btn btn-outline-primary mx-2">Finish purchase</Link> : <button type="button" className="btn btn-outline-primary mx-2" onClick={() => { addToCart(counter) }}> Buy Now </button>}
        </div>
      </div>
    </div>
  );
}

export default ItemCount; 