import React from "react";

function Project3() {
  return (
    <div className="relative w-full h-64 group">
      <img
        src="Screenshot 2025-05-07 at 10.32.07 a.m..png"
        className="w-full dark:bg-neutral-900 h-full object-scale-down cursor-pointer"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <h3 className="text-xl text-white text-center  px-2">
          IoT Air Quality Monitoring System
        </h3>
        <h3 className=" text-white text-center px-2">
          This project is an IoT-based Air Quality Monitoring System that uses
          an ESP32 microcontroller to collect environmental data (temperature,
          humidity, and air quality) from sensors.
        </h3>
      </div>
    </div>
  );
}

export default Project3;
