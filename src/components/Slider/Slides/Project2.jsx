import React from "react";

function Project2() {
  return (
    <div className="relative w-full h-64 group">
      <img
        src="Screenshot 2025-05-07 at 10.32.00 a.m..png"
        className="w-full dark:bg-neutral-900 h-full object-scale-down cursor-pointer"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <h3 className="text-xl text-white text-center  px-2">
          CodeCuisine: A Drag-and-Drop Game for Teaching Programming to Kids
        </h3>
        <h3 className=" text-white text-center px-2">
          CodeCuisine is an educational game designed to teach kids the
          fundamentals of programming through a fun and interactive
          hamburger-making challenge.
        </h3>
      </div>
    </div>
  );
}

export default Project2;
