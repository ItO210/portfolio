import React from "react";

function Portfolio() {
  return (
    <div className="relative w-full h-64 group">
      <img
        src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg"
        className="w-full h-full object-cover cursor-pointer"
      />
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-100 group-hover:opacity-0">
        <h3 className="text-xl text-white text-center px-2">
          This is supposed to be text for the project.
        </h3>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <h3 className="text-xl text-white hover:text-red-500 text-center px-2">
          Hey, I Am The Big Boss
        </h3>
        <p className="text-sm text-white mt-2 px-2 text-center">
          Some description text.
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
