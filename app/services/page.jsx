// // pages/services.jsx
// import { FaBalanceScale, FaTools, FaSearch, FaMapMarkedAlt, FaCity, FaDatabase } from "react-icons/fa";

// export default function Services() {
//   return (
//     <section className="bg-gray-50 text-gray-900">
//       {/* Hero Section */}
//       <div className="relative bg-white  text-black py-20 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Services</h1>
//         <p className="max-w-2xl mx-auto text-lg opacity-90">
//           We offer complete 360° Property Due Diligence covering legal, technical, and regulatory verification.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div className="max-w-7xl mx-auto py-16 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {/* Service Card */}
//         <ServiceCard
//           icon={<FaBalanceScale />}
//           title="Legal Verification"
//           description="Full forensic verification of titles, encumbrance, revenue records, approvals & litigation checks."
//         />
//         <ServiceCard
//           icon={<FaTools />}
//           title="Technical Verification"
//           description="Complete inspection of structure, quality, measurements, systems, and compliance with approved plans."
//         />
//         <ServiceCard
//           icon={<FaSearch />}
//           title="Encumbrance & Court Search"
//           description="Deep search for mortgages, loans, court cases, NOCs, and any hidden restrictions."
//         />
//         <ServiceCard
//           icon={<FaMapMarkedAlt />}
//           title="Land Classification Check"
//           description="Identify prohibited categories like forest land, assigned land, GO 111, or govt. acquisition zones."
//         />
//         <ServiceCard
//           icon={<FaCity />}
//           title="Zoning & Master Plan Audit"
//           description="Ensure land use matches zoning—Residential, Commercial, FTL, buffer zones & future road widening."
//         />
//         <ServiceCard
//           icon={<FaDatabase />}
//           title="Government Records Verification"
//           description="Cross-check all municipal and registration data for authenticity and compliance."
//         />
//       </div>

//     </section>
//   );
// }

// // Reusable Service Card Component
// function ServiceCard({ icon, title, description }) {
//   return (
//     <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
//       <div className="text-indigo-600 text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }


// pages/services.jsx
// import {
//   FaBalanceScale,
//   FaTools,
//   FaSearch,
//   FaMapMarkedAlt,
//   FaCity,
//   FaDatabase,
// } from "react-icons/fa";

// export default function Services() {
//   return (
//     <section className="bg-gray-50 text-gray-900">
//       {/* Hero Section */}
//       <div className="relative bg-white text-black py-24 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
//           Our Expert Services
//         </h1>
//         <p className="max-w-2xl mx-auto text-lg opacity-90">
//           We offer complete 360° Property Due Diligence covering legal,
//           technical, and regulatory verification.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div className="max-w-7xl mx-auto py-20 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         <ServiceCard
//           icon={<FaBalanceScale />}
//           title="Legal Verification"
//           description="Full forensic verification of titles, encumbrance, revenue records, approvals & litigation checks."
//         />
//         <ServiceCard
//           icon={<FaTools />}
//           title="Technical Verification"
//           description="Complete inspection of structure, quality, measurements, systems, and compliance with approved plans."
//         />
//         <ServiceCard
//           icon={<FaSearch />}
//           title="Encumbrance & Court Search"
//           description="Deep search for mortgages, loans, court cases, NOCs, and any hidden restrictions."
//         />
//         <ServiceCard
//           icon={<FaMapMarkedAlt />}
//           title="Land Classification Check"
//           description="Identify prohibited categories like forest land, assigned land, GO 111, or govt. acquisition zones."
//         />
//         <ServiceCard
//           icon={<FaCity />}
//           title="Zoning & Master Plan Audit"
//           description="Ensure land use matches zoning—Residential, Commercial, FTL, buffer zones & future road widening."
//         />
//         <ServiceCard
//           icon={<FaDatabase />}
//           title="Government Records Verification"
//           description="Cross-check all municipal and registration data for authenticity and compliance."
//         />
//       </div>

      
//     </section>
//   );
// }

// // Reusable Service Card Component
// function ServiceCard({ icon, title, description }) {
//   return (
//     <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
//       <div className="text-indigo-600 text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-3">{title}</h3>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   );
// }



// import {
//   FaBalanceScale,
//   FaTools,
//   FaSearch,
//   FaMapMarkedAlt,
//   FaCity,
//   FaDatabase,
// } from "react-icons/fa";

// // Reusable Service Card Component (Updated: Icon size reduced back to original)
// function ServiceCard({ icon, title, description }) {
//   return (
//     // Card Container: Lighter shadow, more rounded, and stronger hover lift
//     <div className="bg-white border border-gray-50/50 rounded-3xl shadow-lg p-8 h-full flex flex-col 
//                     transition duration-500 ease-in-out transform hover:shadow-2xl hover:scale-[1.02] hover:ring-4 hover:ring-blue-100">
      
//       {/* Icon Styling: Using a subtle gradient and smaller size */}
//       <div className="text-white bg-gradient-to-br from-blue-600 to-blue-400 p-4 rounded-full inline-flex items-center justify-center text-3xl mb-6 shadow-xl">
//         {icon}
//       </div>
      
//       {/* Title with slightly larger, bolder font */}
//       <h3 className="text-2xl font-extrabold text-gray-900 mb-2 leading-snug">{title}</h3>
      
//       {/* Visual Separator/Accent Line */}
//       <div className="w-12 h-1 bg-blue-600 mb-4 rounded-full opacity-75"></div>

//       {/* Description text color and size */}
//       <p className="text-gray-600 text-base flex-grow leading-relaxed">{description}</p>
//     </div>
//   );
// }

// export default function Services() {
//   return (
//     // Set the entire section to a clean white background
//     <section className="bg-gray-50 text-gray-900 min-h-screen py-20"> 
      
