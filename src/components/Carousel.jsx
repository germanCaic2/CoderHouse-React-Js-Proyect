import { collection, getDocs, getFirestore, } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";

const Carousel = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((product) => {
      setItems(product.docs.map((doc) => ({ id: doc.id, ...doc.data() })
      ));
    });

    const scrollContainer = document.getElementById("Slider");
    scrollContainer.addEventListener("wheel", (a) => {
      a.preventDefault();
      scrollContainer.scrollLeft += a.deltaY;
    });
  }, [id]);

  return (
    <div>
      <h1 className="text-center m-4"> Keep buying</h1>
      <div id="Slider" className="row d-flex flex-nowrap ">
        {
          items.map(product =>
            <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
              <div className="card p-3 shadow-lg m-1 glass">
                <Link to={"/item/" + product.id} className="text-decoration-none text-center">
                  <img className="img-fluid cardImg" src={product.image} alt={product.name} />
                  <div className="card-body">
                    <div className="d-flex justify-content-around">
                      <h3 className="bold">{product.name}</h3>
                      <h4 className="">$ {product.price}</h4>
                    </div>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-success w-100 animation item">Buy now!</button>
                  </div>
                </Link>
              </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Carousel;