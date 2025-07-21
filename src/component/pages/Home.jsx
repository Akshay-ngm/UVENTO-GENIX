import React from "react";
// import CompletHomepage from "./Hero1";
// import AboutSection from "./homepageComponents/About";
import About from "./homepageComponents/About1";
// import Industries from "./homepageComponents/Industries";
import Industries from "./homepageComponents/Industry";
import Services from "./homepageComponents/Services";
import Clients from "./homepageComponents/Clients";
import Contact from "./homepageComponents/Contact";
import Footer from "./homepageComponents/Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
