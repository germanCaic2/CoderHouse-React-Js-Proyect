import React from "react";

const Item = () => {
  return (
    <div className="col-md-4">
      <div className="card p-3 shadow-lg m-2 glass">
        <img className="img-fluid cardImg" src="./images/articles.jpg" alt="Card image cap" />
        <div className="card-body">
          <div className="d-flex justify-content-around">
            <h3 className="text-light bold">Articles </h3>
            <h3 className="text-light "> - </h3>
            <h4 className="text-light ">$23</h4>
          </div>
          <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="btn btn-success w-100">Buy now!</button>
        </div>
      </div>
    </div>
  );
}

export default Item;