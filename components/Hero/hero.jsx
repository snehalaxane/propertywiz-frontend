// // components/FuturisticShowcase.tsx
// export default function FuturisticShowcase() {
//   return (
//     <section className="relative h-[80vh] bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] text-white flex flex-col items-center justify-center px-6 overflow-hidden">
//       <div className="text-center space-y-4 z-10">
//         <p className="text-lg uppercase tracking-widest text-pink-300">Palm Springs, CA</p>
//         <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-purple-500">
//           Futuristic Haven
//         </h2>
//         <div className="mt-8 flex gap-4 justify-center flex-wrap">
//           <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition">
//             Get in touch
//           </button>
//           <button className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition">
//             View Details
//           </button>
//         </div>
//       </div>

//       {/* Optional: Add a blurred architectural background image */}
//       <div className="absolute inset-0 z-0 opacity-20 bg-[url('/your-image.jpg')] bg-cover bg-center blur-sm"></div>
//     </section>
//   );
// }


// // components/HeroSection.tsx
// export default function HeroSection() {
//   return (
//     <section className="relative h-[90vh] text-white bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] overflow-hidden flex flex-col items-center justify-center px-6 text-center">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0 opacity-30 bg-[url('/futuristic-building.jpg')] bg-cover bg-center blur-sm"></div>

//       {/* Content */}
//       <div className="relative z-10 space-y-4">
//         <p className="text-lg uppercase tracking-widest text-pink-300">Palm Springs, CA</p>
//         <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-purple-500">
//           Futuristic Haven
//         </h1>
//         <div className="mt-8 flex gap-4 justify-center flex-wrap">
//           <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition">
//             Get in touch
//           </button>
//           <button className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition">
//             View Details
//           </button>
//         </div>
//       </div>

//       {/* Floating CTA */}
//       <div className="absolute bottom-6 right-6 z-10">
//         <button className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
//           Get This Template
//         </button>
//       </div>
//     </section>
//   );
// }



// components/HeroSection.tsx
// export default function HeroSection() {
//   return (
//     <section className="relative h-[90vh] flex items-center justify-center text-white">

//       {/* Background Image */}
//       <div className="absolute inset-0 bg-[url('/luxury-villa.jpg')] bg-cover bg-center"></div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-3xl space-y-6">
//         <p className="text-lg uppercase tracking-widest text-yellow-300">
//           Premium Real Estate
//         </p>

//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//           Find Your Dream Home With <span className="text-blue-400">PropertyWiz</span>
//         </h1>

//         <p className="text-lg text-gray-200">
//           Explore luxury properties, premium rentals, and smart investment opportunities.
//         </p>

//         {/* Search Bar */}
//         <div className="mt-6 bg-white/10 border border-white/20 backdrop-blur-xl p-4 rounded-xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="City / Location"
//             className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none w-full"
//           />
//           <input
//             type="text"
//             placeholder="Budget (₹)"
//             className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none w-full"
//           />
//           <select className="px-4 py-3 rounded-md bg-white/20 text-white focus:outline-none w-full">
//             <option value="">Property Type</option>
//             <option>Apartment</option>
//             <option>Villa</option>
//             <option>Commercial</option>
//           </select>

//           <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium">
//             Search
//           </button>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex gap-4 justify-center mt-4">
//           <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold">
//             Explore Listings
//           </button>
//           <button className="px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-full font-semibold">
//             Schedule Visit
//           </button>
//         </div>
//       </div>

//       {/* Floating CTA button (optional) */}
//       <div className="absolute bottom-6 right-6 z-10">
//         <button className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
//           Get This Template
//         </button>
//       </div>
//     </section>
//   );
// }


// components/HeroSection.tsx
// export default function HeroSection() {
//   return (
//     <section className="relative h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 gap-10">

//       {/* Left Content */}
//       <div className="flex flex-col text-left space-y-4 max-w-lg z-10">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
//           Find Your Perfect Home
//         </h1>

//         <p className="text-gray-600 dark:text-gray-300 text-lg">
//           Explore luxury properties with smart features tailored for modern living.
//         </p>

//         <div className="flex gap-4 mt-4">
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
//             Explore Listings
//           </button>
//           <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition">
//             Contact Us
//           </button>
//         </div>
//       </div>

//       {/* Floating Image */}
//       <div className="relative w-full max-w-xl">
//         <img
//           src="/real-estate-hero.jpg"
//           alt="Luxury Home"
//           className="rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
//         />

//         {/* Floating effect */}
//         <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.25)] animate-float"></div>
//       </div>

//       {/* Floating animation */}
//       <style>{`
//         @keyframes float {
//           0%   { transform: translateY(0px); }
//           50%  { transform: translateY(-12px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>

