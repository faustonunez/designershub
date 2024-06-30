import React from "react";

export const Card = ({ logo, title, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className=" card-base p-5 pt-10">
        <img
          className="rounded-full w-[64px] h-[64px] mb-4 border-[0px]   border-gray-300 "
          src={logo}
          alt={title}
        />
        <div className="flex-grow">
          <h4 className=" mb-2 ">{title}</h4>
          <h5 className=" overflow-hidden line-clamp-2">{description}</h5>
        </div>
      </div>
    </a>
  );
};

export default Card;
