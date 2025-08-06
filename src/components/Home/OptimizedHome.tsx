"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, TorusKnot, Environment, Html } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useSpring, animated as a, useSprings } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import Link from "next/link";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { CometCard } from "@/components/ui/comet-card";

// Lazy load heavy components
const StaggerTestimonials = lazy(() => import("@/components/ui/testmonals").then(mod => ({ default: mod.StaggerTestimonials })));
const FeaturesSection = lazy(() => import("@/components/ui/Features").then(mod => ({ default: mod.FeaturesSection })));

// Import the data arrays
const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable websites and web apps tailored to your business needs.",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for iOS and Android.",
  },
  {
    title: "Cloud Solutions",
    desc: "Cloud migration, hosting, and scalable infrastructure setup.",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, user-centric designs for web and mobile platforms.",
  },
  {
    title: "Cybersecurity",
    desc: "Protect your business with robust security solutions.",
  },
  {
    title: "Analytics & SEO",
    desc: "Data-driven insights and SEO strategies to grow your business.",
  },
];

const products = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center",
    name: "Marketingpro",
    desc: "A comprehensive marketing automation suite to streamline campaigns, track analytics, and boost ROI.",
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=center",
    name: "Aimindflow",
    desc: "AI-powered workflow automation for smarter, faster business processes and decision-making.",
  },
  {
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samvaani",
    desc: "Create original, high-quality music instantly with AI. Samvaani turns your ideas into professional soundtracks in just a few clicks.",
  },
];

// Optimized 3D Components with reduced complexity
function OptimizedWavyPlane() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (mesh.current) {
      const geom = mesh.current.geometry;
      // Update fewer vertices to improve performance
      for (let i = 0; i < geom.attributes.position.count; i += 3) {
        const x = geom.attributes.position.getX(i);
        const y = geom.attributes.position.getY(i);
        geom.attributes.position.setZ(i, Math.sin(x * 1.5 + t) * 0.2 + Math.cos(y * 1.5 + t) * 0.2);
      }
      geom.attributes.position.needsUpdate = true;
      // Only compute normals every other frame
      if (Math.floor(t * 10) % 2 === 0) {
        geom.computeVertexNormals();
      }
    }
  });
  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2.2, 0, 0]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <meshStandardMaterial color="#23272f" metalness={0.7} roughness={0.3} transparent opacity={0.95} />
    </mesh>
  );
}

