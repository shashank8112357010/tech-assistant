"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import {
  Code2, Smartphone, Cloud, PenTool, ShieldCheck, BarChart, Users, Rocket, ArrowRight, CheckCircle, Star
} from "lucide-react";
import { GradientCard } from "@/components/ui/gradiant-card";
import { ContainerScroll, CardSticky } from "@/components/ui/card-stuck";
import ProductsHero from "@/components/products-hero";
import { useRouter } from "next/navigation";
import { DemoForm } from "@/components/ui/DemoForm";

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    title: "Web Development",
    desc: "We specialize in creating modern, responsive websites and web applications that drive business growth. Our development team uses cutting-edge technologies like React, Next.js, Node.js, and Python to build scalable solutions. From e-commerce platforms to custom business applications, we deliver high-performance websites with seamless user experiences, optimized for speed, security, and search engine visibility."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-400" />,
    title: "Mobile Apps",
    desc: "Transform your business with powerful mobile applications for iOS and Android platforms. We develop native and cross-platform apps using React Native, Flutter, and Swift/Kotlin. Our mobile solutions include user authentication, real-time data synchronization, push notifications, offline functionality, and seamless integration with backend services. We ensure your app stands out in the competitive app marketplace."
  },
  {
    icon: <Cloud className="w-8 h-8 text-purple-400" />,
    title: "Cloud Solutions",
    desc: "Leverage the power of cloud computing to scale your business operations efficiently. We provide comprehensive cloud services including AWS, Azure, and Google Cloud Platform solutions. Our expertise covers cloud migration, serverless architecture, containerization with Docker and Kubernetes, automated deployment pipelines, and cloud security implementation. We help you reduce costs while improving performance and reliability."
  },
  {
    icon: <PenTool className="w-8 h-8 text-pink-400" />,
    title: "UI/UX Design",
    desc: "Create exceptional user experiences with our comprehensive UI/UX design services. We follow user-centered design principles, conducting thorough research, creating detailed wireframes, and developing interactive prototypes. Our design process includes user journey mapping, information architecture, visual design systems, and usability testing. We ensure your digital products are not only beautiful but also intuitive and accessible to all users."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
    title: "Digital Marketing",
    desc: "Boost your online presence with targeted digital marketing strategies, including SEO, social media, and performance-driven campaigns that generate real results. We help you attract, engage, and convert your target audience while building a strong, sustainable brand presence in the digital space."
  },
  {
    icon: <BarChart className="w-8 h-8 text-cyan-400" />,
    title: "Maintenance & Support",
    desc: "Stay worry-free with ongoing website and app maintenance, updates, and technical support to keep your business running smoothly. Our dedicated support ensures your platforms remain secure, up-to-date, and fully optimized, allowing you to focus on growing your business."
  },
];

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Research and Analysis",
    description:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
  },
  {
    id: "process-2",
    title: "Wireframing and Prototyping",
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual indigoprints allow us to test and refine the user experience before diving into design.",
  },
  {
    id: "process-3",
    title: "Design Creation",
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    id: "process-4",
    title: "Development and Testing",
    description:
      "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
  },
  {
    id: "process-5",
    title: "Launch and Support",
    description:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
  },
];

const reasons = [
  {
    icon: <CheckCircle className="w-7 h-7 text-green-400" />,
    title: "Proven Expertise",
    desc: "A team of experienced professionals with a track record of successful projects."
  },
  {
    icon: <Star className="w-7 h-7 text-yellow-400" />,
    title: "Client-Centric Approach",
    desc: "We prioritize your needs and deliver solutions that exceed expectations."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-400" />,
    title: "Security & Reliability",
    desc: "Your data and business are protected with industry-leading security practices."
  },
  {
    icon: <Rocket className="w-7 h-7 text-purple-400" />,
    title: "Agile & Fast Delivery",
    desc: "We use agile methodologies to deliver results quickly and efficiently."
  },
];








export default function ServicesPage() {
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
        badge="Our Services"
        heading={<>Digital Solutions for <br />Modern Businesses</>}
        subheading="We help you grow, innovate, and succeed with technology that works for you."
        buttonText="Get Started"
        onButtonClick={() => setShowDemoForm(true)}
      />
      {/* Agile Methodology Process Section (new) */}

      {/* How We Work Section */}
      <section className="py-24 bg-black ">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Heading and description */}
          <div className="left-0 top-20 md:sticky md:h-svh md:py-12">
            <h5 className="text-xs md:text-sm uppercase tracking-wide text-neutral-400 mb-2">our process</h5>
            <h2 className="mb-6 mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Planning your <span className="text-blue-400">project development</span> journey
            </h2>
            <p className="max-w-prose text-base md:text-lg text-neutral-300">
              Our journey begins with a deep dive into your vision. In the Discovery phase, we engage in meaningful conversations to grasp your brand identity, goals, and the essence you want to convey. This phase sets the stage for all that follows.
            </p>
          </div>
          <ContainerScroll className="min-h-[400vh] space-y-8 py-12">
            {PROCESS_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 2}
                className="rounded-2xl border border-white/10 p-8 shadow-md backdrop-blur-md bg-black/90"
                incrementY={64}
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="my-6 text-2xl font-bold tracking-tighter text-white">
                    {phase.title}
                  </h2>
                  <h3 className="text-2xl font-bold text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                </div>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">{phase.description}</p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              What We Offer
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              From web development to cloud solutions, we provide a full spectrum of digital services to empower your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Pass service fields as props, as GradientCard does not accept a 'service' prop */}
                <GradientCard icon={service.icon} title={service.title} desc={service.desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              The Tech Assistant Advantage
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Discover what sets us apart from the competition.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, idx) => (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <div className="relative group">
                  {/* Moving Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt-reverse"></div>

                  <Card className="relative bg-neutral-900/80 border-neutral-700 shadow-xl h-80 w-full flex flex-col hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm">
                    <CardHeader className="flex flex-col items-center pb-4 flex-shrink-0">
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 mt-8 border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
                        {/* Animated border around icon */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                        <div className="text-blue-400 group-hover:text-blue-300 transition-colors relative z-10">
                          {reason.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold mb-3 text-center text-white group-hover:text-blue-400 transition-colors">
                        {reason.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex items-center justify-center px-4">
                      <CardDescription className="text-neutral-300 text-center leading-relaxed">
                        {reason.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Contact us for a free consultation and see how we can help you grow.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <MovingBorderButton onClick={() => setShowDemoForm(true)} size="lg" className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white cursor-pointer">
                Get Started
              </MovingBorderButton>

            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS Animations for Moving Borders */}
      <style jsx global>{`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }
        
        @keyframes tilt-reverse {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-0.5deg);
          }
          75% {
            transform: rotate(0.5deg);
          }
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        
        .animate-tilt-reverse {
          animation: tilt-reverse 8s infinite linear;
        }
      `}</style>
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