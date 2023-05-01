import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import GITHUB from "../assets/github.png";
import BOOTSTRAP from "../assets/bootstrap.png";
import TAILWIND from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-500 ">
            Skills
          </p>
          <p className="py-4 text-xl">
            These are the technologies I've worked with:
          </p>
        </div>

   
      </div>
    </div>
  );
};

export default Skills;
