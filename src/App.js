import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRoute from "./components/MainRoute";
import Shop from "./components/Shop";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Finish from "./Finish";

function App() { 
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path={"/"} element={<MainRoute />} />
          <Route path={"/aboutUs"} element={<AboutUs />} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/category/:id"} element={<Shop />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/finish"} element={<Finish />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </CartContextProvider>
  );
}

export default App;