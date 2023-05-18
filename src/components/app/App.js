import React from "react";

import Header from "../header/Header";
import Hero from "../hero/Hero";
import Catalog from "../catalog/Catalog";
import Footer from "../footer/Footer";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Catalog />
      <Footer />
    </div>
  );
};

export default App;