function Hero3DLogo() {
  // Use a simpler 3D object
  return (
    <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-neutral-900 shadow-lg relative z-10">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
          <TorusKnot args={[0.6, 0.22, 64, 16]}>
            <meshStandardMaterial color="#fff" metalness={0.7} roughness={0.15} />
          </TorusKnot>
        </Float>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}

// Load this component conditionally
const Hero3DBackground = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    // Delay loading this component
    const timer = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  if (!isMounted) return null;
  
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <OptimizedWavyPlane />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

function HeroShine() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[80vw] h-32 pointer-events-none select-none"
      aria-hidden>
      <div className="w-full h-full bg-gradient-to-b from-white/30 via-blue-400/10 to-transparent blur-2xl opacity-60 animate-shine" />
      <style jsx global>{`
        @keyframes shine {
          0% { opacity: 0.7; filter: blur(32px); }
          50% { opacity: 1; filter: blur(48px); }
          100% { opacity: 0.7; filter: blur(32px); }
        }
        .animate-shine { animation: shine 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

// Optimized AnimatedProcessFlowSVG
function AnimatedProcessFlowSVG() {
  const nodes = [
    { label: "Set Requirements", x: 80, y: 60 },
    { label: "Design", x: 300, y: 100 },
    { label: "Development", x: 520, y: 100 },
    { label: "Testing", x: 700, y: 160 },
    { label: "FeedBack", x: 520, y: 260 },
    { label: "Delivery", x: 180, y: 260 },
    { label: "Review", x: 350, y: 370 },
    { label: "Deployment", x: 600, y: 370 },
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const [dashOffset, setDashOffset] = useState(400);
  
  useEffect(() => {
    // Slower animation interval
    const interval = setInterval(() => {
      setActiveIdx((idx) => (idx + 1) % nodes.length);
      setDashOffset(400);
    }, 2000);
    return () => clearInterval(interval);
  }, [nodes.length]);
  
  // Optimize animation with fewer frames
  useEffect(() => {
    if (activeIdx < edges.length) {
      let raf: number;
      let offset = 400;
      let lastTime = 0;
      
      function animate(time: number) {
        // Throttle animation to improve performance
        if (time - lastTime > 30) {
          lastTime = time;
          offset -= 20;
          if (offset < 0) offset = 0;
          setDashOffset(offset);
        }
        if (offset > 0) raf = requestAnimationFrame(animate);
      }
      
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }
  }, [activeIdx, edges.length]);

  // Pre-calculate edge paths for better performance
  const edgePaths = useMemo(() => {
    return edges.map(([i, j]) => {
      const start = nodes[i];
      const end = nodes[j];
      return `M${start.x},${start.y} Q${(start.x + end.x) / 2},${(start.y + end.y) / 2 - 40} ${end.x},${end.y}`;
    });
  }, [edges, nodes]);

  return (
    <svg width="800" height="400" viewBox="0 0 800 400" className="max-w-full">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f62fe" />
          <stop offset="100%" stopColor="#6929c4" />
        </linearGradient>
      </defs>
      
      {/* Draw edges */}
      {edges.map((edge, i) => (
        <path
          key={`edge-${i}`}
          d={edgePaths[i]}
          fill="none"
          stroke={i === activeIdx ? "url(#grad1)" : "#2c2c2c"}
          strokeWidth="2"
          strokeDasharray={i === activeIdx ? "8 2" : ""}
          strokeDashoffset={i === activeIdx ? dashOffset : 0}
          strokeLinecap="round"
          opacity={i === activeIdx ? 1 : 0.6}
          style={{ transition: "opacity 0.3s ease" }}
        />
      ))}
      
      {/* Draw nodes */}
      {nodes.map((node, i) => (
        <g key={`node-${i}`} transform={`translate(${node.x},${node.y})`}>
          <circle
            r="26"
            fill={i <= activeIdx ? "#0f172a" : "#1e1e1e"}
            stroke={i <= activeIdx ? "#3b82f6" : "#333"}
            strokeWidth="2"
            className={i <= activeIdx ? "animate-pulse" : ""}
          />
          <text
            textAnchor="middle"
            alignmentBaseline="middle"
            fill={i <= activeIdx ? "#fff" : "#aaa"}
            fontSize="9"
            fontWeight={i <= activeIdx ? "bold" : "normal"}
            style={{ transition: "all 0.3s ease" }}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

// Optimized FloatingParticlesBG with fewer particles and simplified animation
function FloatingParticlesBG() {
  const ref = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Fewer particles
    const colors = ["#3b82f6", "#fbbf24", "#22d3ee", "#f472b6"];
    const particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 1600,
      y: Math.random() * 400,
      r: 1.5 + Math.random() * 2,
      dx: -0.2 + Math.random() * 0.4,
      dy: -0.1 + Math.random() * 0.2,
      a: 0.12 + Math.random() * 0.22,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));
    
    let animationId: number;
    let lastTime = 0;
    
    // Using a non-null assertion since we've already checked
    const safeCtx = ctx!;
    
    function draw(timestamp: number) {
      // Throttle to ~30fps instead of 60fps
      if (timestamp - lastTime < 33) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      
      lastTime = timestamp;
      safeCtx.clearRect(0, 0, 1600, 400);
      
      for (const p of particles) {
        safeCtx.beginPath();
        safeCtx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        safeCtx.fillStyle = p.c + Math.floor(p.a * 255).toString(16).padStart(2, '0');
        safeCtx.shadowColor = p.c;
        safeCtx.shadowBlur = 10; // Reduced blur for better performance
        safeCtx.fill();
        
        p.x += p.dx;
        p.y += p.dy;
        
        if (p.x < 0) p.x = 1600;
        if (p.x > 1600) p.x = 0;
        if (p.y < 0) p.y = 400;
        if (p.y > 400) p.y = 0;
      }
      
      animationId = requestAnimationFrame(draw);
    }
    
    // Start animation
    animationId = requestAnimationFrame(draw);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="relative w-full h-auto overflow-hidden py-16">
      <canvas
        ref={ref}
        width={1600}
        height={400}
        className="w-full h-auto"
      />
    </div>
  );
}

// Lazy loading component wrapper
const LazyComponent = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  }>
    {children}
  </Suspense>
);

// Optimized main component with lazy loading
export default function OptimizedHomePage() {
  const [showBackground, setShowBackground] = useState(false);
  
  useEffect(() => {
    // Delay loading heavy background component
    const timer = setTimeout(() => setShowBackground(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  // Pre-load images
  useEffect(() => {
    const serviceImages = [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    ];
    
    serviceImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  const serviceData = [
    {
      text: "Web Development",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      desc: "Modern, scalable websites and web apps tailored to your business needs."
    },
    {
      text: "Mobile Apps",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      desc: "Cross-platform mobile applications for iOS and Android."
    },
    {
      text: "Cloud Solutions",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      desc: "Cloud migration, hosting, and scalable infrastructure setup."
    },
  ];
  
  return (
    <main className="bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 md:px-0 overflow-hidden">
        {showBackground && <Hero3DBackground />}
        <HeroShine />
        <div className="relative z-10 flex flex-col items-center justify-center w-full pt-16 pb-16">
          <Hero3DLogo />
          <div className="mb-4 text-xs tracking-widest text-neutral-200 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            NEW GEN AI AUTOMATION PARTNER
          </div>
          <h1 className="text-center font-extrabold text-4xl md:text-6xl leading-tight mb-2 text-neutral-200">
            <span className="block">Automate Smarter. Grow</span>
            <span className="block">Faster. <span className="italic font-serif text-neutral-300">With AI.</span></span>
          </h1>
          <div className="text-neutral-400 text-base md:text-lg mb-8 mt-2 text-center">
            AI Automation for Modern Businesses Made Simple
          </div>
          <a href="/contact" className="inline-block px-8 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-lg shadow transition border border-neutral-700 mb-8">
            Book A Free Call <span className="ml-2">↗</span>
          </a>
        </div>
      </section>
      
      {/* Process Section - Lazy loaded */}
      <section className="py-24 bg-neutral-950" id="process-section">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl font-extrabold mb-4">Our Process</h2>
            <p className="text-xl md:text-2xl font-normal text-white mt-2">
              Our <span className="text-red-700">Agile methodology</span> ensures every project is handled with precision and adaptability. By working in iterative cycles, we focus on continuous improvement, seamless collaboration, and timely delivery.
            </p>
          </div>
          <div className="w-full flex justify-center items-center bg-black/80 rounded-xl shadow-lg p-4 min-h-[440px]">
            <AnimatedProcessFlowSVG />
          </div>
        </div>
      </section>

      {/* Services Section - Only show top 3 services for better performance */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-extrabold mb-4 text-center">Our Services</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We offer a wide range of digital solutions to help your business thrive in the modern world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            {serviceData.map((service, idx) => (
              <CometCard key={service.text} className="w-full">
                <div className="relative w-full h-80 bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border border-neutral-700 rounded-2xl p-6 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={service.img} 
                      alt={service.text}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.text}
                      </h3>
                      <p className="text-neutral-300 text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <div className="text-2xl">
                          {idx === 0 && "🌐"}
                          {idx === 1 && "📱"}
                          {idx === 2 && "☁️"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CometCard>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services">
              <MovingBorderButton 
                size="lg"
                className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white cursor-pointer"
              >
                View All Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MovingBorderButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section - Lazy loaded */}
      <LazyComponent>
        <FeaturesSection />
      </LazyComponent>
      
      {/* Products Section - Only show top 3 products */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Our Products</h2>
          <p className="text-lg text-neutral-300">Explore our suite of innovative products designed to boost your business productivity.</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, idx) => (
              <div key={product.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt-reverse"></div>
                
                <div className="relative bg-neutral-900/90 border border-neutral-700 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <div className="text-lg">
                          {idx === 0 && "📊"}
                          {idx === 1 && "🤖"}
                          {idx === 2 && "🎵"}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/products">
              <MovingBorderButton 
                size="lg"
                className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white cursor-pointer"
              >
                View All Products
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MovingBorderButton>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials and Particles - Lazy loaded at the end */}
      <LazyComponent>
        <StaggerTestimonials />
      </LazyComponent>
      
      {/* Only load particles if all else is loaded */}
      {showBackground && (
        <LazyComponent>
          <FloatingParticlesBG />
        </LazyComponent>
      )}
    </main>
  );
}
