"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import Image from "next/image";
import {
  ShoppingCart, BarChart, Users, ShieldCheck, Rocket, ArrowRight, CheckCircle, Star, Zap, User, Mail, Phone, Building, MessageSquare, Send
} from "lucide-react";
import { Boxes } from "@/components/ui/bg-box";
import ProductsHero from "@/components/products-hero";
import { useRouter } from "next/navigation";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { DemoForm } from "@/components/ui/DemoForm";

const products = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center",
    name: "Marketingpro",
    desc: "Transform your marketing campaigns with AI-powered automation. Track real-time analytics, optimize ROI, and scale your business with intelligent campaign management across all channels.",
    features: ["AI Campaign Automation", "Real-Time Analytics", "Multi-Channel Management"],
    url: "marketingpro.mk55.in"
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=center",
    name: "Aimindflow",
    desc: "Revolutionize your workflow with intelligent automation. Streamline processes, reduce manual tasks, and boost productivity with AI-driven decision making and smart integrations.",
    features: ["AI Workflow Engine", "Smart Integrations", "Process Optimization"],
    url: "Aimindflow.mk55.in"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
    name: "Samvaani",
    desc: "Create professional music instantly with AI technology. Transform your ideas into stunning soundtracks, background music, and audio content in seconds with our advanced AI composer.",
    features: ["AI Music Generation", "Professional Quality", "Instant Creation"],
    url: "samvaani.com"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
    name: "School CRM",
    desc: "Complete school management solution for modern education. Manage student records, attendance, grades, and administrative tasks with powerful analytics and reporting tools.",
    features: ["Student Management", "Attendance Tracking", "Grade Analytics"],
    url: "Schoolcrm.mk55.in"
  },
  {
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center",
    name: "Ludo Game",
    desc: "Experience the classic Ludo game reimagined for the digital age. Play with friends online, join tournaments, and enjoy real-time multiplayer gaming with chat features.",
    features: ["Multiplayer Mode", "Real-Time Chat", "Tournament System"],
    url: "ludo.mk55.in"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
    name: "Company CRM",
    desc: "Powerful customer relationship management for growing businesses. Manage leads, track sales pipelines, and analyze customer data to drive growth and improve customer satisfaction.",
    features: ["Lead Management", "Sales Pipeline", "Customer Analytics"],
    url: ""
  },
];

const benefits = [
  {
    icon: <CheckCircle className="w-7 h-7 text-green-400" />,
    title: "Boost Productivity",
    desc: "Streamline your workflow and get more done in less time."
  },
  {
    icon: <Star className="w-7 h-7 text-yellow-400" />,
    title: "Intuitive Design",
    desc: "Modern, user-friendly interfaces for a seamless experience."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-400" />,
    title: "Secure & Reliable",
    desc: "Your data is protected with industry-leading security."
  },
  {
    icon: <Rocket className="w-7 h-7 text-purple-400" />,
    title: "Fast Onboarding",
    desc: "Get started quickly with easy setup and support."
  },
];

const howItWorks = [
  {
    icon: <ShoppingCart className="w-7 h-7 text-blue-400" />,
    title: "Choose Product",
    desc: "Select the product that fits your business needs."
  },
  {
    icon: <BarChart className="w-7 h-7 text-green-400" />,
    title: "Customize & Integrate",
    desc: "Tailor features and integrate with your existing tools."
  },
  {
    icon: <Users className="w-7 h-7 text-pink-400" />,
    title: "Invite Your Team",
    desc: "Add team members and set up roles and permissions."
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />,
    title: "Launch & Grow",
    desc: "Go live and scale your business with our support."
  },
];

