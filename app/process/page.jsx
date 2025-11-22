"use client";
import { motion } from "framer-motion"; // Added motion import for future use, if needed

import {
  FaFileContract,
  FaBalanceScale,
  FaTools,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaClipboardCheck,
} from "react-icons/fa";

// Data structure for the process steps (using the provided data)
const processSteps = [
  {
    number: 1,
    icon: <FaFileContract />,
    title: "Document Collection",
    description:
      "We collect all available legal documents, government approvals, building plans, and complete ownership papers.",
  },
  {
    number: 2,
    icon: <FaBalanceScale />,
    title: "Legal Examination",
    description:
      "Deep forensic verification of title chain, Encumbrance Certificate (EC), prohibited land checks, and comprehensive court litigation search.",
  },
  {
    number: 3,
    icon: <FaTools />,
    title: "Technical Inspection",
    description:
      "Precise land measuring, structural quality audit, zoning compliance verification, and adherence to approved plans.",
  },
  {
    number: 4,
    icon: <FaMapMarkerAlt />,
    title: "Site Visit & Verification",
    description:
      "On-ground inspection of physical boundaries, road access, existing utility connections, and detailed observation of construction quality.",
  },
  {
    number: 5,
    icon: <FaShieldAlt />,
    title: "Comprehensive Risk Analysis",
    description:
      "Full risk scoring and mitigation planning based on legal and technical observations, ensuring all potential issues are clearly documented.",
  },
  {
    number: 6,
    icon: <FaClipboardCheck />,
    title: "Final Report Delivery",
    description:
      "You receive a detailed, easy-to-read due diligence report, including an executive summary, critical findings, and a final, clear verdict.",
  },
];

// Reusable Component for a single step in the timeline (UPDATED WITH HOVER EFFECTS)
function ProcessStep({ step, isLast }) {
  return (
    // Added 'group' class to the main flex container
    <div className="flex relative group">
      
      {/* Vertical Line and Connector Dot (Elements affected by group-hover) */}
      <div className="flex flex-col items-center mr-6">
        
        {/* Timeline Dot: Scales up and gets stronger shadow on hover */}
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-md flex-shrink-0 
                      transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-xl">
          {step.number}
        </div>
        
        {/* Vertical Line: Changes color on hover */}
        {!isLast && (
          <div className="h-full w-0.5 bg-gray-200 mt-2 mb-2 
                        transition-colors duration-300 group-hover:bg-blue-300">
          </div>
        )}
      </div>

      {/* Content Card (The Element that triggers the effect) */}
      <div className={`bg-white rounded-xl p-6 mb-8 shadow-lg w-full 
                      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-blue-500`}>
        <div className="flex items-start">
          
          {/* Icon: Slightly larger size and blue color maintained */}
          <div className="text-blue-600 text-3xl mr-4 flex-shrink-0">
            {step.icon}
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Services Component
export default function OurProcess() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* === Header Section === */}
        <header className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            <span className="text-black">Our 6-Step</span>{" "}
            <span className="text-blue-600">Audit Process</span>
          </h2>
          <p className="text-lg text-gray-600">
            A systematic journey to secure your property investment from start to finish.
          </p>
        </header>

        {/* === Process Timeline Grid === */}
        <div className="relative">
          <div className="w-full">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}