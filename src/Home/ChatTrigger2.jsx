import React from "react";
import ChatObj from "./ChatObj";
import Feedback from "./Feedback";

const details = [
  {
    body: "The team quickly understood our requirements and provided excellent ongoing support.",
    name: "Arnaud Barbezat",
    title: "International Marketing Manager Caya",
    img: "bg-arnaudprofile",
  },
  {
    body: "The convenience and quality of Infinite Coding's programs are unmatched. The instructors are knowledgeable and approachable, and the curriculum is thorough and up-to-date. This experience has significantly advanced my coding skills.",
    name: "Ron Simpson",
    title: "Founder The Avocado Show & Skybox",
    img: "bg-ronprofile",
  }
];

const ChatTrigger2 = () => {
  return (
    <div className=" xl:h-[800px] xl:w-[450px] hidden xl:flex flex-col gap-9 items-center">
      
      {details.map((detail, index) => (
        <Feedback key={index} details={detail} />
      ))}
      <ChatObj />
      <ChatObj />
    </div>
  );
};

export default ChatTrigger2;