//     </section>
//   );
// }


// components/HeroSection.tsx
// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      
//       {/* Floating Full-Width Image */}
//       <img
//         src="/real-estate-hero.jpg"
//         alt="Real Estate"
//         className="w-full max-w-full h-auto object-cover animate-float rounded-3xl shadow-2xl"
//       />

//       {/* Floating Animation */}
//       <style>{`
//         @keyframes float {
//           0%   { transform: translateY(0); }
//           50%  { transform: translateY(-20px); }
//           100% { transform: translateY(0); }
//         }
//         .animate-float {
//           animation: float 5s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }



// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">

//       {/* Background Image */}
//       <img
//         src="/real-estate-hero.jpg"
//         alt="Real Estate"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-3xl">
        
//         {/* Tagline */}
//         <p className="text-lg md:text-xl mb-4 font-light tracking-wide">
//           Find Your Perfect Home
//         </p>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//           Discover Your Dream Property Today
//         </h1>

//         {/* CTA Button */}
//         <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition">
//           Explore Properties
//         </button>

//         {/* Search Box (optional) */}
//         <div className="mt-10 bg-white/20 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Location"
//             className="w-full px-4 py-3 rounded-lg bg-white/80 text-black focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Budget"
//             className="w-full px-4 py-3 rounded-lg bg-white/80 text-black focus:outline-none"
//           />
//           <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white font-medium">
//             Search
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }


// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">

//       {/* Background Image — NOT REMOVED */}
//       <img
//         src="/real-estate-hero.jpg"
//         alt="Building Audit"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-3xl">

//         {/* Tagline */}
//         <p className="text-lg md:text-xl mb-4 font-light tracking-wide">
//           Professional Building Inspection & Compliance
//         </p>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//           Ensure Your Building Is Safe, Secure & Fully Audited
//         </h1>

//         {/* CTA Button */}
//         <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition">
//           Get Your Audit Report
//         </button>

//         {/* Search Box → converted to audit queries */}
//         <div className="mt-10 bg-white/20 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Building Name / Type"
//             className="w-full px-4 py-3 rounded-lg bg-white/80 text-black focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="City / Location"
//             className="w-full px-4 py-3 rounded-lg bg-white/80 text-black focus:outline-none"
//           />
//           <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white font-medium">
//             Request Audit
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
      
//       {/* Background Image with floating animation */}
//       <motion.img
//         src="/real-estate-hero.jpg"
//         alt="Property Audit"
//         className="absolute inset-0 w-full h-full object-cover"
//         animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-3xl">
//         <p className="text-lg md:text-xl mb-3 font-light tracking-wider text-blue-300">
//           360° Property Due Diligence
//         </p>

//         <motion.h1
//           className="text-4xl md:text-6xl font-bold leading-tight mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Audit Your Property Before You Invest
//         </motion.h1>

//         <motion.p
//           className="text-lg md:text-xl mb-8 text-gray-200"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           Identify hidden risks, verify legality, and get an unbiased audit report 
//           before making your biggest financial decision.
//         </motion.p>

//         <motion.div
//           className="flex flex-col md:flex-row justify-center gap-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//         >
//           <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition transform hover:scale-105">
//             Get a Property Audit
//           </button>

//           <button className="bg-white/20 hover:bg-white/30 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-lg border border-white/40 transition transform hover:scale-105">
//             Download Sample Report
//           </button>
//         </motion.div>

//         <motion.p
//           className="mt-6 text-sm text-gray-300 tracking-wider"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.9 }}
//         >
//           Trusted by home buyers, investors & NRI clients
//         </motion.p>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import React from 'react';

// export default function HeroSection() {
//     // Fallback image source for the hero background
//     const heroImageUrl = "https://placehold.co/1920x1080/2C5282/ffffff?text=Modern+Real+Estate+Building";

//     return (
//         // Changed h-[90vh] to h-[calc(100vh-80px)] (assuming 80px header height) 
//         // to ensure it fills the space below your external header, and added relative position
//         <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center text-white overflow-hidden font-inter">
            
//             {/* Background Image with floating animation */}
//             <motion.img
//                 src="/real-estate-hero.jpg"
//                 alt="Property Audit"
//                 className="absolute inset-0 w-full h-full object-cover"
//                 onError={(e) => { e.target.onerror = null; e.target.src = heroImageUrl; }}
//                 animate={{ scale: [1, 1.03, 1], y: [0, -8, 0] }}
//                 transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* Dark Overlay with Gradient Fade */}
//             <div className="absolute inset-0 bg-gray-900/80"></div>
//             {/* Bottom Gradient Fade to anchor the content to the next section */}
//             <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-gray-50 via-gray-900/10 to-transparent"></div>
            
