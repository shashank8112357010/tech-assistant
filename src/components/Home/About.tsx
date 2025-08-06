"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import {
  Users,
  Target,
  Award,
  Zap,
  Star,
  CheckCircle
} from "lucide-react";
import ProductsHero from "@/components/products-hero";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { useState, useEffect } from "react";
import { DemoForm } from "@/components/ui/DemoForm";
import { useRouter } from "next/navigation";


const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};




const stats = [
  { number: 500, label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" />, suffix: "+" },
  { number: 5, label: "Team Members", icon: <Users className="w-6 h-6" />, suffix: "+" },
  { number: 99, label: "Client Satisfaction", icon: <Star className="w-6 h-6" />, suffix: "%" },
  { number: 24, label: "Support Available", icon: <Zap className="w-6 h-6" />, suffix: "/7" }
];

// Animated Counter Component
type AnimatedCounterProps = {
  target: number;
  duration?: number;
  suffix?: string;
};

function AnimatedCounter({ target, duration = 2000, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return (
    <span className="text-3xl lg:text-4xl font-bold text-white">
      {count}{suffix}
    </span>
  );
}

export default function AboutPage() {
  const router = useRouter();

  const [showDemoForm, setShowDemoForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDemoSubmit = async (data: { name: string; phone: string; email: string }) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          message: "Demo request from products page",
          type: "demo",
        }),
      });

      if (response.ok) {
        window.location.href = "#marketingpro";
        setShowDemoForm(false);
      } else {
        throw new Error("Failed to submit demo request");
      }
    } catch (error) {
      console.error("Demo form submission error:", error);
      alert("Failed to submit demo request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="About Tech Assistant"
        heading="Building the Future"
        subheading="We're a team of innovators, creators, and problem-solvers dedicated to transforming businesses through cutting-edge technology and exceptional design."
        buttonText={undefined}
        onButtonClick={() => setShowDemoForm(true)}
      />

      {/* Stats Section */}
      <section className="py-16 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-4 text-blue-400 w-12 h-12 mx-auto bg-blue-900/20 rounded-full">
                  {stat.icon}
                </div>
                <div className="mb-2">
                  <AnimatedCounter
                    target={stat.number}
                    duration={2000}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-neutral-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border border-purple-500/30">
              Our Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              From Vision to Reality
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Founded in 2020, Tech Assistant started as a small team with big dreams. Today, we're proud to be at the forefront of digital innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4 py-8">
                  <div className="w-12 h-12 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Our Mission</h3>
                    <p className="text-neutral-400">
                      To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 py-8">
                  <div className="w-12 h-12 bg-gradient-to-tr from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Our Vision</h3>
                    <p className="text-neutral-400">
                      To be the leading force in digital transformation, creating a future where technology seamlessly enhances human potential and business success.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border border-purple-700/30 shadow-xl transition-colors hover:border-purple-500/40">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2">Our Journey Timeline</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Key milestones that shaped our growth
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      { year: "2020", text: "Founded" },
                      { year: "2021", text: "First 100 Clients" },
                      { year: "2022", text: "International Expansion" },
                      { year: "2023", text: "AI Innovation Hub" },
                      { year: "2024", text: "Future Forward", isActive: true }
                    ].map(({ year, text, isActive }) => (
                      <div
                        key={year}
                        className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-neutral-700 hover:border-purple-400/50 transition-all duration-300"
                      >
                        <div className="relative w-4 h-4">
                          {isActive && (
                            <span className="absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75 animate-ping"></span>
                          )}
                          <span className={`relative inline-flex w-4 h-4 rounded-full ${isActive ? 'bg-purple-500 shadow-md' : 'bg-purple-200 shadow'} transition-transform duration-300`} />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-purple-300">{year}</span>
                          <p className="text-sm text-neutral-300">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Take the first step toward building your digital presence with our proven solutions.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <MovingBorderButton onClick={() => setShowDemoForm(true)} size="lg" className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 cursor-pointer hover:from-blue-800/50 hover:to-pink-800/40 text-white">
                Get Started
              </MovingBorderButton>

            </div>
          </motion.div>
        </div>
      </section>
      {showDemoForm && (
        <DemoForm
          onCancel={() => setShowDemoForm(false)}
          onSubmit={handleDemoSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </main>
  );
} 