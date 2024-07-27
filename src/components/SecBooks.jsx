import React from "react";
import { CardCover } from "./CardCover";
import data from "./sec-data.json"; // Ensure this path is correct

export function Books() {
  const resolveImagePath = (imagePath) => {
    return new URL(`../assets/card-images/${imagePath}`, import.meta.url).href;
  };

  return (
    <div id="books-sec" className=" scroll-my-[-250px]">
      <h2>Books</h2>
      <div className="grid xl:grid-cols-5 gap-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-8">
        {data.books.map((item, index) => (
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
