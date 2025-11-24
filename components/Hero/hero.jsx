// "use client";
// import { motion } from "framer-motion";
// import React from 'react';

// export default function HeroSection() {
//     // Fallback image source for the hero background
//     const heroImageUrl = "https://placehold.co/1920x1080/2C5282/ffffff?text=Modern+Real+Estate+Building";

//     // Split the main heading into two distinct, animated parts
//     const headingParts = [
//         { text: "Audit Your Property", start: { x: "-100vw", y: "-20vh", rotate: -5 } }, // Top-Left Start
//         { text: "Before You Invest", start: { x: "100vw", y: "20vh", rotate: 5 } },      // Bottom-Right Start
//     ];

//     // Variants for the converging text effect
//     const convergenceVariants = {
//         hidden: ({ x, y, rotate }) => ({
//             opacity: 0,
//             x: x, // Custom starting X position (e.g., "-100vw")
//             y: y, // Custom starting Y position (e.g., "-20vh")
//             scale: 0.8,
//             rotate: rotate,
//         }),
//         visible: {
//             opacity: 1,
//             x: 0, // Animate to center (final position)
//             y: 0,
//             scale: 1,
//             rotate: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 70, // Gives a slight bounce effect
//                 damping: 20,
//                 duration: 1.5,
//                 delay: 0.8, // Start slightly later than the subtitle
//             }
//         },
//     };

//     // Subtitle and Description animation (retains the smooth up-fade)
//     const subtitleVariants = {
//         hidden: { opacity: 0, y: 30 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
//     };

//     const descriptionVariants = {
//         hidden: { opacity: 0, y: 30 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
//     };

//     // CTA and Footer animation
//     const fadeUpVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.8 } }
//     };

//     return (
//         <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center
//                             bg-gray-900 overflow-hidden font-inter text-white">

//             {/* === BACKGROUND IMAGE WITH CINEMATIC PANNING EFFECT === */}
//             <motion.img
//                 src="/real-estate-hero.jpg"
//                 alt="Property Audit"
//                 // Ensure the image is wider than the container to allow panning
//                 className="absolute top-0 left-0 h-full w-[120vw] min-w-[1920px] object-cover"
//                 onError={(e) => { e.target.onerror = null; e.target.src = heroImageUrl; }}

//                 // Continuous Right-to-Left Panning Animation (Unique effect)
//                 animate={{ x: [0, -200] }}
//                 transition={{
//                     duration: 40,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     ease: "linear"
//                 }}
//             />

//             {/* Dark Overlay (More pronounced for contrast) */}
//             <div className="absolute inset-0 bg-gray-900/85"></div>

//             {/* === MAIN HERO CONTENT (Centered and responsive) === */}
//             <div className="relative z-10 text-center px-6 max-w-4xl py-20">

//                 {/* 1. Pre-Header Text */}
//                 <motion.p
//                     className="text-base md:text-lg mb-4 font-semibold tracking-widest uppercase text-blue-300"
//                     initial="hidden"
//                     animate="visible"
//                     variants={subtitleVariants}
//                 >
//                     360° Property Due Diligence
//                 </motion.p>

//                 {/* 2. CONVERGING MAIN HEADING CONTAINER */}
//                 <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-xl overflow-hidden h-40 md:h-48 flex flex-col justify-center items-center">

//                     {headingParts.map((part, index) => (
//                         // Each part is a separate motion element that animates from a corner
//                         <motion.span
//                             key={index}
//                             className="block" // Forces each part onto its own line
//                             custom={part.start} // Pass custom starting position
//                             initial="hidden"
//                             animate="visible"
//                             variants={convergenceVariants}
//                         >
//                             {part.text}
//                         </motion.span>
//                     ))}

//                 </h1>

//                 {/* 3. Description */}
//                 <motion.p
//                     className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-2xl mx-auto"
//                     initial="hidden"
//                     animate="visible"
//                     variants={descriptionVariants}
//                 >
//                     Identify hidden risks, verify legality, and get an unbiased audit report
//                     before making your biggest financial decision.
//                 </motion.p>