//       {/* Hero Section (Content Reduced) */}
//       <div className="relative text-gray-900 pt-10 pb-16 px-6 text-center overflow-hidden">
//         {/* Background texture remains */}
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
//         {/* Simplified Hero Content */}
//         <div className="relative z-10 max-w-4xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold mb-4 leading-tight">
//             <span className="text-gray-900">Our</span> <span className="text-blue-600">Expert Services</span>
//           </h1>
//         </div>
        
//       </div>

//       {/* Services Grid (Main content remains) */}
//       <div id="services-grid" className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        
//         {/* Adjust grid for better balance on medium screens */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           <ServiceCard
//             icon={<FaBalanceScale />}
//             title="Legal Verification"
//             description="Full forensic verification of titles, encumbrance, revenue records, government approvals, and litigation checks."
//           />
//           <ServiceCard
//             icon={<FaTools />}
//             title="Technical Verification"
//             description="Complete inspection of structure, material quality, measurements, systems, and compliance with approved building plans."
//           />
//           <ServiceCard
//             icon={<FaSearch />}
//             title="Encumbrance & Court Search"
//             description="In-depth search for mortgages, bank loans, court cases, non-objection certificates (NOCs), and any hidden restrictions."
//           />
//           <ServiceCard
//             icon={<FaMapMarkedAlt />}
//             title="Land Classification Check"
//             description="Identify prohibited categories like forest land, assigned land, protected zones (e.g., GO 111), or government acquisition zones."
//           />
//           <ServiceCard
//             icon={<FaCity />}
//             title="Zoning & Master Plan Audit"
//             description="Ensure land use matches municipal zoning (Residential, Commercial, Industrial), FTL/buffer zones, and future road widening."
//           />
//           <ServiceCard
//             icon={<FaDatabase />}
//             title="Government Records Verification"
//             description="Systematic cross-check of all municipal, registration, and revenue data for authenticity, consistency, and regulatory compliance."
//           />
//         </div>
//       </div>
      
//     </section>
//   );
// }


// "use client";

// import {
//   FaBalanceScale,
//   FaTools,
//   FaSearch,
//   FaMapMarkedAlt,
//   FaCity,
//   FaDatabase,
// } from "react-icons/fa";

// // Reusable Service Card Component (UPDATED ICON & ALIGNMENT)
// function ServiceCard({ icon, title, description }) {
//   return (
//     // Card Container: Strong hover lift remains
//     <div className="bg-white border border-gray-50/50 rounded-3xl shadow-lg p-8 h-full flex flex-col 
//                    transition duration-500 ease-in-out transform hover:shadow-2xl hover:scale-[1.02] hover:ring-4 hover:ring-blue-100">
      
//       {/* Title & Icon Group: Flex container for inline alignment */}
//       <div className="flex items-center mb-4"> 
        
//         {/* Icon Styling: No box/ring, just pure blue, slightly smaller (text-xl) */}
//         <div className="text-blue-600 text-xl mr-3"> 
//           {icon}
//         </div>
        
//         {/* Title: Adjusted spacing */}
//         <h3 className="text-2xl font-extrabold text-gray-900 leading-snug">{title}</h3>
//       </div>
      
//       {/* Visual Separator/Accent Line */}
//       <div className="w-12 h-1 bg-blue-600 mb-4 ml-8 rounded-full opacity-75"></div>

//       {/* Description text color and size (ml-8 aligns description under the title, not the icon) */}
//       <p className="text-gray-600 text-base flex-grow leading-relaxed ml-8">{description}</p>
//     </div>
//   );
// }

// export default function Services() {
//   return (
//     // Set the entire section to a clean white background
//     <section className="bg-gray-50 text-gray-900 min-h-screen py-20"> 
      
//       {/* Hero Section */}
//       <div className="relative text-gray-900 pt-10 pb-16 px-6 text-center overflow-hidden">
//         {/* Background texture remains */}
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
//         {/* Simplified Hero Content */}
//         <div className="relative z-10 max-w-4xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold mb-4 leading-tight">
//             <span className="text-gray-900">Our</span> <span className="text-blue-600">Expert Services</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             A meticulous approach to safeguard your investment, covering every legal, technical, and regulatory detail.
//           </p>
//         </div>
        
//       </div>

//       {/* Services Grid */}
//       <div id="services-grid" className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           <ServiceCard
//             icon={<FaBalanceScale />}
//             title="Legal Verification"
//             description="Full forensic verification of titles, encumbrance, revenue records, government approvals, and litigation checks."
//           />
//           <ServiceCard
//             icon={<FaTools />}
//             title="Technical Verification"
//             description="Complete inspection of structure, material quality, measurements, systems, and compliance with approved building plans."
//           />
//           <ServiceCard
//             icon={<FaSearch />}
//             title="Encumbrance & Court Search"
//             description="In-depth search for mortgages, bank loans, court cases, non-objection certificates (NOCs), and any hidden restrictions."
//           />
//           <ServiceCard
//             icon={<FaMapMarkedAlt />}
//             title="Land Classification Check"
//             description="Identify prohibited categories like forest land, assigned land, protected zones (e.g., GO 111), or government acquisition zones."
//           />
//           <ServiceCard
//             icon={<FaCity />}
//             title="Zoning & Master Plan Audit"
//             description="Ensure land use matches municipal zoning (Residential, Commercial, Industrial), FTL/buffer zones, and future road widening."
//           />
//           <ServiceCard
//             icon={<FaDatabase />}
//             title="Government Records Verification"
//             description="Systematic cross-check of all municipal, registration, and revenue data for authenticity, consistency, and regulatory compliance."
//           />
//         </div>
//       </div>
      
//     </section>
//   );
// }



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