import React from "react";
import ProjectData from "./ProjectData";
import Cards from "./Cards";

const Project = () => {
  const projects = ProjectData.map((datus, index) => {
    return (
      <Cards
        image={datus.image}
        name={datus.name}
        description={datus.description}
      />
    );
  });
  return (
    <div className="w-full  py-16 px-4 h-auto">
      <h1 class="text-center text-4xl font-semibold md:text-center text-customColor mb-8">
        Projects
      </h1>
      <div className="max-w-[1240px] mx-auto grid gap-5 md:flex ">
        {projects}
      </div>
    </div>
  );
};

export default Project;