//             {/* === MAIN HERO CONTENT (Centered) === */}
//             <div className="relative z-10 text-center px-6 max-w-3xl pt-16 pb-32">
//                 <p className="text-lg md:text-xl mb-4 font-medium tracking-widest uppercase text-blue-400">
//                     360° Property Due Diligence
//                 </p>

//                 <motion.h1
//                     className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 drop-shadow-lg"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                 >
//                     Audit Your Property Before You Invest
//                 </motion.h1>

//                 <motion.p
//                     className="text-lg md:text-xl mb-10 text-gray-200 font-light max-w-xl mx-auto"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//                 >
//                     Identify hidden risks, verify legality, and get an unbiased audit report 
//                     before making your biggest financial decision.
//                 </motion.p>

//                 <motion.div
//                     className="flex flex-col sm:flex-row justify-center gap-4"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.6 }}
//                 >
//                     {/* Primary CTA: Solid, bold */}
//                     <motion.button 
//                         whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(37, 99, 235, 0.5)" }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-bold rounded-full shadow-xl transition duration-300"
//                     >
//                         Get a Property Audit
//                     </motion.button>

//                     {/* Secondary CTA: Transparent, professional */}
//                     <motion.button 
//                         whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-white/10 px-8 py-4 text-lg font-semibold rounded-full 
//                                    backdrop-blur-md border border-white/30 transition duration-300"
//                     >
//                         Download Sample Report
//                     </motion.button>
//                 </motion.div>

//                 <motion.p
//                     className="mt-6 text-sm text-gray-300 tracking-wider font-medium"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.8, delay: 0.9 }}
//                 >
//                     Trusted by home buyers, investors & NRI clients
//                 </motion.p>
//             </div>
//         </section>
//     );
// }

// "use client";
// import { motion } from "framer-motion";
// import React from 'react';

// export default function HeroSection() {
//     // Fallback image source for the hero background
//     const heroImageUrl = "https://placehold.co/1920x1080/2C5282/ffffff?text=Modern+Real+Estate+Building";

//     return (
//         // Set height dynamically (e.g., using a smaller calculation for the viewport height)
//         // Adjusting h-[calc(100vh-64px)] assuming your header height is 64px (h-16) for a clean look.
//         <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center text-white overflow-hidden font-inter">
            
//             {/* Background Image with smooth floating animation */}
//             <motion.img
//                 src="/real-estate-hero.jpg"
//                 alt="Property Audit"
//                 className="absolute inset-0 w-full h-full object-cover"
//                 onError={(e) => { e.target.onerror = null; e.target.src = heroImageUrl; }}
//                 animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }} // Increased movement slightly for visual interest
//                 transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* Dark Overlay (More pronounced for contrast) */}
//             <div className="absolute inset-0 bg-gray-900/85"></div>
//             {/* Bottom Gradient Fade (Subtle fade to white/light gray of next section) */}
//             <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-gray-50/10 via-gray-900/50 to-transparent"></div>
            
//             {/* === MAIN HERO CONTENT (Centered and responsive) === */}
//             <div className="relative z-10 text-center px-6 max-w-4xl py-20"> {/* Increased max-width */}
                
//                 {/* Pre-Header Text */}
//                 <p className="text-base md:text-lg mb-4 font-semibold tracking-widest uppercase text-blue-300">
//                     360° Property Due Diligence
//                 </p>

//                 <motion.h1
//                     // Title: Ultra-bold for max impact
//                     className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-xl"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.9, ease: "easeOut" }}
//                 >
//                     Audit Your Property Before You Invest
//                 </motion.h1>

//                 <motion.p
//                     className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-2xl mx-auto"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
//                 >
//                     Identify hidden risks, verify legality, and get an unbiased audit report 
//                     before making your biggest financial decision.
//                 </motion.p>

//                 <motion.div
//                     className="flex flex-col sm:flex-row justify-center gap-4"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.9, delay: 0.6 }}
//                 >
//                     {/* Primary CTA (Matched Header Button Style) */}
//                     <motion.button 
//                         whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(37, 99, 235, 0.6)" }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-bold rounded-full 
//                                    shadow-2xl transition duration-300 active:scale-95 whitespace-nowrap"
//                     >
//                         Get a Property Audit
//                     </motion.button>

//                     {/* Secondary CTA (Matched Header Button Style) */}
//                     <motion.button 
//                         whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-white/10 px-8 py-4 text-lg font-semibold rounded-full 
//                                    backdrop-blur-md border border-white/30 transition duration-300 active:scale-95 whitespace-nowrap"
//                     >
//                         Download Sample Report
//                     </motion.button>
//                 </motion.div>

