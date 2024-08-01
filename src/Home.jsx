import React from "react";
import Navbar from "./Navbar";
import Banner from "./Home/Banner";
import Services from "./Home/Services";
import Vision from "./Home/Vision";
import Course from "./Home/Course";
import Whycompo from "./Home/Whycompo";
import Contact from "./Home/Contact";
import Testamonials from "./Home/Testamonials";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
    <div className="p-2 ">
      <div className="bg-[#1B238D] w-full h-[1240px] rounded-t-xl rounded-br-0 p-2">
        <Navbar />
        <Banner />
      </div>
      <Services />
      <Vision />
      <Course />
      <Whycompo />
      <Contact />
      <Testamonials />
    </div>
    <Footer />
      
    </>
  );
};

export default Home;
