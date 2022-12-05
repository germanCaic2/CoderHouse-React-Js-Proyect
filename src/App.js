import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      <Header />
      <ItemCount stock= {10} />
      <ItemListContainer greeting= {"Welcome to German Caicedo Proyect"} />
      <Main />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