//                 <motion.p
//                     className="mt-8 text-sm text-gray-300 tracking-wider font-medium"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.9, delay: 0.9 }}
//                 >
//                     Trusted by home buyers, investors & NRI clients
//                 </motion.p>
//             </div>
//         </section>
//     );
// }

"use client";
import { motion } from "framer-motion";
import React from 'react';

export default function HeroSection() {
    // Fallback image source for the hero background
    const heroImageUrl = "https://placehold.co/1920x1080/2C5282/ffffff?text=Modern+Real+Estate+Building";
    
    // Split the main heading into two distinct, animated parts
    const headingParts = [
        { text: "Audit Your Property", start: { x: "-100vw", y: "-20vh", rotate: -5 } }, // Top-Left Start
        { text: "Before You Invest", start: { x: "100vw", y: "20vh", rotate: 5 } },      // Bottom-Right Start
    ];

    // Variants for the converging text effect
    const convergenceVariants = {
        hidden: ({ x, y, rotate }) => ({
            opacity: 0,
            x: x, // Custom starting X position (e.g., "-100vw")
            y: y, // Custom starting Y position (e.g., "-20vh")
            scale: 0.8,
            rotate: rotate,
        }),
        visible: {
            opacity: 1,
            x: 0, // Animate to center (final position)
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 70, // Gives a slight bounce effect
                damping: 20,
                duration: 1.5,
                delay: 0.8, // Start slightly later than the subtitle
            }
        },
    };

    // Subtitle and Description animation (retains the smooth up-fade)
    const subtitleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
    };
    
    // CTA and Footer animation
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.8 } }
    };


    return (
        <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center 
                            bg-gray-900 overflow-hidden font-inter text-white">
            
            {/* === BACKGROUND IMAGE WITH CINEMATIC PANNING EFFECT === */}
            <motion.img
                src="/real-estate-hero.jpg"
                alt="Property Audit"
                // Ensure the image is wider than the container to allow panning
                className="absolute top-0 left-0 h-full w-[120vw] min-w-[1920px] object-cover" 
                onError={(e) => { e.target.onerror = null; e.target.src = heroImageUrl; }}
                
                // Continuous Right-to-Left Panning Animation (Unique effect)
                animate={{ x: [0, -200] }}
                transition={{ 
                    duration: 40, 
                    repeat: Infinity,
                    repeatType: "reverse", 
                    ease: "linear" 
                }}
            />

            {/* Dark Overlay (More pronounced for contrast) */}
            <div className="absolute inset-0 bg-gray-900/85"></div>
            
            {/* === MAIN HERO CONTENT (Centered and responsive) === */}
            <div className="relative z-10 text-center px-6 max-w-4xl py-20"> 
                
                {/* 1. Pre-Header Text */}
                <motion.p 
                    className="text-base md:text-lg mb-4 font-semibold tracking-widest uppercase text-blue-300"
                    initial="hidden"
                    animate="visible"
                    variants={subtitleVariants}
                >
                    360° Property Due Diligence
                </motion.p>

                {/* 2. CONVERGING MAIN HEADING CONTAINER */}
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-xl overflow-hidden h-40 md:h-48 flex flex-col justify-center items-center">
                    
                    {headingParts.map((part, index) => (
                        // Each part is a separate motion element that animates from a corner
                        <motion.span
                            key={index}
                            className="block" // Forces each part onto its own line
                            custom={part.start} // Pass custom starting position
                            initial="hidden"
                            animate="visible"
                            variants={convergenceVariants}
                        >
                            {part.text}
                        </motion.span>
                    ))}

                </h1>

                {/* 3. Description */}
                <motion.p
                    className="text-xl md:text-2xl mb-12 text-gray-200 font-light max-w-2xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={descriptionVariants}
                >
                    Identify hidden risks, verify legality, and get an unbiased audit report 
                    before making your biggest financial decision.
                </motion.p>

                {/* 4. CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUpVariants}
                >
                    {/* Primary CTA */}
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(37, 99, 235, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-bold rounded-full 
                                   shadow-2xl transition duration-300 active:scale-95 whitespace-nowrap"
                    >
                        Get a Property Audit
                    </motion.button>

                    {/* Secondary CTA */}
                    <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/10 px-8 py-4 text-lg font-semibold rounded-full 
                                   backdrop-blur-md border border-white/30 transition duration-300 active:scale-95 whitespace-nowrap"
                    >
                        Download Sample Report
                    </motion.button>
                </motion.div>

                {/* 5. Footer Text */}
                <motion.p
                    className="mt-8 text-sm text-gray-400 tracking-wider font-medium"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUpVariants} // Reusing fadeUp for footer
                >
                    Trusted by home buyers, investors & NRI clients
                </motion.p>
            </div>
        </section>
    );
}