import React from "react";
import Navbar from "../Navbar";
import Banner from "./Banner";
import Service from "./Service";
import Cplus from "./Cplus";
import Quote from "./Quote";
import Challenges from "./Challenges";
import Process from "./Process";

const Main = () => {
  return (
    
      <div className="w-[98%] bg-[#F3EFEF] rounded-t-xl rounded-br-xl mx-auto mt-[1.5rem] px-4 py-2 space-y-4">
        <Navbar />
        <Banner />
        <Service />
        <Cplus />
        <Quote />
        <Challenges />
        <img src="/info/quotethree.svg" alt="" className="w-full h-[600px]" />
        <Process />
      </div>
    
  );
};

export default Main;
