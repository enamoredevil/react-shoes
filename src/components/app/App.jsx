import React from "react";

import { ToastContainer } from "react-toastify";

import { AnimatePresence } from "framer-motion";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimatedRoutes from "../animatedRoutes/AnimatedRoutes";

import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <AnimatedRoutes />
        </AnimatePresence>
      </main>
      <Footer />
      <ToastContainer autoClose={2000} position="top-center" theme="light" />
    </div>
  );
};

export default App;
