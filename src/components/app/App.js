import React from "react";

import Header from "../header/Header";
import Hero from "../hero/Hero";
import Catalog from "../catalog/Catalog";

const App = () => {
  return (
    <div className="app">
        <Header />
        <Hero />
        <Catalog />
    </div>
  );
};


export default App;