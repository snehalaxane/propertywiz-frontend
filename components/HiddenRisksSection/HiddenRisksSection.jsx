// import Image from "next/image";

// export default function HiddenRisksSection() {
//   return (
//     <section className="w-full py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        
//         {/* IMAGE */}
//         <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
//           <Image
//             src="/risk-img.jpg"  // replace with your image
//             alt="Hidden Risks"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* TEXT CONTENT (YOUR EXACT DATA) */}
//         <div>
//           <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
//             Hidden Risks
//           </h2>

//           <p className="mt-4 text-gray-700 leading-relaxed">
//             Buying property is a significant investment, but hidden legal and technical issues can
//             transform your dream asset into a costly nightmare. Before committing your capital,
//             critical questions demand answers.
//           </p>

//           <div className="mt-6 space-y-5 text-gray-800">

//             <div>
//               <h3 className="font-semibold text-lg">Complete Ownership History</h3>
//               <p className="text-gray-600">
//                 Can you verify the complete chain of title and confirm every previous transaction is legitimate and properly documented?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Building Plan Approval</h3>
//               <p className="text-gray-600">
//                 Is the structure fully approved with no illegal floors, unauthorized additions, or unpermitted modifications?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Zoning Compliance</h3>
//               <p className="text-gray-600">
//                 Does the land use match official zoning designations for residential or commercial purposes?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Clear Title Status</h3>
//               <p className="text-gray-600">
//                 Are there any outstanding mortgages, liens, pending litigation, or court-ordered restrictions on the property?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Land Classification</h3>
//               <p className="text-gray-600">
//                 Is the survey number free from prohibition lists including government reserves, forest land, or disputed territory?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Future Risk Assessment</h3>
//               <p className="text-gray-600">
//                 Could you unknowingly inherit property disputes or face government acquisition proceedings?
//               </p>
//             </div>

//           </div>

//           <p className="mt-8 font-semibold text-gray-900 text-lg">
//             Dont risk your life savings on uncertainty and assumptions.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// export default function HiddenRisksSection() {
//   return (
//     <section className="relative w-full h-[90vh] overflow-hidden">

//       {/* Background Image */}
//       <img
//         src="/risk-img.jpg"
//         alt="Property Audit Risk"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           The Hidden Risks of Property Investment
//         </h2>

//         <p className="text-lg mb-8 leading-relaxed">
//           Buying property is a significant investment, but hidden legal and 
//           technical issues can turn your dream asset into a costly nightmare. 
//           Before committing your capital, critical questions demand answers.
//         </p>

//         {/* Bullet Points */}
//         <ul className="space-y-3 text-lg">
//           <li>✔ Complete Ownership History Verification</li>
//           <li>✔ Building Plan Approval Check</li>
//           <li>✔ Zoning & Land Use Compliance</li>
//           <li>✔ Clear Title Status & Encumbrance Check</li>
//           <li>✔ Land Classification & Survey Number Validation</li>
//           <li>✔ Future Risk & Litigation Assessment</li>
//         </ul>
//       </div>
//     </section>
//   );
// }


// export default function HiddenRisksSection() {
//   return (
//     <section className="w-full py-20 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//         {/* LEFT: Image */}
//         <div className="w-full">
//           <img
//             src="/risk-img.jpg"
//             alt="Property Audit Risks"
//             className="w-full h-auto rounded-2xl shadow-xl object-cover"
//           />
//         </div>

//         {/* RIGHT: Content */}
//         <div>
//           <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug">
//             The Hidden Risks of Property Investment
//           </h2>

//           <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//             Buying property is a significant investment, but hidden legal and 
//             technical issues can transform your dream asset into a costly nightmare. 
//             Before committing your capital, critical questions demand answers.
//           </p>

//           {/* Bullet List */}
//           <ul className="space-y-4 text-l text-gray-800">
//             <li>✔ Complete Ownership History Verification</li>
//             <li>✔ Building Plan Approval & Floor Legality</li>
//             <li>✔ Zoning & Land Use Compliance Check</li>
//             <li>✔ Clear Title Status (mortgages, liens, litigation)</li>
//             <li>✔ Land Classification & Survey Number Validation</li>
//             <li>✔ Future Risk Assessment & Dispute Check</li>
//           </ul>

