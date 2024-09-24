import React from "react";
import Profile from "../assets/aboutProfile.jpg";
import ProfessionalSkill from "./ProfessionalSkill";
const About = () => {
  return (
    <div className="w-full bg-[#E0E0E0] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex justify-center md:justify-start">
          <img className="rounded-3xl size-11/12 " src={Profile} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-center md:text-start text-customColor">
            About Me
          </h1>
          <p className="mt-5 text-center md:text-start">
            Hi, I’m John Carlo A. Abanes, an IT professional with a strong
            passion for technology and problem-solving. With over years of
            experience in the industry, I specialize in Web Development, UI/UX
            Design, Grapic Design, Frontend Development and Backend Development,
            working with clients and businesses to ensure their IT
            infrastructure is secure, scalable, and efficient.
          </p>
          <h1 className="mt-5 text-4xl font-semibold text-center md:text-start text-customColor">
            Professional Skillset
          </h1>
          <div className="flex gap-2 mt-5 flex-wrap justify-center md:justify-start">
            <ProfessionalSkill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
