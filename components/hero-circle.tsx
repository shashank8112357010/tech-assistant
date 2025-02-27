"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ServiceBubble {
  id: number;
  label: string;
  icon: string;
}

export default function HeroCircle() {
  const services: ServiceBubble[] = [
    { id: 1, label: "TAILORED SOFTWARE SOLUTIONS", icon: "💻" },
    { id: 2, label: "SECURE DEVELOPMENT", icon: "🔒" },
    { id: 3, label: "DIGITAL TRANSFORMATION", icon: "🚀" },
    { id: 4, label: "TRANSPARENT DELIVERY", icon: "📦" },
  ];

  return (
    <div className="relative h-[400px] w-full flex items-center justify-center">
      {/* Center circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute w-16 h-16 bg-[#0e0f2e] border-2 border-dashed border-white/30 rounded-full flex items-center justify-center z-10"
      >
        <span className="text-red-600 text-2xl font-bold">C</span>
      </motion.div>

      {/* Orbit circles - all rotating counterclockwise */}
      {[1, 2, 3].map((orbit, index) => (
        <motion.div
          key={orbit}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: 360, 
          }}
          transition={{
            scale: { duration: 0.5, delay: orbit * 0.2 },
            opacity: { duration: 0.5, delay: orbit * 0.2 },
            rotate: {
              duration: 20 + orbit * 5,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute border border-dashed border-white/30 rounded-full"
          style={{
            width: `${orbit * 100 + 50}px`,
            height: `${orbit * 100 + 50}px`,
          }}
        >
          {orbit === 1 && (
            <>
              <motion.div
                key="inner-icon-1"
                className="absolute w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(0rad) translateX(${
                    (orbit * 100 + 50) / 2
                  }px) rotate(0rad)`,
                }}
              >
                <img
                  src="/images/image4.png"
                  alt="AWS"
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
              <motion.div
                key="inner-icon-2"
                className="absolute w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${Math.PI}rad) translateX(${
                    (orbit * 100 + 50) / 2
                  }px) rotate(-${Math.PI}rad)`,
                }}
              >
                <img
                  src="images/image3.png"
                  alt="Node"
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
            </>
          )}

          {orbit === 2 && (
            <>
              <motion.div
                key="middle-icon-1"
                className="absolute w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(0rad) translateX(${
                    (orbit * 100 + 50) / 2
                  }px) rotate(0rad)`,
                }}
              >
                <img
                  src="/images/image2.png"
                  alt="Angular"
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
              <motion.div
                key="middle-icon-2"
                className="absolute w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${Math.PI}rad) translateX(${
                    (orbit * 100 + 50) / 2
                  }px) rotate(-${Math.PI}rad)`,
                }}
              >
                <img
                  src="/images/image1.png"
                  alt="React"
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
            </>
          )}

          {orbit === 3 && <>{/* Outer circle - no images for now */}</>}
        </motion.div>
      ))}

      {services.map((service) => {
        let x = 0;
        let y = 0;

        if (service.id === 1) {
          x = -120;
          y = -160;
        } else if (service.id === 2) {
          x = 120;
          y = -160;
        } else if (service.id === 3) {
          x = -120;
          y = 160;
        } else if (service.id === 4) {
          x = 120;
          y = 160;
        }

        return (
          <motion.div
            key={service.id}
            initial={{ x, y, opacity: 0 }}
            animate={{
              x,
              y,
              opacity: 1,
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              delay: service.id * 0.3,
              duration: 0.8,
              rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            }}
            className="absolute"
          >
            <div className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex items-center gap-2">
              <span className="hidden md:inline">{service.icon}</span>
              {service.label}
            </div>
          </motion.div>
        );
      })}

      
    </div>
  );
}