export default function ProductsPage() {
  const router = useRouter();
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [selectedProductUrl, setSelectedProductUrl] = useState<string | null>(null);
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
        setShowDemoForm(false);
        if (selectedProductUrl) {
          window.location.href = selectedProductUrl;
        } else {
          // fallback URL or do nothing
          window.location.href = "/products"; // or anywhere
        }
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


  // Refs for scroll sections
  const productsSectionRef = useRef<HTMLDivElement>(null);
  const productsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track scroll progress for the products section
  const { scrollYProgress } = useScroll({
    target: productsSectionRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll progress to horizontal scroll with easing
  const horizontalScroll = useTransform(
    scrollYProgress,
    [0, 1], // Full range for more responsive scroll
    [0, -(products.length - 1) * 320 - (products.length - 1) * 24] // 320px card width + 24px gap
  );

  // Prevent vertical scroll during horizontal animation
  useEffect(() => {
    const isAnimating = scrollYProgress.get() > 0 && scrollYProgress.get() < 1;

    if (isAnimating) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [scrollYProgress]);

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="Our Products"
        heading="Discover Our Solutions"
        subheading="Explore our range of innovative products designed to meet your business needs."
        buttonText="Get Demo"
        onButtonClick={() => setShowDemoForm(true)}
      />

      {/* Horizontal Scroll Products Section */}
      <section ref={productsSectionRef} className="py-24 h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-24">
            <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              What We Offer
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Core Products
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Each product is built for performance, security, and ease of use.
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="relative overflow-hidden">
            <motion.div
              ref={productsContainerRef}
              style={{ x: horizontalScroll }}
              className="flex gap-8 cursor-grab overflow-visible"
              drag="x"
              dragConstraints={{ left: -(products.length - 1) * 344, right: 0 }}
              dragElastic={0.1}
            >

              {products.map((product, index) => (
                <div
                  key={product.name}
                  ref={el => { cardRefs.current[index] = el; }}
                  className="flex-shrink-0 w-80"
                >
                  <Card className="bg-black border border-gray-800 shadow-lg w-80 hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
                    {/* Image Section */}
                    <div className="relative w-full h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <CardContent className="p-6">
                      {/* Title */}
                      <CardTitle className="text-xl font-bold my-3  text-white">
                        {product.name}
                      </CardTitle>

                      {/* Description */}
                      <CardDescription className="text-gray-300 text-sm leading-relaxed mb-4">
                        {product.desc}
                      </CardDescription>

                      <MovingBorderButton
                        size="lg"
                        className="w-full bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white cursor-pointer"
                        onClick={() => {
                          const urlToOpen = product.url.startsWith('http')
                            ? product.url
                            : `https://${product.url}`;
                          window.open(urlToOpen, '_blank');
                        }}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Get Demo
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </MovingBorderButton>


                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>


          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              Why Choose Our Products
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Benefits & Features
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Our products are designed to give you a competitive edge.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <div className="relative group">
                  {/* Moving Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-green-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt-reverse"></div>

                  <Card className="relative bg-neutral-900/80 border-neutral-700 shadow-xl h-80 w-full flex flex-col items-center p-6 hover:shadow-2xl hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30 group-hover:border-green-400/50 transition-colors">
                      {/* Animated border around icon */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        {benefit.icon}
                      </div>
                    </div>
                    <CardContent className="flex-1 flex flex-col items-center text-center justify-center px-4">
                      <CardTitle className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">{benefit.title}</CardTitle>
                      <CardDescription className="text-neutral-300 text-base leading-relaxed">
                        {benefit.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              How It Works
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get Started in 4 Easy Steps
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Simple onboarding and fast results.
            </p>
          </motion.div>
          <div className="relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/30 via-blue-500/30 to-purple500/30 transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {howItWorks.map((step, idx) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                  <div className="relative group">
                    {/* Moving Border Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="absolute -inset-0.5  bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt-reverse"></div>

                    <Card className="relative bg-neutral-900/80 border-neutral-700 shadow-xl h-80 w-full flex flex-col items-center p-6 hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
                      {/* Step Number Badge with Progress Line */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-green-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-2 border-white/20">
                        {idx + 1}
                      </div>

                      {/* Progress Indicator */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-500/50 to-blue-500/50 rounded-full opacity-60"></div>

                      <div className="relative w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-orange-500/30 group-hover:border-orange-400/50 transition-colors mt-8">
                        {/* Animated border around icon */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          {step.icon}
                        </div>
                      </div>
                      <CardContent className="flex-1 flex flex-col items-center text-center justify-center px-4">
                        <CardTitle className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{step.title}</CardTitle>
                        <CardDescription className="text-neutral-300 text-base leading-relaxed">
                          {step.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Progress Bar */}
            <div className="hidden mt-8 mb-4">
              <div className="flex justify-between items-center px-4">
                {howItWorks.map((_, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {idx + 1}
                    </div>
                    {idx < howItWorks.length - 1 && (
                      <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500/50 to-red-500/50 mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Try Our Products?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Contact us for a free demo and see how our products can transform your business.
            </p>
            <MovingBorderButton
              size="lg"
              className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white cursor-pointer"
              onClick={() => setShowDemoForm(true)}
            >
              Get Demo
            </MovingBorderButton>
          </motion.div>
        </div>
      </section>

      {/* Demo Form Popup */}
      {showDemoForm && (
        <DemoForm
          onCancel={() => setShowDemoForm(false)}
          onSubmit={handleDemoSubmit}
          isSubmitting={isSubmitting}
        />
      )}

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
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </main>
  );
}  