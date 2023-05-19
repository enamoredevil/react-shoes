import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import MainPage from "../../pages/MainPage";
import ShoesPage from "../../pages/shoesPage/ShoesPage";
import SingleShoesPage from "../../pages/singleShoesPage/SingleShoesPage";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/men" element={<ShoesPage gender="Men" /> } />
        <Route path="/women" element={<ShoesPage gender="Women" /> } />
        <Route path="/unisex" element={<ShoesPage gender="Unisex" /> } />
        <Route path="/:gender/shoes/:id" element={<SingleShoesPage /> } />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
