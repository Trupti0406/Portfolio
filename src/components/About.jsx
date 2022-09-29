import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-500 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-rigt text-4xl font-bold">
            <p>Hi, I'm Trupti, please take a look around my portfolio</p>
          </div>
          <div>
            <p>
              Seeking a beginner role to enhance and explore my technical
              knowledge gained at Bhilai Institute of Technology in the past
              years I am currently pursuing a B.Tech degree in Computer Science
              and Engineering and mainly Interested in the field of Web
              development. Proficient with Programming Languages such as
              JavaScript , C++ and Java with an understanding of the Python
              Environment. Skilled with Front-end and Back-end frameworks Like
              React and Node.js and have also worked with REST Api and
              integrations with Databases such as MongoDB. Also Familiar with
              Gatsby , Firebase and Redux Looking for an opportunity to work in
              a challenging position combining my skills in Software
              Engineering, which provides professional development, interesting
              experiences and personal growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
