"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import Link from "next/link";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { CometCard } from "@/components/ui/comet-card";
import ProductsHero from "../products-hero";

// Lazy load heavy components
const StaggerTestimonials = lazy(() => import("@/components/ui/testmonals").then(mod => ({ default: mod.StaggerTestimonials })));
const FeaturesSection = lazy(() => import("@/components/ui/Features").then(mod => ({ default: mod.FeaturesSection })));

const products = [
  {
    image: "/home/image_1.jpg",
    name: "Marketingpro",
   url: "marketingpro.mk55.in",
    desc: "A comprehensive marketing automation suite to streamline campaigns, track analytics, and boost ROI.",
  },
  {
    image: "/home/image_2.jpg",
    name: "Aimindflow",
     url: "Aimindflow.mk55.in",
    desc: "Transform your business operations with intelligent, AI-powered workflow automation.  and enables real-time data-driven decision-making. ",
  },
  {
    image: "/home/image_3.jpg",
    name: "Samvaani",
     url: "samvaani.com",
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
    const interval = setInterval(() => {
      setActiveIdx((idx) => (idx + 1) % nodes.length);
      setDashOffset(400);
    }, 1400);
    return () => clearInterval(interval);
  }, [nodes.length]);
  // Animate the line drawing
  useEffect(() => {
    if (activeIdx < edges.length) {
      let raf: number;
      let offset = 400;
      function animate() {
        offset -= 16;
        if (offset < 0) offset = 0;
        setDashOffset(offset);
        if (offset > 0) raf = requestAnimationFrame(animate);
      }
      animate();
      return () => {
        if (raf) cancelAnimationFrame(raf);
      };
    }
  }, [activeIdx]);
  function getPath(i1: number, i2: number) {
    const n1 = nodes[i1], n2 = nodes[i2];
    const dx = n2.x - n1.x, dy = n2.y - n1.y;
    const mx = n1.x + dx / 2, my = n1.y + dy / 2;
    return `M${n1.x},${n1.y} Q${mx},${my - 60} ${n2.x},${n2.y}`;
  }
  return (
    <svg viewBox="0 0 760 440" className="w-full h-full max-w-full max-h-full">
      <defs>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
      {/* Subtle background gradient */}
      <rect x="0" y="0" width="760" height="440" fill="url(#node-glow)" opacity="0.08" />
      {/* Edges */}
      {edges.map(([from, to], i) => (
        <path
          key={i}
          d={getPath(from, to)}
          stroke="url(#line-gradient)"
          strokeWidth={3}
          fill="none"
          opacity={i < activeIdx ? 0.5 : 0.18}
          style={{ filter: i < activeIdx ? "drop-shadow(0 0 6px #e11d48)" : undefined, transition: 'opacity 0.5s' }}
        />
      ))}
      {/* Animated active edge */}
      {activeIdx < edges.length && (
        <path
          d={getPath(edges[activeIdx][0], edges[activeIdx][1])}
          stroke="url(#line-gradient)"
          strokeWidth={4}
          fill="none"
          opacity={1}
          style={{
            filter: "drop-shadow(0 0 10px #e11d48)",
            strokeDasharray: 400,
            strokeDashoffset: dashOffset,
            transition: 'stroke-dashoffset 0.3s',
          }}
        />
      )}
      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          {/* Glow pulse for active node */}
          {i === activeIdx && (
            <circle
              cx={node.x}
              cy={node.y}
              r={32}
              fill="url(#node-glow)"
              opacity={0.5}
            >
              <animate attributeName="r" values="32;38;32" dur="1.2s" repeatCount="indefinite" />
            </circle>
          )}
          <circle
            cx={node.x}
            cy={node.y}
            r={i === activeIdx ? 20 : 14}
            fill={i === activeIdx ? "#e11d48" : "#fff"}
            stroke="#e11d48"
            strokeWidth={i === activeIdx ? 5 : 3}
            style={{ filter: i === activeIdx ? "drop-shadow(0 0 16px #e11d48)" : undefined, transition: 'all 0.3s' }}
          />
          {/* Step number */}
          <text
            x={node.x}
            y={node.y + 6}
            textAnchor="middle"
            fontSize={i === activeIdx ? 18 : 15}
            fontWeight={700}
            fill={i === activeIdx ? "#fff" : "#e11d48"}
            style={{ pointerEvents: 'none', transition: 'all 0.3s' }}
          >
            {i + 1}
          </text>
          {/* Label */}
          <text
            x={node.x}
            y={node.y - 32}
            textAnchor="middle"
            fontSize={i === 0 || i === nodes.length - 1 ? 18 : 17}
            fontWeight={i === activeIdx ? 800 : 500}
            fill={i === activeIdx ? "#e11d48" : (i === 0 || i === nodes.length - 1 ? "#e11d48" : "#FFF")}
            style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: 0.2,
              filter: i === activeIdx ? "drop-shadow(0 0 8px #e11d48)" : undefined,
              transition: 'all 0.3s',
            }}
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
      "image_4.jpg",
      "image_5.jpg",
      "image_6.jpg",
    ];

    serviceImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const serviceData = [
    {
      text: "Web Development",
      img: "/home/image_4.jpg",
      desc: "Modern, scalable websites and web apps tailored to your business needs."
    },
    {
      text: "Mobile Apps",
      img: "/home/image_5.jpg",
      desc: "Cross-platform mobile applications for iOS and Android."
    },
    {
      text: "Cloud Solutions",
      img: "/home/image_6.jpg",
      desc: "Cloud migration, hosting, and scalable infrastructure setup."
    },
  ];

  return (
    <main className="bg-neutral-950 text-white">
      {/* Hero Section */}
      {/* <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 md:px-0 overflow-hidden">
        {showBackground && <Hero3DBackground />}
        <HeroShine />
        <div className="relative z-10 flex flex-col items-center justify-center w-full pt-16 pb-16">
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
      </section> */}
      <ProductsHero
        badge="NEW GEN AI AUTOMATION PARTNER"
        heading="AI Integration Services for Business Automation"
        subheading="We build and integrate custom AI agents and automation workflows to boost your efficiency and drive growth."
        buttonText="Book A Free Call"

      />

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
          <p className="text-lg text-neutral-300">
            Explore our suite of innovative products designed to boost your business productivity.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, idx) => (
              <Link key={product.name} href={product.url}>
                <div className="relative group cursor-pointer">
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
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/products">
              <MovingBorderButton
                size="lg"
                className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white cursor-pointer"
              >
                View All Products
     
              </MovingBorderButton>
            </Link>
          </div>
        </div>
      </section>


      {/* Testimonials and Particles - Lazy loaded at the end */}
      <LazyComponent>
        <StaggerTestimonials />
      </LazyComponent>


    </main>
  );
}
