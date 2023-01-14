import React from "react";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-secondary p-3 d-flex justify-content-around mt-auto">
      <small className="text-light rounded bg-secondary p-2 font-weight-bold">German Caicedo | React Js - Coderhouse</small>
      <div className="bg-light rounded">
        <a href="https://github.com/germanCaiced6" className="p-2" rel="noreferrer" target="_blank" > <img src="../images/github.svg" alt="Github"/></a>
        <a href="https://www.linkedin.com/in/german-caicedo-5522b8210/" className="p-2" rel="noreferrer" target="_blank" > <img src="../images/linkedin.svg" alt="LinkedIn"/></a>
        <a href="https://www.instagram.com/germancaiced6/" className="p-2" rel="noreferrer" target="_blank" > <img src="../images/instagram.svg" alt="Instagram"/></a>
        <a href="https://www.youtube.com/channel/UCL_f-hKZMn5PRgDzdT2zpdg" className="p-2" rel="noreferrer" target="_blank" > <img src="../images/youtube.svg" alt="Youtube"/></a>
      </div>
    </footer>
  );
}

export default Footer;