//           <p className="mt-6 text-lg font-semibold text-red-600">
//             Dont risk your life savings on uncertainty. Verify before you buy.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client"; 
// import { motion } from "framer-motion";

// export default function HiddenRisksSection() {
//   const risks = [
//     "Ownership History Verification",
//     "Building Plan & Floor Legality",
//     "Zoning & Land Use Compliance",
//     "Clear Title Status (mortgages, litigation)",
//     "Land Classification & Survey Number Check",
//     "Future Risk & Dispute Assessment",
//   ];

//   return (
//     <section className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
//       <div className="max-w-5xl mx-auto space-y-8 text-center">
//         <motion.h2
//           className="text-4xl md:text-4xl font-bold text-gray-900 leading-snug"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           The Hidden Risks of Property Investment
//         </motion.h2>

//         <motion.p
//           className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Buying property is a significant investment, but hidden legal and technical issues
//           can turn your dream asset into a costly nightmare. Before committing your capital,
//           critical questions demand answers.
//         </motion.p>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           {risks.map((risk, index) => (
//             <div
//               key={index}
//               className="flex items-start gap-3 bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
//             >
//               <span className="text-green-600 text-xl font-bold">✔</span>
//               <p className="text-gray-800 font-medium">{risk}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client"; 
// import { motion } from "framer-motion";
// import React from 'react';

// // Icon for the shield/protection visual
// const IconShield = (props) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//     </svg>
// );

// export default function HiddenRisksSection() {
//     const risks = [
//         "Ownership History Verification",
//         "Building Plan & Floor Legality",
//         "Zoning & Land Use Compliance",
//         "Clear Title Status (mortgages, litigation)",
//         "Land Classification & Survey Number Check",
//         "Future Risk & Dispute Assessment",
//     ];

//     // Framer Motion Variants for Staggering
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 delayChildren: 0.1,
//                 staggerChildren: 0.15,
//             },
//         },
//     };

//     // Framer Motion Variants for Individual Child Elements (3D lift-in effect)
//     const itemVariants = {
//         hidden: { opacity: 0, y: 50, rotateX: -90 },
//         visible: { 
//             opacity: 1, 
//             y: 0, 
//             rotateX: 0,
//             transition: { 
//                 duration: 0.8, 
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 15
//             }
//         },
//     };

//     return (
//         <section className="w-full py-24 px-4 bg-white text-black font-inter relative overflow-hidden">
//             {/* Abstract Background Grid Pattern */}
//             {/* <div className="absolute inset-0 opacity-10" style={{
//                 backgroundImage: 'repeating-linear-gradient(0deg, #1f2937 0, #1f2937 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #1f2937 0, #1f2937 1px, transparent 1px, transparent 20px)'
//             }}></div> */}
//             <div className="absolute inset-0 bg-white"></div>

//             <div className="max-w-6xl mx-auto space-y-12 text-center relative z-10">
                
//                 {/* Heading and Subtitle */}
//                 <div className="max-w-4xl mx-auto">
//                     <motion.h2
//                         className="text-4xl md:text-4xl font-bold text-black  mb-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         Identify & Eliminate the Hidden Risks
//                     </motion.h2>

//                     <motion.p
//                         className="text-lg md:text-xl text-gray-600 leading-relaxed"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         We turn the complex legal and technical landscape into clear, actionable intelligence,
//                         protecting your investment before you commit.
//                     </motion.p>
//                 </div>

//                 {/* Risk Grid with Staggered Animation */}
//                 <motion.div
//                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective"
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {risks.map((risk, index) => (
//                         <motion.div
//                             key={index}
//                             variants={itemVariants}
//                             className="flex flex-col items-center p-6 bg-gray-800/80 backdrop-blur-sm 
//                                        rounded-xl shadow-2xl border border-blue-700/50 hover:bg-gray-700/80 
//                                        transition-all duration-500 ease-in-out cursor-pointer hover:shadow-blue-500/20"
//                         >
//                             <IconShield className="w-8 h-8 text-blue-400 mb-3" />
//                             <p className="text-lg font-semibold text-gray-100">{risk}</p>
//                             <p className="mt-1 text-sm text-gray-400">Essential due diligence checkpoint.</p>
//                         </motion.div>
//                     ))}
//                 </motion.div>
                
//                 {/* CTA at the bottom of the section */}
//                 <motion.button
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.5, delay: 1 }}
//                     className="mt-12 bg-blue-600 text-white px-8 py-3 text-lg font-bold rounded-full 
//                                hover:bg-blue-700 transition transform hover:scale-[1.02] active:scale-[0.98] 
//                                shadow-xl shadow-blue-500/50"
//                 >
//                     Start Your Risk Assessment Today
//                 </motion.button>

//             </div>
//         </section>
//     );
// }


"use client"; 
import { motion } from "framer-motion";
import React from 'react';

// Icon for the Check/Security visual
const IconSecurityCheck = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
    </svg>
);

