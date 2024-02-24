import React from "react";

export const CardCover = ({ logo, title, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className=" card-base  ">
        <img
          className=" w-full h-auto border-gray-300"
          src={logo}
          alt={title}
        />
        <div className="flex-grow p-5">
          <h4 className=" mb-2 ">{title}</h4>
          <h5 className=" overflow-hidden line-clamp-2">{description}</h5>
        </div>
      </div>
    </a>
  );
};

export default CardCover;
