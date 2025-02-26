"use client";

import React, { useState } from "react";

// Technology section
const TechSection = () => {
  const techItems = [
    { name: "Git", logo: "🔶", position: "left-12 bottom-24" },
    { name: "AWS", logo: "☁️", position: "left-32 top-24" },
    { name: "MongoDB", logo: "🍃", position: "left-64 bottom-12" },
    { name: "HTML/CSS", logo: "🔶", position: "left-1/3 top-20" },
    { name: "React", logo: "⚛️", position: "left-1/2 bottom-16" },
    { name: "Angular", logo: "🅰️", position: "left-1/2 top-48" },
    { name: "WordPress", logo: "🔷", position: "left-2/3 top-24" },
    { name: "Node.js", logo: "🟢", position: "left-3/4 top-12" },
    { name: "MySQL", logo: "🐬", position: "right-32 top-20" },
    { name: "PHP", logo: "🐘", position: "right-24 bottom-16" },
    { name: "Flutter", logo: "🔵", position: "right-1/2 bottom-24" },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="bg-[#080919] py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We are Professional at
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Either it's a web application, mobile app, or custom software
            solution, we at Creware Technologies have a proven track record of
            bringing creative concepts to life, backed by a commitment to
            quality, innovation, and timely delivery.
          </p>
        </div>

        <div className="relative h-80 mb-8">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gray-700"></div>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="h-full w-px bg-gray-700 mx-auto"></div>
          </div>

          {/* Tech Items */}
          {techItems.map((item, index) => (
            <div
              key={item.name}
              className={`absolute ${item.position} transform transition-transform duration-300 ease-out`}
              style={{
                transform:
                  hoveredItem === index ? "translateY(-8px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md cursor-pointer">
                <span className="text-2xl">{item.logo}</span>
              </div>
              <div className="mt-2 text-center text-xs text-gray-400">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section className="bg-[#0f1232] text-white p-10 flex flex-col md:flex-row">
      <div className="md:w-2/5 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">
          We'd love
          <br />
          to hear
          <br />
          your story
        </h2>
        <div className="mb-6">
          <p className="text-sm">+91 90268 49414 • +91 9026623490</p>
          <p className="text-sm">shashanksharmaa123599@gmail.com</p>
        </div>
      </div>

      <div className="md:w-3/5 md:pl-8">
        <h3 className="text-xl font-bold mb-6">Get in touch</h3>
        <div className="space-y-4">
          {[
            "Hi! I am",
            "Reach me at",
            "Country",
            "Mobile no.",
            "Company Name",
            "Message",
          ].map((label, index) => (
            <div className="flex items-center" key={index}>
              <div className="w-24 text-sm">{label}</div>
              <div className="text-[#7ba9e0]">eg: ...</div>
            </div>
          ))}

          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-3" />
            <p className="text-xs">
              By submitting your email, you consent to receive communication
              from us via email or phone for the purpose of connecting with you
              regarding our products and services.
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-red-600 text-white px-8 py-2 text-sm">
              SEND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export components
export { TechSection, ContactSection };
