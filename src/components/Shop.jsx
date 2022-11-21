import React from "react";

const Shop = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-center text-primary pt-4"><strong> S H O P </strong></h2>
        <hr className="text-primary pb-4"></hr>
      </div>
      <section id="Shop" className="container-fluid bg-secondary shadowInset">
        <div className="container py-4">

          <div className="row">
            <div className="col-md-4">
              <div className="card p-3 m-2 shadow-lg glass">
                <img className="img-fluid cardImg" src="./images/atari.jpg" alt="Card image cap" />
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
            <div className="col-md-4">
              <div className="card p-3 m-2 shadow-lg glass">
                <img className="img-fluid cardImg" src="./images/calculator.jpg" alt="Card image cap" />
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
            <div className="col-md-4">
              <div className="card p-3 m-2 shadow-lg glass">
                <img className="img-fluid cardImg" src="./images/keycaps.jpg" alt="Card image cap" />
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
            <div className="col-md-4">
              <div className="card p-3 m-2 shadow-lg glass">
                <img className="img-fluid cardImg" src="./images/console.jpg" alt="Card image cap" />
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
            <div className="col-md-4">
              <div className="card p-3 m-2 shadow-lg glass">
                <img className="img-fluid cardImg" src="./images/keyboard-big.jpg" alt="Card image cap" />
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

          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;