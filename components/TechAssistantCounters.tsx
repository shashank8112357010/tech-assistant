"use client";
import React from "react";

const CounterSection = () => {
  return (
    <section className="bg-[#080919] py-12 relative overflow-hidden text-white">
      {/* Background pattern with TECH ASSISTANT text */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ transform: "rotate(-10deg)" }}
      >
        {Array.from({ length: 12 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex whitespace-nowrap"
            style={{ opacity: 0.2 }}
          >
            {Array.from({ length: 8 }).map((_, colIndex) => (
              <div key={colIndex} className="mx-4 my-6">
                <span className="text-gray-400 font-bold text-xl">TECH </span>
                <span className="text-red-600 font-bold text-xl">
                  ASSISTANT
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Numbers Speak <span className="text-red-600">Louder Than Words</span>
        </h2>

        {/* Counter boxes */}
        <div className="flex flex-wrap justify-center">
          {/* Coffee Cups */}
          <div className="mx-2 mb-6">
            <div className="flex">
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">0</span>
              </div>
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">5</span>
              </div>
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">5</span>
              </div>
            </div>
            <p className="text-center text-white font-bold mt-3">COFFEE CUPS</p>
          </div>

          {/* Projects */}
          <div className="mx-2 mb-6">
            <div className="flex">
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">1</span>
              </div>
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">2</span>
              </div>
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">0</span>
              </div>
            </div>
            <p className="text-center text-white font-bold mt-3">PROJECTS</p>
          </div>

          {/* Offices */}
          <div className="mx-2 mb-6">
            <div className="flex">
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">0</span>
              </div>
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">0</span>
              </div>
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">1</span>
              </div>
            </div>
            <p className="text-center text-white font-bold mt-3">OFFICES</p>
          </div>

          {/* Clients */}
          <div className="mx-2 mb-6">
            <div className="flex">
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">1</span>
              </div>
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">0</span>
              </div>
              <div className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">0</span>
              </div>
            </div>
            <p className="text-center text-white font-bold mt-3">CLIENTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
