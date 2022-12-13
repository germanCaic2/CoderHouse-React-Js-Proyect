import React from "react";
import ItemListContainer from "./ItemListContainer";

const Shop = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-center text-primary pt-4"><strong> S H O P </strong></h2>
        <hr className="text-primary pb-4"></hr>
      </div>
      <section id="Shop" className="container-fluid bg-secondary shadowInset">
        <div className="container py-4">
          <ItemListContainer />

        </div>
      </section>
    </div>
  );
}

export default Shop;