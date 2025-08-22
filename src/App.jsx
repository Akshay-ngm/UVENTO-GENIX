import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./assets/Header";
// import Header from "./component/Header";
import Header from "./component/Header1";
import Home from "./component/pages/Home";
import AboutUs from "./component/pages/AboutUs";
import Products from "./component/pages/Products";
import Company from "./component/pages/Company";
import ContactUs from "./component/pages/ContactUs";
import "./App.css";

function App3() {
  return (
    <Router>
      <Header />
      <main
        style={
          {
            // padding: "2rem"
          }
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/company" element={<Company />} /> */}

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App3;
