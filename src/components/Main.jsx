import React from "react";

const Main = () => {
    return(
        <main id="main" className="container-fluid py-5 shadow-lg">
            <div className="container d-flex glass d-flex justify-content-center">
                <div className="p-5 col-md-5 d-flex justify-content-end align-items-end flex-column">
                    <h1 className="text-light w-75">German Caicedo</h1>
                    <p className="text-light w-75"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a dolor beatae labore sed alias voluptatem iure autem. Necessitatibus iusto facere quis tempore! Placeat blanditiis, provident sunt quisquam ducimus quam.</p>
                </div>
                <div className="col-md-5 text-center align-items-center">
                    <img src="./images/main.png" className="rounded img-fluid m-4" width="300" alt="main photo" />
                </div>
            </div>
        </main>
    );
}

export default Main;