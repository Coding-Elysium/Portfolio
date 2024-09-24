import React from "react";

const Cards = (props) => {
  return (
    <div className="bg-white p-4 w-full md:w-[300px] grid gap-4 rounded-md">
      <div>
        <img src={props.image} alt="" className="w-full" />
      </div>
      <div>
        <p className="mb-4 font-bold">{props.name}</p>
        <p className="mb-4">{props.description}</p>
        <button className="bg-customColor px-7 py-1 text-white rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Cards;
