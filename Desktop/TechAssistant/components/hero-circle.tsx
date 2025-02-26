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

      {/* Orbit circles - continuously rotating */}
      {[1, 2, 3].map((orbit, index) => (
        <motion.div
          key={orbit}
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: index % 2 === 0 ? 360 : -360,
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
        />
      ))}

      {/* Service bubbles - fixed in position but subtly animating */}
      {services.map((service) => {
        // Calculate initial position
        let x = 0;
        let y = 0;

        if (service.id === 1) {
          x = -120;
          y = -80;
        } else if (service.id === 2) {
          x = 120;
          y = -80;
        } else if (service.id === 3) {
          x = -120;
          y = 80;
        } else if (service.id === 4) {
          x = 120;
          y = 80;
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

      {/* Small dots - pulsing and subtly moving */}
      {[1, 2, 3, 4].map((dot, index) => {
        const angle = (index * Math.PI) / 2;
        const x = 50 + Math.cos(angle) * 120;
        const y = 50 + Math.sin(angle) * 120;

        return (
          <motion.div
            key={`dot-${dot}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              delay: index * 0.4 + 1,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-3 h-3 bg-white rounded-full"
            style={{
              top: `${y}px`,
              left: `${x}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
}
