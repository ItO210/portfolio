import React from "react";

function Project1() {
  return (
    <div className="relative w-full h-64 group">
      <img
        src="Screenshot 2025-05-07 at 10.31.54 a.m..png"
        className="w-full dark:bg-neutral-900 h-full object-scale-down cursor-pointer"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <h3 className="text-xl text-white text-center  px-2">
          HealthSync: An Equipment Ticket Management System
        </h3>
        <h3 className=" text-white text-center px-2">
          HealthSync is a ticket management system developed for Hospital del
          Niño Morelense to streamline the reporting and resolution of issues
          with hospital equipment such as computers, printers, and scanners.
        </h3>
      </div>
    </div>
  );
}

export default Project1;
