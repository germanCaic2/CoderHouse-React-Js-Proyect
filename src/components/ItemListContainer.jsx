import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-success d-flex align-items-center" role="alert">
                        <div>
                            {greeting}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;