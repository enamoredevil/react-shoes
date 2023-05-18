import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainPage from "../../pages/MainPage";

import ShoesPage from "../../pages/shoesPage/ShoesPage";

import "./app.scss";

import axios from "axios";

// axios.get('https://64565aef2e41ccf1691aa86e.mockapi.io/api/v1/sneakers', {
//   params: {gender: 'Unisex'}
// }).then(res => console.log(res))

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/men" element={<ShoesPage gender="Men" /> } />
        <Route path="/women" element={<ShoesPage gender="Women" /> } />
        <Route path="/unisex" element={<ShoesPage gender="Unisex" /> } />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
