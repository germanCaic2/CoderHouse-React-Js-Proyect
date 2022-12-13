import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={item.image} alt={item.name} className="img-fluid" />
      </div>
      <div className="col-md-6 pt-3">
        <div className="text-center">
          <h3 className="text-dark bold">{item.name}</h3>
          <h4 className="text-dark ">$ {item.price}</h4>
        </div>
        <p className="card-text text-dark">{item.description}</p>
        <button className="btn btn-success w-100">Buy now!</button>
      </div>
    </div>
  );
}

export default ItemDetail;