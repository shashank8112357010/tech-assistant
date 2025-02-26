"use client";

import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#111] text-white pt-12">
      {/* Behance Portfolio Banner */}
      <div className="bg-[#000E2F] text-center py-2 text-white text-sm font-semibold">
        <span className="text-red-500">Visit our Behance portfolio</span> and
        see our impactful solution
      </div>

      <div className="container mx-auto px-4 pb-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Company Info */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl font-bold">
              TECH<span className="text-red-500">ASSISTANT</span>
            </h2>
            <p className="text-gray-400 mt-2">
              "Smart Solutions for a Digital World."
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              At Creware Technologies, we're more than just an IT company; we're
              a creative hub where ideas take shape, igniting digital
              transformation for businesses worldwide where innovation and
              imagination converge to craft exceptional IT software solutions.
            </p>
          </div>

          {/* Address */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-gray-400 text-sm">RS III/12 TIKAIT</p>
            <p className="text-gray-400 text-sm">RAI LDA</p>
            <p className="text-gray-400 text-sm">COLONY, LUCKNOW</p>
          </div>

          {/* Services & Partners */}
          <div className="flex flex-wrap justify-center md:justify-start mt-6 md:mt-0 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>
                  <a href="#" className="hover:text-red-500">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Hire Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Partners</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>
                  <a href="#" className="hover:text-red-500">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-400 text-sm">techassistant@gmail.com</p>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fas fa-times"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollButton && (
        <button
          className="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-red-500 transition"
          onClick={scrollToTop}
        >
          <span>Back on top</span>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </footer>
  );
};

export default Footer;
