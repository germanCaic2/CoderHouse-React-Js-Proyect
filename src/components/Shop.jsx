import React from "react";
import ItemListContainer from "./ItemListContainer";
import ShopCategories from "./ShopCategories";

const Shop = () => {
  return (
    <div className="mb-5">
      <div className="">
        <h2 className="text-center text-primary pt-4"><strong> S H O P </strong></h2>
        <hr className="text-primary pb-4"></hr>
      </div>
      <section id="Shop" className="container-fluid bg-secondary shadowInset">
        <div className="container py-4">
          <ShopCategories />
          <ItemListContainer />
        </div>
      </section>
    </div>
  );
}

export default Shop;