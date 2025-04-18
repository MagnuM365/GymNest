import React from "react";
import Hero from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { PricingPlan } from "./PricingPlan";
import Ecommerce from "./Ecommerce";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="plan"><PricingPlan /></div>
        <div id="products"><Ecommerce /></div>
        <div id="contact"><Contact /></div>
        <Footer />
        
      </div>
    </>
  );
};

export default Home;
