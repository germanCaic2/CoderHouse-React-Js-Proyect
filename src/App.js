import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting= {"Welcome to German Caicedo Proyect"} />
      <Main />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
