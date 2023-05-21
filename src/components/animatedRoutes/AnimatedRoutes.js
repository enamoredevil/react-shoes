import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import ShoesPage from "../../pages/shoesPage/ShoesPage";
import SingleShoesPage from "../../pages/singleShoesPage/SingleShoesPage";
import FavoritesPage from "../../pages/favoritesPage/FavoritesPage";
import CartPage from "../../pages/cartPage/CartPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes key={location.key} location={location}>
      <Route path="/" element={<MainPage />} />
      <Route path="/men" element={<ShoesPage gender="Men" />} />
      <Route path="/women" element={<ShoesPage gender="Women" />} />
      <Route path="/unisex" element={<ShoesPage gender="Unisex" />} />
      <Route path="/:gender/shoes/:id" element={<SingleShoesPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AnimatedRoutes;
