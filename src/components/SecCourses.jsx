import React from "react";
import Card from "./Card";
import data from "./sec-data.json"; // Ensure this path is correct
console.log(data); // This should show your object with the 'courses' property

export function CoursesSec() {
  const resolveImagePath = (imagePath) => {
    return new URL(`../assets/card-images/${imagePath}`, import.meta.url).href;
  };

  return (
    <div id="courses-sec" className=" scroll-my-[-250px]">
      <h2>Courses</h2>
      <div className="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 grid-cols-2 mt-8">
        {data.courses.map((course, index) => (
          <Card
            key={index} // Use the index as the key
            logo={resolveImagePath(course.logo)}
            title={course.title}
            description={course.description}
            url={course.url}
          />
        ))}
      </div>
    </div>
  );
}
