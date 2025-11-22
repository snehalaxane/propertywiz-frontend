"use client";
import React from 'react';
import { motion } from "framer-motion";

// === Custom Inline SVG Icons (Replacing react-icons/fa) ===
const IconPhone = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.71-6.71 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.73c.12.96.4 1.95.84 2.86a1 1 0 0 1-.22 1.05l-1.88 1.88a18.23 18.23 0 0 0 6.6 6.6l1.88-1.88a1 1 0 0 1 1.05-.22c.91.44 1.9.72 2.86.84a2 2 0 0 1 1.73 2v3z"/></svg>);
const IconEnvelope = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
const IconMapMarker = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>);
const IconFacebook = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const IconTwitter = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-1.7-1.4 0-3.3-.8-4.5-2.4.6.1 1.3 0 1.9-.2-1.8-.4-3.5-2-4-4.5.3.1.5.1.8.1.9 0 1.8-.3 2.5-.8C7.5 7.5 7 5.7 7.7 4.1c1.1 1.4 2.8 2.3 4.7 2.4-1.3-1-2-2.7-2-4.4 0-1 .3-1.9.8-2.5 2.1 2.6 5.3 4.1 8.8 4.3-.2-1-.4-1.9-.4-2.8 0-2.5 2-4.5 4.5-4.5 1.2 0 2.3.5 3.1 1.3.9-.2 1.9-.6 2.7-1.1-.3.9-.9 1.7-1.6 2.2 1.1-.1 2.1-.4 3-1-1.1 1.3-2.1 2.5-3.4 3.4z"/></svg>);
const IconLinkedin = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.529-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);


export default function ContactUs() {
    
    // Animation variants
    const fadeInUp = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    // Placeholder for a high-tech/abstract image.
    const bgImageUrl = "https://placehold.co/1920x400/182e4a/e0f7fa?text=Data+Network+Lines"; 

    return (
        <motion.div 
            className="bg-gray-100 min-h-screen font-sans"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        >
            
            {/* === 1. HERO SECTION: Dark, High-Contrast Header === */}
            <div className="relative text-white py-20 md:py-32 overflow-hidden shadow-2xl">
                {/* Background Image Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(/office-meeting.jpg)` }}
                    onError={(e) => { e.target.onerror = null; e.target.style.backgroundImage = `url(${bgImageUrl})`; }}
                >
                    {/* Darker overlay: deep indigo/charcoal */}
                    <div className="absolute inset-0 bg-indigo-950 opacity-80"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
                        variants={fadeInUp}
                    >
                        Lets Create Together
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto"
                        variants={fadeInUp}
                    >
                        Connect with our engineering and strategy teams to transform your next idea into a reality.
                    </motion.p>
                </div>
            </div>

            {/* === 2. MAIN CONTENT AREA: Split Layout with Contrasting Cards === */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column (1/3 width on large screens): Contact Information - Dark Card */}
                    <motion.div 
                        className="bg-gray-900 text-white p-8 sm:p-10 rounded-2xl shadow-2xl flex flex-col justify-between order-2 lg:order-1"
                        variants={fadeInUp}
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b border-blue-400/30 pb-3">
                                Connect Instantly
                            </h2>
                            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                                Reach our dedicated support or sales team via the channels below.
                            </p>

                            <div className="space-y-8 mb-10">
                                {/* Phone */}
                                <div className="flex items-start">
                                    <IconPhone className="text-blue-400 w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Call Support</h3>
                                        <p className="text-gray-400 hover:text-blue-600 transition">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex items-start">
                                    <IconEnvelope className="text-blue-500 w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Send Email</h3>
                                        <p className="text-gray-400 hover:text-blue-600 transition">contact@yourcompany.com</p>
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="flex items-start">
                                    <IconMapMarker className="text-blue-500 w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Visit HQ</h3>
                                        <address className="text-gray-400 not-italic leading-snug">
                                            123 Main Street, Data Hub<br />
                                            City, State, 12345
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links (Bottom aligned) */}
                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <h3 className="font-semibold text-lg text-blue-500 mb-4">Digital Footprint</h3>
                            <div className="flex space-x-6">
                                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110">
                                    <IconFacebook className="w-7 h-7" />
                                </a>
                                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110">
                                    <IconTwitter className="w-7 h-7" />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110">
                                    <IconLinkedin className="w-7 h-7" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column (2/3 width on large screens): Contact Form - Light Card */}
                    <motion.div 
                        className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl lg:col-span-2 order-1 lg:order-2"
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Conversation</h2>
                        
                        <form className="space-y-6">
                            {/* Name and Email in a single row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                                        placeholder="you@company.com"
                                    />
                                </div>
                            </div>
                            
                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                                    placeholder="Inquiry about new project"
                                />
                            </div>
                            
                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
                                    placeholder="Tell us about your needs..."
                                ></textarea>
                            </div>
                            
                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="w-full bg-blue-700 text-gray-900 py-3 px-6 rounded-lg text-lg font-bold 
                                           hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 
                                           transition duration-300 ease-in-out transform hover:scale-[1.01] active:scale-[0.99]"
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Secure Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* === 3. MAP SECTION: Clean Embedding === */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Find Our Global Hub</h2>
                <motion.div 
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
                    variants={fadeInUp}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.251347895286!2d-122.41941578468165!3d37.77492947975932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b2c2d477b%3A0x6a0a0d9b4c0d3a5a!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location on Google Maps"
                    ></iframe>
                </motion.div>
            </div>
        </motion.div>
    );
}