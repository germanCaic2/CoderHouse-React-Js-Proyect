import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import MainRoute from "./components/MainRoute";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";

function App() { 
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<MainRoute />} />
          <Route exact path={"/aboutUs"} element={<Main />} />
          <Route exact path={"/shop"} element={<Shop />} />
          <Route exact path={"/contact"} element={<Contact />} />
          <Route exact path={"/category/:id"} element={<Shop />} />
          <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route exact path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </CartContextProvider>
  );
}

export default App;