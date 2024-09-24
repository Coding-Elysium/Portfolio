import React from "react";
import Javascript from "../assets/Logo/Javascript.svg";
import Cplusplus from "../assets/Logo/Cplusplus.svg";
import Electron from "../assets/Logo/Electron.svg";
import Java from "../assets/Logo/Java.svg";
import Mongodb from "../assets/Logo/Mongodb.svg";
import Mysql from "../assets/Logo/Mysql.svg";
import Nodejs from "../assets/Logo/Nodejs.svg";
import Reactjs from "../assets/Logo/React.svg";
import Tailwindcss from "../assets/Logo/Tailwindcss.svg";
import Figma from "../assets/Logo/Figma.svg";
import Photoshop from "../assets/Logo/Photoshop.svg";
const ProfessionalSkill = () => {
  const images = [
    Javascript,
    Cplusplus,
    Electron,
    Java,
    Mongodb,
    Mysql,
    Nodejs,
    Reactjs,
    Tailwindcss,
    Figma,
    Photoshop,
  ];
  const data = images.map((datus) => {
    return (
      <div className="p-2 border rounded border-black">
        <img alt="logos" src={datus} className="w-16 h-16" />
      </div>
    );
  });
  return <>{data}</>;
};

export default ProfessionalSkill;
