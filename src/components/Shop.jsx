import React from "react";

const Shop = () => {
    return (
        <section id="Shop" className="container-fluid bg-secondary shadow p-5">
            <div className="container">
                <div className="p-4">
                    <h2 className="text-center text-light"> S H O P </h2>
                    <hr className="text-light"></hr>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-3 m-2 shadow-lg">
                            <img className="img-fluid cardImg" src="./images/atari.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <div className="d-flex justify-content-around">
                                    <h3>Articles</h3>
                                    <h4>$23</h4>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 shadow-lg m-2">
                            <img className="img-fluid cardImg" src="./images/articles.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <div className="d-flex justify-content-around">
                                    <h3>Articles</h3>
                                    <h4>$23</h4>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 m-2 shadow-lg">
                            <img className="img-fluid cardImg" src="./images/calculator.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <div className="d-flex justify-content-around">
                                    <h3>Articles</h3>
                                    <h4>$23</h4>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 m-2 shadow-lg">
                            <img className="img-fluid cardImg" src="./images/keycaps.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <div className="d-flex justify-content-around">
                                    <h3>Articles</h3>
                                    <h4>$23</h4>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 m-2 shadow-lg">
                            <img className="img-fluid cardImg" src="./images/console.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <div className="d-flex justify-content-around">
                                    <h3>Articles</h3>
                                    <h4>$23</h4>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 m-2 shadow-lg">
                            <img className="img-fluid cardImg" src="./images/keyboard-big.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <div className="d-flex justify-content-around">
                                    <h3>Articles</h3>
                                    <h4>$23</h4>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Shop;