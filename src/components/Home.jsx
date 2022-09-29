import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiArrowNarrowRight,
  HiOutlineMail,
  HiDocumentText,
} from "react-icons/hi";
import { Tooltip} from "@material-tailwind/react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm-text-7xl font-bold text-[#ccd6f6]">
          Trupti Yadav
        </h1>
        <h2 className="text-4xl sm-text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          pariatur, exercitationem nihil, ipsa nemo iusto est officiis
          blanditiis provident nisi veritatis sequi quam nobis quo! Voluptates
          odio facilis recusandae iste.
        </p>
        {/* <h3 className="text-xl font-bold text-[#ccd6f6] mb-8">
          Connect with me:
        </h3> */}
        <div>
            <ul className="flex justify-start items-center mt-8 ">
              <li>
                <Tooltip
                  content="LinkdIn"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <a className="text-gray-300 " href="/">
                    <FaLinkedin size={50} />
                  </a>
                </Tooltip>
              </li>

              <li>
                <Tooltip
                  content="Github"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <a className="text-gray-300 " href="/">
                    <FaGithub size={50} />
                  </a>
                </Tooltip>
              </li>

              <li>
                <Tooltip
                  content="E-mail"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <a className="text-gray-300 " href="/">
                    <HiOutlineMail size={50} />
                  </a>
                </Tooltip>
              </li>

              <li>
                <Tooltip
                  content="Resume"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <a className="text-gray-300 " href="/">
                    <HiDocumentText size={50} />
                  </a>
                </Tooltip>
              </li>
            </ul>

          <button className=" mt-8 text-white font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:boreder-pink-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
