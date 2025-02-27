import React from "react";

const OfferingsSection = () => {
  return (
    <section id="offerings" className="bg-[#0a0b20] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16">
          OUR <span className="text-red-600">OFFERINGS</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 mb-16">
          {/* Design Card */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg relative overflow-hidden flex-1 group hover:border-4 hover:border-red-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
            <div className="p-8 flex flex-col h-full">
              {/* Number that transforms on hover */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-extrabold text-red-500 opacity-20 group-hover:opacity-0 group-hover:scale-0 transition-all duration-500">
                1
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                {/* Small number that appears */}
                <div className="text-6xl font-extrabold text-white mb-4">1</div>

                {/* Dot */}
                <div className="absolute left-8 top-20 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-red-500 mb-6">
                  Design
                </h3>

                {/* Content */}
                <div>
                  <div className="text-white text-sm mb-2">
                    User Experience (UX) Design
                  </div>
                  <div className="text-white text-sm mb-2">
                    User Interface (UI) Design
                  </div>
                  <div className="text-white text-sm mb-2">
                    Cloud Architecture Design
                  </div>
                  <div className="text-white text-sm mb-2">
                    Software Architecture Design
                  </div>
                  <div className="text-white text-sm mb-2">
                    Database & Security Design
                  </div>
                </div>
              </div>

              {/* Title that shows before hover */}
              <h3 className="text-2xl font-semibold text-red-500 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300">
                Design
              </h3>
            </div>
          </div>

          {/* Technology Card */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg relative overflow-hidden flex-1 group hover:border-4 hover:border-blue-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
            <div className="p-8 flex flex-col h-full">
              {/* Number that transforms on hover */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-extrabold text-blue-500 opacity-20 group-hover:opacity-0 group-hover:scale-0 transition-all duration-500">
                2
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                {/* Small number that appears */}
                <div className="text-6xl font-extrabold text-white mb-4">2</div>

                {/* Dot */}
                <div className="absolute left-8 top-20 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-blue-500 mb-6">
                  Technology
                </h3>

                {/* Content */}
                <div>
                  <div className="text-white text-sm mb-2">
                    Custom Software Development
                  </div>
                  <div className="text-white text-sm mb-2">
                    Software as a Service (SaaS)
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
              </div>

              {/* Title that shows before hover */}
              <h3 className="text-2xl font-semibold text-blue-500 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300">
                Technology
              </h3>
            </div>
          </div>

          {/* Business Card */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg relative overflow-hidden flex-1 group hover:border-4 hover:border-purple-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
            <div className="p-8 flex flex-col h-full">
              {/* Number that transforms on hover */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-extrabold text-purple-500 opacity-20 group-hover:opacity-0 group-hover:scale-0 transition-all duration-500">
                3
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                {/* Small number that appears */}
                <div className="text-6xl font-extrabold text-white mb-4">3</div>

                {/* Dot */}
                <div className="absolute left-8 top-20 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-purple-500 mb-6">
                  Business
                </h3>

                {/* Content */}
                <div>
                  <div className="text-white text-sm mb-2">
                    Business Intelligence and Analytics
                  </div>
                  <div className="text-white text-sm mb-2">
                    Business Process Automation
                  </div>
                  <div className="text-white text-sm mb-2">
                    IT Consulting and Advisory
                  </div>
                  <div className="text-white text-sm mb-2">
                    Workflow Automation
                  </div>
                  <div className="text-white text-sm mb-2">
                    Digital Transformation
                  </div>
                </div>
              </div>

              {/* Title that shows before hover */}
              <h3 className="text-2xl font-semibold text-purple-500 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300">
                Business
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