//                 {/* 4. CTA Buttons */}
//                 <motion.div
//                     className="flex flex-col sm:flex-row justify-center gap-4"
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeUpVariants}
//                 >
//                     {/* Primary CTA */}
//                     <motion.button
//                         whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(37, 99, 235, 0.6)" }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-bold rounded-full
//                                    shadow-2xl transition duration-300 active:scale-95 whitespace-nowrap"
//                     >
//                         Get a Property Audit
//                     </motion.button>

//                     {/* Secondary CTA */}
//                     <motion.button
//                         whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-white/10 px-8 py-4 text-lg font-semibold rounded-full
//                                    backdrop-blur-md border border-white/30 transition duration-300 active:scale-95 whitespace-nowrap"
//                     >
//                         Download Sample Report
//                     </motion.button>
//                 </motion.div>

//                 {/* 5. Footer Text */}
//                 <motion.p
//                     className="mt-8 text-sm text-gray-400 tracking-wider font-medium"
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeUpVariants} // Reusing fadeUp for footer
//                 >
//                     Trusted by home buyers, investors & NRI clients
//                 </motion.p>
//             </div>
//         </section>
//     );
// }

"use client";
import { motion } from "framer-motion";
import React from "react";

export default function HeroSection() {
  const heroImageUrl =
    "https://placehold.co/1920x1080/2C5282/ffffff?text=Modern+Real+Estate+Building";

  const headingParts = [
    {
      text: "Audit Your Property",
      start: { x: "-100vw", y: "-20vh", rotate: -5 },
    },
    { text: "Before You Invest", start: { x: "100vw", y: "20vh", rotate: 5 } },
  ];

  const convergenceVariants = {
    hidden: ({ x, y, rotate }) => ({
      opacity: 0,
      x,
      y,
      scale: 0.8,
      rotate,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 1.5,
        delay: 0.8,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 1.8 },
    },
  };

  return (
    <section
      className="
      relative w-full 
      h-[60vh] md:h-[calc(100vh-64px)]
      flex items-center justify-center 
      bg-gray-900 overflow-hidden text-white font-inter
      "
    >
      {/* BG IMAGE RESPONSIVE FIX */}
      <motion.img
        src="/real-estate-hero.jpg"
        alt="Property Audit"
        className="
          absolute top-0 left-0 
          h-full w-[200vw] md:w-[120vw] 
          min-w-[1200px] md:min-w-[1920px] 
          object-cover
        "
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = heroImageUrl;
        }}
        animate={{ x: [0, -200] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 bg-gray-900/85"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl py-16 md:py-20">
        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-4 font-semibold tracking-widest uppercase text-blue-300"
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          The 360° Property Health Check
        </motion.p>

        {/* HEADING RESPONSIVE FIX */}
        <h1
          className="
            text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
            font-extrabold leading-tight 
            mb-6 md:mb-8 drop-shadow-xl 
            overflow-hidden 
            h-28 sm:h-32 md:h-40 lg:h-48 
            flex flex-col justify-center items-center
          "
        >
          {headingParts.map((part, index) => (
            <motion.span
              key={index}
              className="block"
              custom={part.start}
              initial="hidden"
              animate="visible"
              variants={convergenceVariants}
            >
              {part.text}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          className="
            text-base sm:text-lg md:text-2xl 
            mb-8 md:mb-12 
            px-1 text-gray-200 font-light 
            max-w-xl md:max-w-2xl mx-auto
          "
          initial="hidden"
          animate="visible"
          variants={descriptionVariants}
        >
          Comprehensive Legal Verification + Technical Property Valuation. Buy
          with 100% confidence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(37, 99, 235, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              bg-blue-600 hover:bg-blue-700 
              px-6 sm:px-8 py-3 sm:py-4 
              text-base sm:text-lg font-bold 
              rounded-full shadow-2xl 
              transition duration-300 active:scale-95 
              whitespace-nowrap
            "
          >
            Get a Property Audit
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              bg-white/10 
              px-6 sm:px-8 py-3 sm:py-4 
              text-base sm:text-lg font-semibold 
              rounded-full backdrop-blur-md 
              border border-white/30 
              transition duration-300 active:scale-95 whitespace-nowrap
            "
          >
            Download Sample Report
          </motion.button>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          className="mt-6 md:mt-8 text-xs sm:text-sm text-gray-400 tracking-wider font-medium"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          Trusted by home buyers, investors & NRI clients
        </motion.p>
      </div>
    </section>
  );
}
