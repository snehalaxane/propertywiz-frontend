"use client";
import React from 'react';
import { motion } from "framer-motion";

// === INLINE SVG ICON DEFINITIONS (Replaces lucide-react) ===
const IconClipboardCheck = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path><path d="m9 14 2 2 4-4"></path></svg>
);
const IconSearchCheck = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 11 2 2 4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
);
const IconFileCheck2 = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3"></path><path d="M14 2v6h6"></path><path d="m3 15 2 2 4-4"></path></svg>
);
// ==========================================================

const stepsData = [
  {
    icon: <IconClipboardCheck className="w-8 h-8 text-blue-600" />,
    title: "1. Consultation & Kick-off",
    desc: "You share initial property details and any available documents from the seller. We provide a transparent quote, clear timelines, and explain our full methodology.",
  },
  {
    icon: <IconSearchCheck className="w-8 h-8 text-blue-600" />,
    title: "2. Investigation & Analysis",
    desc: "Our legal and technical teams perform deep investigation: government office searches, registry checks, and detailed on-site inspections. Typically 7–10 working days.",
  },
  {
    icon: <IconFileCheck2 className="w-8 h-8 text-blue-600" />,
    title: "3. Report Delivery & Review",
    desc: "You receive a comprehensive final report followed by a consultation call. We explain findings, legal/technical risks, and answer all your questions.",
  },
];

// Helper component for each step card
const StepCard = ({ index, title, desc, icon }) => {
  const isLast = index === stepsData.length - 1;

  // Animation variants for entering the viewport
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      className="relative"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      
      // === HOVER EFFECT ADDED HERE ===
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      // =================================
    >
      <div className="flex items-start md:space-x-6">
        
        {/* Step Connector (Mobile/Vertical) */}
        <div className="flex flex-col items-center mr-4 md:mr-0 md:hidden">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold shadow-lg flex-shrink-0">
            {index + 1}
          </div>
          {!isLast && (
            <div className="h-full w-0.5 bg-blue-300 border-l border-dashed border-blue-400 mt-2 flex-grow"></div>
          )}
        </div>
        
        {/* Card Content */}
        <div className={`bg-white p-8 rounded-3xl w-full shadow-xl border border-gray-100 mb-8 md:mb-0 
                        transition-transform duration-300 hover:shadow-2xl hover:border-blue-300`}>
          
          {/* Icon and Number (Desktop/Horizontal) */}
          <div className="hidden md:flex items-center justify-start mb-4">
            <div className="p-3 rounded-xl bg-blue-100 inline-block shadow-inner">
              {icon}
            </div>
              {/* Added a space/divider line for the desktop version */}
              <div className='w-4 h-px bg-gray-200 mx-4'></div> 
             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold flex-shrink-0 shadow-md">
                {index + 1}
              </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
            {title.split('. ')[1] || title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base">{desc}</p>
        </div>
      </div>
      
      {/* Step Connector (Desktop/Horizontal) */}
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-1/2 px-6">
          {/* Replaced complex SVG with simple dashed line and arrow tip */}
          <div className='relative flex items-center h-px bg-blue-300 border-t border-dashed border-blue-400'>
            <div className='absolute right-0 w-3 h-3 border-t-2 border-r-2 border-blue-600 transform rotate-45 translate-x-1/2'></div>
          </div>
        </div>
      )}
    </motion.div>
  );
};


export default function AuditProcessSection() {
  return (
    <section className="w-full py-20 px-4 md:px-6 bg-gray-50 font-inter"> {/* Changed background to light gray for contrast */}
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-base font-semibold text-blue-600 tracking-wider uppercase mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR METHODOLOGY
          </motion.h2>
          <motion.h1
  className="text-4xl md:text-4xl font-bold tracking-tight"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  <span className="text-gray-900">A Simple, Transparent</span>{" "}
  <span className="text-blue-600">Verification Process</span>
</motion.h1>


          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We have streamlined property due diligence into three straightforward phases,
            ensuring you stay informed every step of the way.
          </motion.p>
        </div>

        {/* Steps Grid (Desktop) */}
        <div className="hidden md:grid md:grid-cols-[1fr_20px_1fr_20px_1fr] lg:grid-cols-[1fr_30px_1fr_30px_1fr] gap-x-0 relative items-center">
            {stepsData.map((step, index) => (
                <React.Fragment key={index}>
                    <StepCard
                        index={index}
                        title={step.title}
                        desc={step.desc}
                        icon={step.icon}
                    />
                    {/* Horizontal Connector Element for Desktop */}
                    {!step.isLast && index < stepsData.length - 1 && (
                      <div className="hidden md:flex flex-col items-center justify-center h-full">
                        <div className='relative w-full h-px bg-blue-300 border-t border-dashed border-blue-400'>
                           <div className='absolute right-0 w-3 h-3 border-t-2 border-r-2 border-blue-600 transform rotate-45 translate-x-1/2 -translate-y-1/2'></div>
                        </div>
                      </div>
                    )}
                </React.Fragment>
            ))}
        </div>
        
        {/* Steps Grid (Mobile/Vertical Stack) */}
        <div className="md:hidden flex flex-col items-stretch space-y-0">
           {stepsData.map((step, index) => (
            <StepCard
              key={index}
              index={index}
              title={step.title}
              desc={step.desc}
              icon={step.icon}
            />
          ))}
        </div>

        {/* Added CTA button for completeness */}
        {/* <div className="mt-16 text-center">
            <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/50"
            >
                Start Your Due Diligence
            </motion.button>
        </div> */}
      </div>
    </section>
  );
}