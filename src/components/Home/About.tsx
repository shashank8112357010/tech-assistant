"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { Button } from "@/components/lightswind/button";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Globe,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";
import { Boxes } from "@/components/ui/bg-box";
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

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Visionary leader with 15+ years in tech innovation",
    skills: ["Strategy", "Leadership", "Innovation"]
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "/logo.png", // Use local image for Sarah Chen
    bio: "Technical architect driving digital transformation",
    skills: ["Architecture", "AI/ML", "Cloud"]
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Creative director crafting exceptional user experiences",
    skills: ["UX/UI", "Branding", "Prototyping"]
  },
  {
    name: "Priya Patel",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Engineering leader building scalable solutions",
    skills: ["Backend", "DevOps", "Team Leadership"]
  }
];

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation First",
    description: "We constantly push boundaries to create cutting-edge solutions that solve real-world problems."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "People Centered",
    description: "Our team and clients are at the heart of everything we do. We build for humans, not just users."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trust & Security",
    description: "We maintain the highest standards of security and transparency in all our operations."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Impact",
    description: "We create solutions that make a positive difference in communities worldwide."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Speed & Agility",
    description: "We move fast, adapt quickly, and deliver results that exceed expectations."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion Driven",
    description: "We're passionate about technology and its power to transform businesses and lives."
  }
];

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
                            <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75 animate-ping"></span>
                          )}
                          <span className={`relative inline-flex w-4 h-4 rounded-full ${isActive ? 'bg-purple-500 shadow-md' : 'bg-neutral-400 shadow'} transition-transform duration-300`} />
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

      {/* The Minds Behind the Magic Section */}
      {/* <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✨</span>
              </div>
              <span className="text-neutral-400 text-sm font-semibold tracking-wider">OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              The Minds Behind the Magic
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Meet the brilliant minds who turn your ideas into reality. Our team combines creativity, technical expertise, and innovation to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Shashank Sharma",
                role: "Lead Developer",
                expertise: "Full-Stack Development",
                description: "Passionate about creating scalable solutions and pushing the boundaries of web technology.",
                icon: "💻",
                accent: "text-blue-400"
              },
              {
                name: "Vaisnavi ",
                role: "UX/UI Designer",
                expertise: "User Experience Design",
                description: "Crafting beautiful, intuitive interfaces that users love to interact with.",
                icon: "🎨",
                accent: "text-purple-400"
              },
              {
                name: "Harshit",
                role: "DevOps Engineer",
                expertise: "Cloud Infrastructure",
                description: "Building robust, scalable infrastructure that powers our applications seamlessly.",
                icon: "☁️",
                accent: "text-green-400"
              },
              {
                name: "Suraj Kumar",
                role: "Product Manager",
                expertise: "Strategic Planning",
                description: "Translating business needs into technical solutions that drive growth and success.",
                icon: "📊",
                accent: "text-orange-400"
              },
              {
                name: "Arpita Karki",
                role: "Security Specialist",
                expertise: "Cybersecurity",
                description: "Ensuring your data and applications are protected with industry-leading security practices.",
                icon: "🔒",
                accent: "text-yellow-400"
              },
              {
                name: "Kumar Patel",
                role: "AI/ML Engineer",
                expertise: "Machine Learning",
                description: "Leveraging artificial intelligence to create smarter, more efficient solutions.",
                icon: "🤖",
                accent: "text-indigo-400"
              }
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative bg-neutral-900/80 border border-neutral-700 rounded-xl p-8 h-full hover:border-neutral-600 transition-all duration-300 hover:shadow-xl">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 border border-neutral-700">
                      {member.icon}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className={`font-semibold mb-1 ${member.accent}`}>{member.role}</p>
                    <p className="text-neutral-400 text-sm mb-4">{member.expertise}</p>
                    <p className="text-neutral-300 text-base leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <span className="inline-block px-4 py-2 bg-neutral-800 text-neutral-300 text-sm font-semibold rounded-full border border-neutral-700">
                      {member.expertise}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section> */}

      {/* Values Section */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              Our Values
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              These core values guide every decision we make and every solution we create.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-neutral-900/50 border-neutral-700 h-full group hover:border-blue-500/30 transition-colors shadow-lg">
                  <CardContent className="p-8 flex flex-col items-center text-center mt-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-6 group-hover:bg-blue-500/30 transition-colors border border-blue-500/30">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

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