export default function HiddenRisksSection() {
    const risks = [
        "Ownership History Verification",
        "Building Plan & Floor Legality",
        "Zoning & Land Use Compliance",
        "Clear Title Status (mortgages, litigation)",
        "Land Classification & Survey Number Check",
        "Future Risk & Dispute Assessment",
    ];

    // Define colors for background, text, and hover ring
    const cardColors = [
        { primary: "text-red-600", bg: "bg-red-50", hoverBg: "hover:bg-red-100", ring: "hover:ring-red-400" },
        { primary: "text-teal-600", bg: "bg-teal-50", hoverBg: "hover:bg-teal-100", ring: "hover:ring-teal-400" },
        { primary: "text-indigo-600", bg: "bg-indigo-50", hoverBg: "hover:bg-indigo-100", ring: "hover:ring-indigo-400" },
        { primary: "text-amber-600", bg: "bg-amber-50", hoverBg: "hover:bg-amber-100", ring: "hover:ring-amber-400" },
        { primary: "text-green-600", bg: "bg-green-50", hoverBg: "hover:bg-green-100", ring: "hover:ring-green-400" },
        { primary: "text-pink-600", bg: "bg-pink-50", hoverBg: "hover:bg-pink-100", ring: "hover:ring-pink-400" },
    ];

    // Framer Motion Variants for Staggering
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1,
            },
        },
    };

    // Framer Motion Variants for Individual Child Elements (Clean slide-up effect)
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6, 
                ease: "easeOut"
            }
        },
    };

    return (
        // Bright, professional white background
        <section className="w-full py-24 px-4 bg-white text-gray-900 font-inter relative overflow-hidden">
            
            {/* Background Accent (Subtle noise/texture) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]"></div>

            <div className="max-w-6xl mx-auto space-y-12 text-center relative z-10">
                
                {/* Heading and Subtitle */}
                <div className="max-w-4xl mx-auto">
                    <motion.p 
                        className="text-base font-semibold tracking-wider uppercase text-blue-600 mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Due Diligence Scope
                    </motion.p>
                    <motion.h2
                        className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <span className="text-blue-600"> Protecting Your Investment </span>
                         <span>from Hidden Risks</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-s text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Every property audit covers critical legal, technical, and financial checkpoints to ensure 
                        you are making a fully informed decision.
                    </motion.p>
                </div>

                {/* Risk Grid with Staggered Animation */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {risks.map((risk, index) => {
                        const color = cardColors[index % cardColors.length];

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                // Unique Card Style: Subtle BG color, strong hover color wash, ring effect, and lift
                                className={`text-left p-6 rounded-xl shadow-lg transition-all duration-300 ring-2 ring-transparent 
                                           ${color.bg} ${color.hoverBg} ${color.ring}
                                           hover:scale-[1.03] hover:shadow-xl cursor-pointer`}
                            >
                                <div className="flex items-center space-x-3 mb-2">
                                    <IconSecurityCheck className={`w-6 h-6 ${color.primary} flex-shrink-0`} />
                                    <p className={`text-xl font-bold ${color.primary}`}>{risk}</p>
                                </div>
                                <p className="mt-2 text-base text-gray-600">
                                    {/* Dynamic description based on risk */}
                                    {index === 0 && "Confirming the complete chain of ownership without disputes or gaps."}
                                    {index === 1 && "Verifying construction blueprints against local government approvals."}
                                    {index === 2 && "Ensuring the land use matches legal residential or commercial designations."}
                                    {index === 3 && "Checking for all legal encumbrances, including active or settled lawsuits."}
                                    {index === 4 && "Cross-checking physical boundaries with official land records and survey maps."}
                                    {index === 5 && "Analyzing local development plans and predicting future regulation changes."}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}