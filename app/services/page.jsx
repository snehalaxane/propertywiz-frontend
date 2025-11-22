"use client";
import {
  FaBalanceScale,
  FaTools,
  FaSearch,
  FaMapMarkedAlt,
  FaCity,
  FaDatabase,
} from "react-icons/fa";

// Reusable Service Card Component (UPDATED HOVER EFFECT)
function ServiceCard({ icon, title, description }) {
  return (
    // Card Container: Added 'group' class to enable group-hover utilities
    <div className="group bg-white border border-gray-50/50 rounded-3xl shadow-lg p-8 h-full flex flex-col 
                   transition duration-500 ease-in-out transform hover:shadow-2xl hover:scale-[1.02] hover:ring-4 hover:ring-blue-100">
      
      {/* Title & Icon Group */}
      <div className="flex items-center mb-4"> 
        
        {/* Icon Styling: No box/ring, just pure blue, slightly smaller (text-xl) */}
        <div className="text-blue-600 text-xl mr-3"> 
          {icon}
        </div>
        
        {/* Title: Adjusted spacing */}
        <h3 className="text-2xl font-extrabold text-gray-900 leading-snug">{title}</h3>
      </div>
      
      {/* Visual Separator/Accent Line (UPDATED FOR HOVER EFFECT) */}
      <div className="h-1 bg-blue-600 mb-4 ml-8 rounded-full opacity-75 
                  transition-all duration-300 ease-in-out 
                  w-0 group-hover:w-12"> {/* Initial width is w-0, expands to w-12 on hover */}
      </div>

      {/* Description text color and size */}
      <p className="text-gray-600 text-base flex-grow leading-relaxed ml-8">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="bg-gray-50 text-gray-900 min-h-screen py-20"> 
      
      {/* Hero Section */}
      <div className="relative text-gray-900 pt-10 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold mb-4 leading-tight">
            <span className="text-gray-900">Our</span> <span className="text-blue-600">Expert Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A meticulous approach to safeguard your investment, covering every legal, technical, and regulatory detail.
          </p>
        </div>
        
      </div>

      {/* Services Grid */}
      <div id="services-grid" className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<FaBalanceScale />}
            title="Legal Verification"
            description="Full forensic verification of titles, encumbrance, revenue records, government approvals, and litigation checks."
          />
          <ServiceCard
            icon={<FaTools />}
            title="Technical Verification"
            description="Complete inspection of structure, material quality, measurements, systems, and compliance with approved building plans."
          />
          <ServiceCard
            icon={<FaSearch />}
            title="Encumbrance & Court Search"
            description="In-depth search for mortgages, bank loans, court cases, non-objection certificates (NOCs), and any hidden restrictions."
          />
          <ServiceCard
            icon={<FaMapMarkedAlt />}
            title="Land Classification Check"
            description="Identify prohibited categories like forest land, assigned land, protected zones (e.g., GO 111), or government acquisition zones."
          />
          <ServiceCard
            icon={<FaCity />}
            title="Zoning & Master Plan Audit"
            description="Ensure land use matches municipal zoning (Residential, Commercial, Industrial), FTL/buffer zones, and future road widening."
          />
          <ServiceCard
            icon={<FaDatabase />}
            title="Government Records Verification"
            description="Systematic cross-check of all municipal, registration, and revenue data for authenticity, consistency, and regulatory compliance."
          />
        </div>
      </div>
      
    </section>
  );
}