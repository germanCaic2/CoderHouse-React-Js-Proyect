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
import Cart from "./components/Cart";

function App() { 
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path={"/"} element={<MainRoute />} />
          <Route path={"/aboutUs"} element={<Main />} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/category/:id"} element={<Shop />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </CartContextProvider>
  );
}

export default App;