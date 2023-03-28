import React from "react";
import "./stylePortfolio.css"
import Navbar from "./ComponentsPortfolio/Navbar";
import Header from "./ComponentsPortfolio/Header";
import AboutSection from "./ComponentsPortfolio/AboutSection";
import ContactSection from "./ComponentsPortfolio/ContactSection";
import Footer from "./ComponentsPortfolio/Footer";
import CopyRightSection from "./ComponentsPortfolio/CopyRightSection";

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Header/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
      <CopyRightSection/>
    </React.Fragment>
  );
};

export default App;
