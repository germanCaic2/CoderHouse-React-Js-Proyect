import React, { useState } from "react";

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const decreaseStock = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  
  const increaseStock = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  const onAdd = () => {
    if (stock > 0) {
      console.log("You added: " + counter + " products to the cart");
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary" onClick={decreaseStock}> - </button>
            <button type="button" className="btn btn-outline-primary">{counter}</button>
            <button type="button" className="btn btn-outline-primary" onClick={increaseStock}> + </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;