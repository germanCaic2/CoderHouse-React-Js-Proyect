import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Error404 from "./components/Error404";
import MainRoute from "./components/MainRoute";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainRoute />} />
        <Route path={"/AboutUs"} element={<Main />} />
        <Route path={"/Shop"} element={<Shop />} />
        <Route path={"/Contact"} element={<Contact />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;