"use client";
import React, { useState, useEffect } from "react";

interface CounterValues {
  coffee: number;
  projects: number;
  offices: number;
  clients: number;
  [key: string]: number;
}

const AnimatedCounterSection = () => {
  // Target values for each counter
  const targetValues: CounterValues = {
    coffee: 55,
    projects: 120,
    offices: 1,
    clients: 100,
  };

  // State for current counter values
  const [counters, setCounters] = useState<CounterValues>({
    coffee: 0,
    projects: 0,
    offices: 0,
    clients: 0,
  });

  // Animation duration in milliseconds
  const animationDuration = 2000;
  // Number of steps in the animation
  const steps = 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const newCounters = { ...prevCounters };
        let allReachedTarget = true;

        // Update each counter
        Object.entries(targetValues).forEach(([key, target]) => {
          if (prevCounters[key] < target) {
            // Calculate increment step
            const increment = Math.ceil(
              target / (animationDuration / (1000 / steps))
            );
            // Calculate new value but don't exceed target
            newCounters[key] = Math.min(prevCounters[key] + increment, target);

            if (newCounters[key] < target) {
              allReachedTarget = false;
            }
          }
        });

        // Clear interval if all counters reached their targets
        if (allReachedTarget) {
          clearInterval(interval);
        }

        return newCounters;
      });
    }, 1000 / steps);

    return () => clearInterval(interval);
  }, []);

  // Function to convert number to array of single digits
  const getDigits = (number: number): number[] => {
    return number
      .toString()
      .padStart(3, "0")
      .split("")
      .map((digit) => parseInt(digit));
  };

  return (
    <section className="bg-[#080919] py-12 relative overflow-hidden text-white">
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
              {getDigits(counters.coffee).map((digit, index) => (
                <div
                  key={index}
                  className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center transition-all duration-200"
                >
                  <span className="text-5xl font-bold text-white">{digit}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-white font-bold mt-3">COFFEE CUPS</p>
          </div>

          {/* Projects */}
          <div className="mx-2 mb-6">
            <div className="flex">
              {getDigits(counters.projects).map((digit, index) => (
                <div
                  key={index}
                  className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center transition-all duration-200"
                >
                  <span className="text-5xl font-bold text-white">{digit}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-white font-bold mt-3">PROJECTS</p>
          </div>

          {/* Offices */}
          <div className="mx-2 mb-6">
            <div className="flex">
              {getDigits(counters.offices).map((digit, index) => (
                <div
                  key={index}
                  className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center transition-all duration-200"
                >
                  <span className="text-5xl font-bold text-white">{digit}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-white font-bold mt-3">OFFICES</p>
          </div>

          {/* Clients */}
          <div className="mx-2 mb-6">
            <div className="flex">
              {getDigits(counters.clients).map((digit, index) => (
                <div
                  key={index}
                  className="bg-gray-800 w-24 h-32 rounded-md mx-1 flex items-center justify-center transition-all duration-200"
                >
                  <span className="text-5xl font-bold text-white">{digit}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-white font-bold mt-3">CLIENTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounterSection;
