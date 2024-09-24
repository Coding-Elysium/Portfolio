import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-customColor font-bold p-2 ">
          WELCOME TO MY PORTFOLIO
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          I'm John Carlo Abanes
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5l sm:text-4xl text-xl font-bold">A</p>
          <ReactTyped
            className="md:text-5l sm:text-4xl text-xl font-bold pl-2"
            strings={[
              "Web Developer",
              "UI/UX Designer",
              "Graphic Designer",
              "Frontend Developer",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 my-6">
          <button className="bg-customColor w-[200px] rounded-md font-medium py-3 text-black">
            Contact Me
          </button>
          <button className="border border-customColor bg-[#000300] w-[200px] rounded-md font-medium py-3 text-customColor">
            Download CV
          </button>
        </div>
        <div className="flex items-center justify-center gap-7 mt-8 ">
          <FaGithub size={40} />
          <FaFacebook size={40} />
          <FaLinkedin size={40} />
          <SiGmail size={40} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
