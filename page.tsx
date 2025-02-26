import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCircle from "@/components/hero-circle";
import MobileMenu from "@/components/mobile-menu";
import TechSection from "@/components/TechSection";
import Footer from "@/components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0f2e] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold">
            TECH
            <span className="relative">
              <span className="absolute text-red-600 -top-1 left-1.5">▲</span>
            </span>
            SSISTANT
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="#hire"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            HIRE TEAM
          </Link>
          <Link
            href="#careers"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            CAREERS
          </Link>
          <Link
            href="#blogs"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            BLOGS
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-red-500 transition-colors"
          >
            CONTACT US
          </Link>
        </nav>
        <MobileMenu />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <HeroCircle />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold italic">
            "DREAMS INTO <span className="text-red-600">REALITY</span>"
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Transforming visionary ideas into cutting-edge digital solutions, we
            bridge the gap between dreams and reality with innovation and
            technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {/* <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="bg-[#0a0b20] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            ABOUT <span className="text-red-600">US</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Who We Are</h3>
              <p className="text-gray-300 mb-4">
                Tech Assistant is a leading software development company
                dedicated to transforming businesses through innovative
                technology solutions. With a team of expert developers,
                designers, and strategists, we deliver cutting-edge digital
                products that drive growth and efficiency.
              </p>
              <p className="text-gray-300">
                Founded in 2015, we've helped hundreds of businesses across
                various industries achieve their digital transformation goals.
                Our client-centric approach ensures that we deliver solutions
                that not only meet but exceed expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#161735] p-6 rounded-lg">
                <h4 className="text-red-600 text-4xl font-bold mb-2">200+</h4>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-[#161735] p-6 rounded-lg">
                <h4 className="text-red-600 text-4xl font-bold mb-2">50+</h4>
                <p className="text-sm text-gray-300">Expert Team Members</p>
              </div>
              <div className="bg-[#161735] p-6 rounded-lg">
                <h4 className="text-red-600 text-4xl font-bold mb-2">98%</h4>
                <p className="text-sm text-gray-300">Client Satisfaction</p>
              </div>
              <div className="bg-[#161735] p-6 rounded-lg">
                <h4 className="text-red-600 text-4xl font-bold mb-2">10+</h4>
                <p className="text-sm text-gray-300">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section id="services" className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          OUR <span className="text-red-600">SERVICES</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              We cover anything from web development to mobile app solutions.
            </h3>
          </div>
          <div>
            <p className="text-gray-300">
              We offer a wide range of IT software services, enabling businesses
              to thrive in the digital age. From custom software development to
              cloud solutions, we drive innovation and efficiency. Discover your
              digital potential with us.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Custom Software Development"
            description="Tailored solutions designed to meet your specific business needs and challenges."
            icon="💻"
          />
          <ServiceCard
            title="Mobile App Development"
            description="Native and cross-platform mobile applications for iOS and Android devices."
            icon="📱"
          />
          <ServiceCard
            title="Web Development"
            description="Responsive, user-friendly websites and web applications with modern technologies."
            icon="🌐"
          />
          <ServiceCard
            title="UI/UX Design"
            description="Intuitive, engaging user interfaces and experiences that delight your customers."
            icon="🎨"
          />
          <ServiceCard
            title="Cloud Solutions"
            description="Scalable, secure cloud infrastructure and migration services."
            icon="☁️"
          />
          <ServiceCard
            title="DevOps"
            description="Streamlined development operations for faster, more reliable software delivery."
            icon="⚙️"
          />
          <ServiceCard
            title="AI & Machine Learning"
            description="Intelligent solutions that leverage data to drive business insights and automation."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Comprehensive security solutions to protect your digital assets and data."
            icon="🔒"
          />
        </div>
      </section> */}
      <section id="services" className="bg-[#0B0D21] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-6">
            <span className="text-white text-3xl font-bold">OUR</span>{" "}
            <span className="text-red-600 text-3xl font-bold">SERVICES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
            <div className="pr-4">
              <p className="text-white text-sm md:text-base">
                We cover anything from web development to mobile app solutions.
              </p>
            </div>
            <div className="pl-4">
              <p className="text-white text-sm md:text-base">
                We offer a wide range of IT software services, enabling
                businesses to thrive in the digital age. From custom software
                development to cloud solutions, we drive innovation and
                efficiency. Discover your digital potential with Creware.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mobile App Development */}
            <div className="bg-[#0B1154] border border-blue-900 rounded p-6">
              <div className="text-red-600 mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    y="2"
                    width="14"
                    height="20"
                    rx="2"
                    stroke="#FF0000"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="18" r="1" fill="#FF0000" />
                  <rect x="8" y="5" width="3" height="3" fill="#FF0000" />
                  <rect x="13" y="5" width="3" height="3" fill="#FF0000" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                Mobile App Development
              </h3>
              <p className="text-white text-sm">
                Elevate your online presence with our tailored web app
                solutions, uniquely crafted to enhance your brand's digital
                performance.
              </p>
            </div>

            {/* Web App Development */}
            <div className="bg-[#0B1154] border border-blue-900 rounded p-6">
              <div className="text-red-600 mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#FF0000"
                    strokeWidth="2"
                  />
                  <rect x="8" y="8" width="3" height="3" fill="#FF0000" />
                  <rect x="13" y="8" width="3" height="3" fill="#FF0000" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                Web App Development
              </h3>
              <p className="text-white text-sm">
                Elevate your online presence with our tailored web app
                solutions, uniquely crafted to enhance your brand's digital
                performance.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="bg-[#0B1154] border border-blue-900 rounded p-6">
              <div className="text-red-600 mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#FF0000"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 12L10 15L17 8"
                    stroke="#FF0000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                Quality Assurance
              </h3>
              <p className="text-white text-sm">
                Elevate your online presence with our tailored web app
                solutions, uniquely crafted to enhance your brand's digital
                performance.
              </p>
            </div>

            {/* IT Software and Security */}
            <div className="bg-[#0B1154] border border-blue-900 rounded p-6">
              <div className="text-red-600 mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z"
                    stroke="#FF0000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                IT Software and Security
              </h3>
              <p className="text-white text-sm">
                Elevate your online presence with our tailored web app
                solutions, uniquely crafted to enhance your brand's digital
                performance.
              </p>
            </div>

            {/* Enterprise Software Development */}
            <div className="bg-[#0B1154] border border-blue-900 rounded p-6">
              <div className="text-red-600 mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#FF0000"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 8H16M8 12H16M8 16H16"
                    stroke="#FF0000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                Enterprise Software Development
              </h3>
              <p className="text-white text-sm">
                Elevate your online presence with our tailored web app
                solutions, uniquely crafted to enhance your brand's digital
                performance.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-[#0B1154] border border-blue-900 rounded p-6">
              <div className="text-red-600 mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#FF0000"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8V16M8 12H16"
                    stroke="#FF0000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                UI/UX Design
              </h3>
              <p className="text-white text-sm">
                Elevate your online presence with our tailored web app
                solutions, uniquely crafted to enhance your brand's digital
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="bg-[#0B0D21] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">
            <span className="text-white text-3xl font-bold">WHY </span>
            <span className="text-red-600 text-3xl font-bold">CHOOSE US</span>
            <span className="text-white text-3xl font-bold"> ?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Agile Development Methodology */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 20H65M15 28H55M15 36H65M15 44H45M15 52H65M15 60H50"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M25 20H35M35 28H45M45 36H55M25 44H35M45 52H55M35 60H45"
                    stroke="red"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Agile Development Methodology
              </h3>
              <p className="text-sm text-gray-300">
                Our IT solutions are created considering customer-centric
                approach, that guarantees software solutions precisely aligned
                with your business goals, enhancing your online presence and
                digital capabilities.
              </p>
            </div>

            {/* Customer Centric Approach */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="20"
                    y="20"
                    width="40"
                    height="40"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="40" cy="40" r="5" fill="red" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Customer Centric Approach
              </h3>
              <p className="text-sm text-gray-300">
                Our IT solutions are created considering customer-centric
                approach, that guarantees software solutions precisely aligned
                with your business goals, enhancing your online presence and
                digital capabilities.
              </p>
            </div>

            {/* Innovation, Research & Development */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 60V20M30 60L20 50M30 60L40 50"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M50 20V60" stroke="red" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Innovation, Research & Development
              </h3>
              <p className="text-sm text-gray-300">
                Our IT solutions are created considering customer-centric
                approach, that guarantees software solutions precisely aligned
                with your business goals, enhancing your online presence and
                digital capabilities.
              </p>
            </div>

            {/* Technology & Talent */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="20"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="40" cy="20" r="5" fill="white" />
                  <circle cx="60" cy="40" r="5" fill="white" />
                  <circle cx="40" cy="60" r="5" fill="white" />
                  <circle cx="20" cy="40" r="5" fill="white" />
                  <path
                    d="M20 40L40 20M40 20L60 40M60 40L40 60M40 60L20 40"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Technology & Talent</h3>
              <p className="text-sm text-gray-300">
                Our IT solutions are created considering customer-centric
                approach, that guarantees software solutions precisely aligned
                with your business goals, enhancing your online presence and
                digital capabilities.
              </p>
            </div>

            {/* Return on Investment (ROI) */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="20"
                    y="30"
                    width="40"
                    height="30"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 50L30 45L40 35L50 40L60 30"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M40 20L40 30" stroke="white" strokeWidth="2" />
                  <circle cx="40" cy="20" r="5" fill="red" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Return on Investment (ROI)
              </h3>
              <p className="text-sm text-gray-300">
                Our IT solutions are created considering customer-centric
                approach, that guarantees software solutions precisely aligned
                with your business goals, enhancing your online presence and
                digital capabilities.
              </p>
            </div>

            {/* Scalability & Smoother Integration */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="20"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="55"
                    cy="25"
                    r="10"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="55" cy="25" r="3" fill="red" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Scalability & Smoother Integration
              </h3>
              <p className="text-sm text-gray-300">
                Our IT solutions are created considering customer-centric
                approach, that guarantees software solutions precisely aligned
                with your business goals, enhancing your online presence and
                digital capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="offerings" className="bg-[#0a0b20] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            OUR <span className="text-red-600">OFFERINGS</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 mb-16">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg relative overflow-hidden flex-1 group hover:border-2 hover:border-red-600 transition-all duration-300">
              <div className="p-8 flex flex-col h-full">
                <div className="text-6xl font-bold text-white mb-4">1</div>
                <div className="absolute left-8 top-20 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                </div>
                <h3 className="text-2xl font-bold text-red-500 mb-6">Design</h3>
                <div className="hidden group-hover:block">
                  <div className="text-white text-sm mb-2">
                    User Experience(UX) Design
                  </div>
                  <div className="text-white text-sm mb-2">
                    User Interface(UI) Design
                  </div>
                  <div className="text-white text-sm mb-2">
                    Cloud architecture design
                  </div>
                  <div className="text-white text-sm mb-2">
                    Software architecture design
                  </div>
                  <div className="text-white text-sm mb-2">
                    Database & security design
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  <div className="text-9xl font-bold text-red-500">1</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg relative overflow-hidden flex-1 group hover:border-2 hover:border-red-600 transition-all duration-300">
              <div className="p-8 flex flex-col h-full">
                <div className="text-6xl font-bold text-white mb-4">2</div>
                <div className="absolute left-8 top-20 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                </div>
                <h3 className="text-2xl font-bold text-blue-500 mb-6">
                  Technology
                </h3>
                <div className="hidden group-hover:block">
                  <div className="text-white text-sm mb-2">
                    Custom Software Development
                  </div>
                  <div className="text-white text-sm mb-2">
                    Software as a service(SaaS)
                  </div>
                  <div className="text-white text-sm mb-2">
                    ERP, CRM & CMS Systems
                  </div>
                  <div className="text-white text-sm mb-2">
                    DevOps and CI/CD
                  </div>
                  <div className="text-white text-sm mb-2">
                    Support and Maintenance
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  <div className="text-9xl font-bold text-blue-500">2</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg relative overflow-hidden flex-1 group hover:border-2 hover:border-red-600 transition-all duration-300">
              <div className="p-8 flex flex-col h-full">
                <div className="text-6xl font-bold text-white mb-4">3</div>
                <div className="absolute left-8 top-20 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                </div>
                <h3 className="text-2xl font-bold text-purple-500 mb-6">
                  Business
                </h3>
                <div className="hidden group-hover:block">
                  <div className="text-white text-sm mb-2">
                    Business Intelligence and analytics
                  </div>
                  <div className="text-white text-sm mb-2">
                    Business process automation
                  </div>
                  <div className="text-white text-sm mb-2">
                    IT Consulting and advisory
                  </div>
                  <div className="text-white text-sm mb-2">
                    Workflow automation
                  </div>
                  <div className="text-white text-sm mb-2">
                    Digital Transformation
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  <div className="text-9xl font-bold text-purple-500">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Clients Section */}
      <section className="bg-[#0a0b20] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            OUR <span className="text-red-600">Clients</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Client Testimonial 1 */}
            <div className="border border-blue-900 rounded-lg p-6 bg-blue-900 bg-opacity-20">
              <p className="text-white">
                "They are an amazing team to work with. I will continue working
                with them because they met all my expectations. Their
                professionalism and quality of work are truly impressive."
              </p>
            </div>

            {/* Client Testimonial 2 */}
            <div className="border border-blue-900 rounded-lg p-6 bg-blue-900 bg-opacity-20">
              <p className="text-white">
                "They are an amazing team to work with. I will continue working
                with them because they met all my expectations. Their
                professionalism and quality of work are truly impressive."
              </p>
            </div>

            {/* Client Testimonial 3 */}
            <div className="border border-blue-900 rounded-lg p-6 bg-blue-900 bg-opacity-20">
              <p className="text-white">
                "They are an amazing team to work with. I will continue working
                with them because they met all my expectations. Their
                professionalism and quality of work are truly impressive."
              </p>
            </div>

            {/* Client Testimonial 4 */}
            <div className="border border-blue-900 rounded-lg p-6 bg-blue-900 bg-opacity-20">
              <p className="text-white">
                "They are an amazing team to work with. I will continue working
                with them because they met all my expectations. Their
                professionalism and quality of work are truly impressive."
              </p>
            </div>
          </div>

          {/* <div className="text-center mt-16">
            <h2 className="text-3xl font-bold">
              Numbers Speak{" "}
              <span className="text-red-600">Louder Than Words</span>
            </h2>
          </div> */}
        </div>
      </section>

      {/* Numbers Section with Stats */}
      <section className="bg-[#0a0b20] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Numbers Speak{" "}
            <span className="text-red-600">Louder Than Words</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {/* Coffee Cups Counter */}
            <div className="relative">
              <div className="bg-gray-800 p-4 rounded-md relative">
                <div className="absolute -top-2 -right-2 transform rotate-12">
                  <span className="text-red-600 text-xs font-bold">
                    TECH ASSIST
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-center text-white">
                  "0""5""5"
                </h3>
                <p className="text-center text-white text-sm mt-2">
                  COFFEE CUPS
                </p>
              </div>
            </div>

            {/* Projects Counter */}
            <div className="relative">
              <div className="bg-gray-800 p-4 rounded-md relative">
                <div className="absolute -top-2 -right-2 transform rotate-12">
                  <span className="text-red-600 text-xs font-bold">
                    TECH ASSIST
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-center text-white">
                  "1""2""0"
                </h3>
                <p className="text-center text-white text-sm mt-2">PROJECTS</p>
              </div>
            </div>

            {/* Offices Counter */}
            <div className="relative">
              <div className="bg-gray-800 p-4 rounded-md relative">
                <div className="absolute -top-2 -right-2 transform rotate-12">
                  <span className="text-red-600 text-xs font-bold">
                    TECH ASSIST
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-center text-white">
                  "0""0""1"
                </h3>
                <p className="text-center text-white text-sm mt-2">OFFICES</p>
              </div>
            </div>

            {/* Clients Counter */}
            <div className="relative">
              <div className="bg-gray-800 p-4 rounded-md relative">
                <div className="absolute -top-2 -right-2 transform rotate-12">
                  <span className="text-red-600 text-xs font-bold">
                    TECH ASSIST
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-center text-white">
                  "1""0""0"
                </h3>
                <p className="text-center text-white text-sm mt-2">CLIENTS</p>
              </div>
            </div>
          </div>

          {/* TESTIMONIALS Title */}
          <h2 className="text-4xl font-bold text-center mb-8">TESTIMONIALS</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Testimonial Card 1 */}
            <div className="relative pb-8">
              <div className="bg-purple-900 bg-opacity-80 p-4 rounded-t-lg">
                <p className="text-white text-xs">
                  "They have excellent English and communication skills. They
                  worked very efficiently and kept me informed about the website
                  redesign at every step. I will use them for all my web work
                  from now on. Their prices are also very reasonable."
                </p>
              </div>
              <div className="bg-purple-900 bg-opacity-80 clip-path-triangle h-12 w-full"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16">
                      <img
                        src="/public/testimonial.jpeg"
                        alt="Testimonial Avatar"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="relative pb-8">
              <div className="bg-purple-900 bg-opacity-80 p-4 rounded-t-lg">
                <p className="text-white text-xs">
                  "They have excellent English and communication skills. They
                  worked very efficiently and kept me informed about the website
                  redesign at every step. I will use them for all my web work
                  from now on. Their prices are also very reasonable."
                </p>
              </div>
              <div className="bg-purple-900 bg-opacity-80 clip-path-triangle h-12 w-full"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16">
                      <img
                        src="/api/placeholder/64/64"
                        alt="Testimonial Avatar"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="relative pb-8">
              <div className="bg-purple-900 bg-opacity-80 p-4 rounded-t-lg">
                <p className="text-white text-xs">
                  "They have excellent English and communication skills. They
                  worked very efficiently and kept me informed about the website
                  redesign at every step. I will use them for all my web work
                  from now on. Their prices are also very reasonable."
                </p>
              </div>
              <div className="bg-purple-900 bg-opacity-80 clip-path-triangle h-12 w-full"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16">
                      <img
                        src="/api/placeholder/64/64"
                        alt="Testimonial Avatar"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 4 */}
            <div className="relative pb-8">
              <div className="bg-purple-900 bg-opacity-80 p-4 rounded-t-lg">
                <p className="text-white text-xs">
                  "They have excellent English and communication skills. They
                  worked very efficiently and kept me informed about the website
                  redesign at every step. I will use them for all my web work
                  from now on. Their prices are also very reasonable."
                </p>
              </div>
              <div className="bg-purple-900 bg-opacity-80 clip-path-triangle h-12 w-full"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16">
                      <img
                        src="/api/placeholder/64/64"
                        alt="Testimonial Avatar"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .clip-path-triangle {
          clip-path: polygon(50% 100%, 0 0, 100% 0);
        }
      `}</style>

      {/* Tech Section */}
      <TechSection />

      <Footer />
      {/* Footer */}
      <footer className="bg-[#080919] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center mb-6">
                <div className="text-2xl font-bold">
                  TECH
                  <span className="relative">
                    A
                    <span className="absolute text-red-600 -top-1 left-1.5">
                      ▲
                    </span>
                  </span>
                  SSISTANT
                </div>
              </Link>
              <p className="text-gray-400 mb-6">
                Transforming visionary ideas into cutting-edge digital
                solutions.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#161735] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#161735] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#161735] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#161735] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Cloud Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#careers"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blogs"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-[#161735] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                />
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Tech Assistant. All rights
                reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-red-500 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-red-500 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-red-500 transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
