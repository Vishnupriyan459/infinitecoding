import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Services from "./Services";
import Vision from "./Vision";
import Course from "./Course";
import Whycompo from "./Whycompo";
import Contact from "./Contact";
import Testamonials from "./Testamonials";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
