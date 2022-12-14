import React, {useState} from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img className="h-[60px]" src={Logo} alt="Trupti's Logo" />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
      {/* Hamburger for smaller size */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ?  <FaBars /> : <FaTimes/>}
      </div>
      {/* Mobile Menu */}
      <ul className={!nav ?'hidden' : 'absolute top-0 left-0 w-full bg-[#0a192f] h-screen flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact Me</li>
      </ul>
    </div>
  );
};

export default Navbar;
