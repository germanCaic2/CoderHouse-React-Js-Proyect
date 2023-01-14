import React from "react";

const Finish = ()=> {
  return(
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <ul className="d-flex justify-content-around  bg-success p-4 lead rounded">
            <il>
              <img src="../images/cart-plus.svg" alt="chosen products" className="mx-2"/>
              chosen products
            </il>
            <il>
            <img src="../images/cart-check.svg" alt="complete payment" className="mx-2"/>
              complete payment
            </il>
            <il>
            <img src="../images/chat-heart.svg" alt="Finish punchase" className="mx-2"/>
              Finish punchase
            </il>
          </ul>
          <div className="container text-center lead">
            <img src="../images/bag-heart-fill.svg" alt="Thanks you" className="xx m-4"/>
            <h1>Thank you! </h1>
            <h3>Your payment as succesful and your order is complete. </h3>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, officia cupiditate? In vel modi error ratione unde nesciunt temporibus distinctio quo voluptas hic! Quaerat cupiditate a laboriosam unde nobis. Odit. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finish;