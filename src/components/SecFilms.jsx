import React from "react";
import { CardCover } from "./CardCover";
import data from "./sec-data.json"; // Ensure this path is correct

export function Films() {
  const resolveImagePath = (imagePath) => {
    return new URL(`../assets/card-images/${imagePath}`, import.meta.url).href;
  };

  return (
    <div id="films-sec" className=" scroll-my-[-250px]">
      <h2>Films</h2>
      <div className="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 sm:grid-cols-2 mt-8">
        {data.films.map((item, index) => (
          <CardCover
            key={index} // Use the index as the key
            logo={resolveImagePath(item.logo)}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
