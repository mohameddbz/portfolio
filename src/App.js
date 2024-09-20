import React from "react";
import Navbar from "./pages/navbar/Navbar";
import Banner from "./pages/banner/Banner";
import Features from "./pages/features/Features";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import FooterBottom from "./pages/footer/FooterBottom";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar/>
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div> 
    </div>
  );
}

export default App;
