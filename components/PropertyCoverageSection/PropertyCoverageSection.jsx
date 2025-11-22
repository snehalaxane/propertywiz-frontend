"use client";
import React from 'react';
import { motion } from "framer-motion";

// === INLINE SVG ICONS (Simulating Lucide Icons) ===

// Icon for Residential Plots & Layouts (Ruler/Measure)
const IconRuler = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z"></path><path d="M14 17h1"></path><path d="M14 13h1"></path><path d="M14 9h1"></path></svg>
);

// Icon for Apartments & Flats (Building)
const IconBuilding = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V5l8-3 8 3v17"></path><path d="M12 9v13"></path><path d="M7 11h10"></path><path d="M7 14h10"></path><path d="M7 17h10"></path></svg>
);

// Icon for Independent Houses & Villas (Home)
const IconHome = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);

// Icon for Commercial Properties (Briefcase)
const IconBriefcase = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

// Icon for Builder Floors & Duplexes (Multi-Unit)
const IconBlock = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="2" y="2" rx="1" ry="1"/><rect width="8" height="8" x="14" y="2" rx="1" ry="1"/><rect width="8" height="8" x="14" y="14" rx="1" ry="1"/><rect width="8" height="8" x="2" y="14" rx="1" ry="1"/></svg>
);

// Icon for Agricultural Land (Tree/Nature)
const IconTree = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16z"></path><path d="M12 22v-4"></path></svg>
);
// ===================================================

export default function PropertyCoverageSection() {
  const properties = [
    {
      icon: IconRuler,
      title: "Residential Plots & Layouts",
      description: "Verification of plot boundaries, layout approvals, and development permissions for vacant land purchases.",
      color: "blue",
    },
    {
      icon: IconBuilding,
      title: "Apartments & Flats",
      description: "Inspection of units in new or existing buildings, including common area assessment and builder credential verification.",
      color: "indigo",
    },
    {
      icon: IconHome,
      title: "Independent Houses & Villas",
      description: "Evaluation of standalone properties such as villas or bungalows, covering both structure and land title verification.",
      color: "purple",
    },
    {
      icon: IconBriefcase,
      title: "Commercial Properties",
      description: "Due diligence for commercial buildings, offices, and retail spaces focusing on zoning and usage compliance.",
      color: "teal",
    },
    {
      icon: IconBlock,
      title: "Builder Floors & Duplexes",
      description: "Assessment of multi-level units with emphasis on shared ownership structure, rights, and maintenance agreements.",
      color: "cyan",
    },
    {
      icon: IconTree,
      title: "Agricultural Land",
      description: "Expert verification including conversion feasibility and full regulatory compliance checks.",
      color: "green",
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return { text: 'text-blue-600', border: 'border-blue-600', shadow: 'shadow-blue-100', bg: 'bg-blue-50', hoverShadow: 'shadow-blue-300/50' };
      case 'indigo': return { text: 'text-indigo-600', border: 'border-indigo-600', shadow: 'shadow-indigo-100', bg: 'bg-indigo-50', hoverShadow: 'shadow-indigo-300/50' };
      case 'purple': return { text: 'text-purple-600', border: 'border-purple-600', shadow: 'shadow-purple-100', bg: 'bg-purple-50', hoverShadow: 'shadow-purple-300/50' };
      case 'teal': return { text: 'text-teal-600', border: 'border-teal-600', shadow: 'shadow-teal-100', bg: 'bg-teal-50', hoverShadow: 'shadow-teal-300/50' };
      case 'cyan': return { text: 'text-cyan-600', border: 'border-cyan-600', shadow: 'shadow-cyan-100', bg: 'bg-cyan-50', hoverShadow: 'shadow-cyan-300/50' };
      case 'green': return { text: 'text-green-600', border: 'border-green-600', shadow: 'shadow-green-100', bg: 'bg-green-50', hoverShadow: 'shadow-green-300/50' };
      default: return { text: 'text-gray-600', border: 'border-gray-600', shadow: 'shadow-gray-100', bg: 'bg-gray-50', hoverShadow: 'shadow-gray-300/50' };
    }
  };

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white font-inter">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Card - Unique Grid Break */}
        <motion.div
          className="lg:grid lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:col-span-1 p-6 sm:p-8 bg-gray-900 rounded-3xl text-white shadow-2xl shadow-gray-900/50 mb-8 lg:mb-0">
            <p className="text-xl font-semibold mb-2 text-blue-400">Coverage</p>
            <h2 className="text-xl font-extrabold leading-tight">
              All Property Types
            </h2>
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center text-left">
           <h3 className="text-4xl font-bold mb-2 leading-snug">
  <span className="text-blue-600">Our Expert Due Diligence</span>{" "}
  <span className="text-gray-900">is Comprehensive</span>
</h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you are acquiring a small residential plot, a high-rise apartment, or expanding your commercial portfolio, 
              our dedicated legal and technical teams are equipped to handle the unique complexities of every asset class.
            </p>
          </div>
        </motion.div>

        {/* Property Grid - 3 columns, clean professional style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, index) => {
            const Icon = prop.icon;
            const { text, border, shadow, bg, hoverShadow } = getColorClasses(prop.color);
            const delay = 0.2 + (index % 3) * 0.1; // Stagger effect across rows

            return (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-t-4 ${border} bg-white shadow-lg ${shadow} transition-all duration-300 cursor-pointer flex flex-col items-start`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: delay }}
                
                // === HOVER EFFECT ADDED HERE ===
                whileHover={{ y: -10, boxShadow: `0 20px 30px -10px ${hoverShadow.replace('shadow-', '').replace('/50', '')}` }}
              >
                <div className={`p-3 rounded-full ${bg} mb-4`}>
                    <Icon className={`w-8 h-8 ${text} stroke-2`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{prop.title}</h3>
                <p className="leading-relaxed text-gray-600">{prop.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}