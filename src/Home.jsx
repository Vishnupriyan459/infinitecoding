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
      <div className=" space-y-0 p-2">
        <div className=" bg-[#1B238D] w-full pb-[5rem] rounded-t-xl rounded-br-0 p-2 overflow-x-hidden">
          <Navbar />
          <Banner />
        </div>
        
          <Services />
        
        <div className="">
          <Vision />
        </div>
        <div className="">
          <Course />
        </div>
        <div>
        <Whycompo />
        </div>
        
        <Contact />
        <div className="py-2">
        <Testamonials />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
