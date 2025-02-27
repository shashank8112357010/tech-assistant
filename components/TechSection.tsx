"use client";

import React, { useState } from "react";

const techItems = [
  { name: "Git", logo: "/images/git.png", position: "top-[50px]" },
  { name: "AWS", logo: "/images/aws.png", position: "top-[80px]" },
  {
    name: "Google Cloud",
    logo: "/images/google-cloud.png",
    position: "top-[60px]",
  },
  { name: "MongoDB", logo: "/images/mongodb.png", position: "top-[90px]" },
  { name: "HTML/CSS", logo: "/images/html-css.jpeg", position: "top-[70px]" },
  { name: "React", logo: "/images/react.png", position: "top-[100px]" },
  { name: "Angular", logo: "/images/angular.png", position: "top-[85px]" },
  { name: "WordPress", logo: "/images/wordpress.jpeg", position: "top-[65px]" },
  { name: "Node.js", logo: "/images/node.jpeg", position: "top-[95px]" },
  { name: "MySQL", logo: "/images/mysql.png", position: "top-[75px]" },
  { name: "PHP", logo: "/images/php.png", position: "top-[85px]" },
];

const TechSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-[#080919] py-16 relative overflow-hidden text-white">
      <div className="container mx-auto px-4 relative flex flex-col items-center">
        {/* Box with Text */}
        <div className="text-white p-6 rounded-md shadow-md max-w-3xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We are Professional at
          </h2>
          <p className="text-gray-700">
            Either it's a web application, mobile app, or custom software
            solution, we at Creware Technologies have a proven track record ofx
            bringing creative concepts to life, backed by a commitment to
            quality, innovation, and timely delivery. Our customer-centric
            approach means that your input is central to the development
            process, ensuring that the final product aligns perfectly with your
            vision.
          </p>
          <p className="text-gray-700 mt-2">
            The ability to convert ideas into IT software reality is not just a
            service at Creware Technologies; it's a passion, a promise, and a
            pathway to digital transformation for businesses looking to make
            their mark in the digital landscape. With a focus on cutting-edge
            technology and a customer-driven mindset, we are the partner of
            choice for those seeking to turn their software dreams into reality.
          </p>
        </div>

        {/* Tech Items with Zig-Zag Layout */}
        <div className="relative mt-12 flex flex-wrap justify-center gap-12">
          {techItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center ${item.position}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Dotted Line */}
              <div className="absolute top-[-80px] h-[70px] w-px border-dashed border-white border opacity-50"></div>

              {/* Tech Icon with Hover Effect */}
              <div
                className={`bg-white w-16 h-16 flex items-center justify-center rounded-lg shadow-lg transform transition-transform duration-300 ease-out ${
                  hoveredIndex === index ? "-translate-y-3" : "translate-y-0"
                }`}
              >
                <img src={item.logo} alt={item.name} className="w-10 h-10" />
              </div>

              {/* Tech Label */}
              <p className="text-sm text-gray-300 mt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default TechSection;
