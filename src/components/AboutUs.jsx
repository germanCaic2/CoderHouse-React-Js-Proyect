import React from "react";
import Main from "./Main";

const AboutUs = () => {
  return (
    <div>
      <Main />
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 col-12 text-center align-items-center">
            <img src="./images/aboutus.jpg" className="img-fluid cardImg" width="300" alt="main" />
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center flex-column">
            <h1 className="">About Us</h1>
            <p className="lead text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a dolor beatae labore sed alias voluptatem iure autem. Necessitatibus iusto facere quis tempore! Placeat blanditiis, provident sunt quisquam ducimus quam.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;