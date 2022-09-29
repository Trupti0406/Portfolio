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

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JAVASCRIPT}
              alt="JAVASCRIPT Icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACT} alt="REACT Icon" />
            <p className="my-4">REACT</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GITHUB} alt="GITHUB Icon" />
            <p className="my-4">GITHUB</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={BOOTSTRAP}
              alt="BOOTSTRAP Icon"
            />
            <p className="my-4">BOOTSTRAP</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TAILWIND} alt="TAILWIND Icon" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
