import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCircle from "@/components/hero-circle";
import MobileMenu from "@/components/mobile-menu";
import TechSection from "@/components/TechSection";
import Footer from "@/components/footer-section";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0f2e] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold">
            <Image
              src="tech.png"
              alt="Tech Assistant Logo"
              width={200}
              height={60}
              className="mb-4"
            />
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
        </div>
      </section>
      {/* Numbers Section with Stats */}
      <section className="bg-[#070b29] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <img src="tech02.png" alt="Test" className="w-110 h-100" />

          {/* TESTIMONIALS Title */}
          <h2 className="text-4xl font-bold text-center mb-12 text-white uppercase">
            TESTIMONIALS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Testimonial Card 1 */}
            <div className="relative">
              {/* Testimonial Avatar - Positioned at the top */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-16 h-16 bg-purple-900 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="image 34.png"
                    alt="Testimonial Avatar"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="bg-purple-900 p-4 pb-12 rounded-t-lg rounded-b-xl relative z-10 mt-8">
                <p className="text-white text-xs">
                  "They have excellent English and communication skills. They
                  worked very efficiently and kept me informed about the website
                  redesign at every step. I will use them for all my web work
                  from now on. Their prices are also very reasonable."
                </p>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="relative">
              {/* Testimonial Avatar - Positioned at the top */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-16 h-16 bg-purple-900 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="image 34.png"
                    alt="Testimonial Avatar"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="bg-purple-900 p-4 pb-12 rounded-t-lg rounded-b-xl relative z-10 mt-8">
                <p className="text-white text-xs">
                  "They have excellent English and communication skills. They
                  worked very efficiently and kept me informed about the website
                  redesign at every step. I will use them for all my web work
                  from now on. Their prices are also very reasonable."
                </p>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="relative">
              {/* Testimonial Avatar - Positioned at the top */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-16 h-16 bg-purple-900 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="image 34.png"
                    alt="Testimonial Avatar"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="bg-purple-900 p-4 pb-12 rounded-t-lg rounded-b-xl relative z-10 mt-8">
                <p className="text-white text-xs">
                  "They have excellent English and communication skills. They
                  worked very efficiently and kept me informed about the website
                  redesign at every step. I will use them for all my web work
                  from now on. Their prices are also very reasonable."
                </p>
              </div>
            </div>

            {/* Testimonial Card 4 */}
            <div className="relative">
              {/* Testimonial Avatar - Positioned at the top */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-16 h-16 bg-purple-900 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="image 34.png"
                    alt="Testimonial Avatar"
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <div className="bg-purple-900 p-4 pb-12 rounded-t-lg rounded-b-xl relative z-10 mt-8">
                <p className="text-white text-xs">
                  "They have excellent English and communication skills. They
                  worked very efficiently and kept me informed about the website
                  redesign at every step. I will use them for all my web work
                  from now on. Their prices are also very reasonable."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <TechSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
