import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="card p-3 shadow-lg m-2 glass">
      <Link to={"item/" + item.id} className="text-decoration-none">
        <img className="img-fluid cardImg" src={item.image} alt={item.name} />
        <div className="card-body">
          <div className="text-center">
            <h3 className="text-light bold">{item.name}</h3>
            <h4 className="text-light ">$ {item.price}</h4>
          </div>
          <p className="card-text text-light">{item.description}</p>
          <button className="btn btn-success w-100">Buy now!</button>
        </div>
      </Link>
    </div>
  );
}

export default Item;