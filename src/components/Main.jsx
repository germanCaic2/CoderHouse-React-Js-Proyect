import React from "react";

const Main = () => {
  return (
    <main id="Main" className="container-fluid py-5 d-flex justify-content-center">
      <div className="glass p-4 container">
        <div className="row">
          <div className="col-md-6 col-12 p-4 d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-light">German Caicedo</h1>
            <p className="text-light lead text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a dolor beatae labore sed alias voluptatem iure autem. Necessitatibus iusto facere quis tempore! Placeat blanditiis, provident sunt quisquam ducimus quam.</p>
          </div>
          <div className="col-md-6 col-12 text-center align-items-center">
            <img src="./images/main.png" className="img-fluid" width="300" alt="main" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;