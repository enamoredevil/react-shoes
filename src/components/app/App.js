import React from "react";

import { AnimatePresence } from "framer-motion";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimatedRoutes from "../animatedRoutes/AnimatedRoutes";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <AnimatePresence mode="wait">
        <AnimatedRoutes />
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
