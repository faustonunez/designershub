import React from "react";
import Card from "./Card";
import data from "./sec-data.json"; // Ensure this path is correct

export function Webinars() {
  const resolveImagePath = (imagePath) => {
    return new URL(`../assets/card-images/${imagePath}`, import.meta.url).href;
  };

  return (
    <div id="webinar-sec" className=" scroll-my-[-250px]">
      <h2>Webinars</h2>
      <div className="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 grid-cols-2 mt-8">
        {data.webinars.map((item, index) => (
          <Card
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
