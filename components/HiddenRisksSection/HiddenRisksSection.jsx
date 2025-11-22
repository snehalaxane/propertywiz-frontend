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