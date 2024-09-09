import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import About from "./component/About";
import Properties from "./component/Properties";
import Popular from "./component/Popular";
import Services from "./component/Services";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="bg-gray-100 dark:bg-slate-800">

      <Navbar />
      <Hero />
      <About/>
      <Popular />
      <Properties />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
