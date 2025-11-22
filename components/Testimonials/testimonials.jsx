"use client";
import { motion } from "framer-motion";
import React from 'react'; // Added React import for completeness

const testimonials = [
  {
    name: "Arjun Mehta",
    location: "Mumbai",
    text: "PropertyWiz helped me understand the true value of my home. The process was smooth, and the advice was spot-on! Highly recommended for all real estate needs.",
    img: "/client1.jpg",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    text: "Accurate valuations and excellent customer service. I highly recommend PropertyWiz for anyone looking to invest smartly and securely in property.",
    img: "/client2.jpg",
  },
  {
    name: "Rahul Verma",
    location: "Pune",
    text: "Professional and reliable. Their insights helped me make informed decisions for my properties, significantly boosting my confidence in the transaction.",
    img: "/client3.jpg",
  },
];

export default function Testimonials() {
  return (
    // Updated background to soft gray for modern contrast
    <section className="py-24 px-6 bg-gray-50 font-inter"> 
      <div className="text-center mb-16 max-w-3xl mx-auto">
        {/* Enhanced heading style */}
        <p className="text-base font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Client Success Stories
        </p>
        <h2 className="text-4xl sm:text-4xl font-bold">
  <span className="text-blue-600">Trusted by</span>{" "}
  <span className="text-gray-900">Homeowners and Investors</span>
</h2>

        <p className="text-lg text-gray-600 mt-4">
          Trusted by homeowners and investors alike. Hear what they have to say about our transparent and reliable property services.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            // Enhanced hover effect
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }} 
            
            // Modernized Card Style: background, deep shadow, and accented border
            className="bg-white shadow-2xl rounded-2xl p-8 pt-16 w-full max-w-sm lg:w-[320px] 
                       border border-gray-100 relative overflow-visible cursor-pointer"
          >
            
            {/* Quote Icon Background Element (New visual detail) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <span className="text-8xl font-serif font-extrabold text-blue-500 absolute top-4 left-4">
                    “
                </span>
            </div>

            {/* Floating Animation Container (Client Image) */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2"
            >
              <img
                // IMAGE SOURCE RETAINED HERE
                src={t.img}
                alt={t.name}
                // Fallback placeholder added for robustness if image path is client-side only
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/2563EB/FFFFFF?text=P" }}
                // Enhanced image border for pop-out effect
                className="w-20 h-20 rounded-full object-cover shadow-xl border-4 border-white ring-4 ring-blue-500/50"
              />
            </motion.div>

            <div className="mt-4 text-center">
              {/* Review Text */}
              <p className="text-gray-800 italic mt-4 mb-5 leading-relaxed">
                {t.text}
              </p>

              {/* Stars */}
              <div className="flex justify-center mt-3 text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Name & Location */}
              <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
              <p className="text-sm text-blue-600 font-semibold">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}