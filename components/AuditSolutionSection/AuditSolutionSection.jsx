// export default function AuditSolutionSection() {
//   return (
//     <section className="w-full py-10 px-6 bg-white">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//         {/* LEFT: Image */}
//         <div>
//           <img
//             src="/audit-solution.jpg"
//             alt="Due Diligence Audit"
//             className="w-full h-auto rounded-2xl shadow-xl object-cover"
//           />
//         </div>

//         {/* RIGHT: Content */}
//         <div>
//           <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
//             Our Solution: 360° Due Diligence Audit
//           </h2>

//           <p className="text-lg text-gray-700 leading-relaxed mb-6">
//             We provide a complete, end-to-end Property Due Diligence Service designed 
//             to protect you from legal pitfalls and technical complications that could 
//             jeopardize your investment.
//           </p>

//           <p className="text-lg text-gray-700 leading-relaxed mb-6">
//             Our multi-disciplinary team combines seasoned real estate attorneys, 
//             licensed civil engineers, and certified architects who meticulously 
//             investigate every aspect of the property transaction.
//           </p>

//           <p className="text-lg text-gray-800 leading-relaxed ">
//             We uncover the hard facts others miss, identify all potential risks before 
//             they become problems, and empower you to invest with total peace of mind 
//             and confidence.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client"; 
import { motion } from "framer-motion";

export default function AuditSolutionSection() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: Image with floating effect */}
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="/audit-solution.jpg"
            alt="Due Diligence Audit"
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
          />

          {/* Subtle floating circles */}
          <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-blue-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-6"
        >
         <h2 className="text-4xl md:text-4xl font-bold leading-snug">
  <span className="text-blue-600">Our Solution:</span>{" "}
  <span className="text-gray-900">360° Due Diligence Audit</span>
</h2>


          <p className="text-lg md:text-s text-gray-700 leading-relaxed">
            We provide a complete, end-to-end Property Due Diligence Service designed 
            to protect you from legal pitfalls and technical complications that could 
            jeopardize your investment.
          </p>

          <p className="text-lg md:text-s text-gray-700 leading-relaxed">
            Our multi-disciplinary team combines seasoned real estate attorneys, 
            licensed civil engineers, and certified architects who meticulously 
            investigate every aspect of the property transaction.
          </p>

          <p className="text-lg md:text-s text-gray-800 leading-relaxed font-medium">
            We uncover the hard facts others miss, identify all potential risks before 
            they become problems, and empower you to invest with total peace of mind 
            and confidence.
          </p>

          {/* CTA Button */}
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
            Learn More About Our Audit
          </button>
        </motion.div>
      </div>

      {/* Custom animation style */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}


// "use client"; 
// import React from 'react';
// import { motion } from "framer-motion";

// // === INLINE SVG ICON DEFINITION ===
// // Using a Shield Check icon to symbolize protection and diligence
// const IconShieldCheck = (props) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0c-121.6 0-221.7 88.6-255.4 204.4c-4.1 13.9 1.7 29 14.3 35.5L256 384L501.1 240c12.6-6.5 18.4-21.6 14.3-35.5C477.7 88.6 377.6 0 256 0zm-14.3 400.9L256 512l14.3-111.1c25.4-15.6 44.5-35.4 56.4-58.4c3.4-6.4 10.6-9.6 17.7-8.7c7.1 .8 13.5 4.8 17.5 10.9c25.2 38.6 60.1 63.8 100 74.2c12.3 3.2 24 1 34.3-6.1c10.2-7 16.2-18.4 17.5-30.8c2.8-27.1-1.3-54.6-12.7-79.6c-11.4-25.1-28.7-47.5-50.6-66.5c-4-3.5-6.3-8.5-6.3-13.8V224h-192v24.2c0 5.3-2.3 10.3-6.3 13.8c-21.9 19-39.2 41.4-50.6 66.5c-11.4 25.1-15.5 52.5-12.7 79.6c1.3 12.4 7.3 23.8 17.5 30.8c10.3 7.1 22 9.3 34.3 6.1c39.9-10.4 74.8-35.6 100-74.2c4-6.1 10.4-10.1 17.5-10.9c7.1-.9 14.3 2.3 17.7 8.7c11.9 23 31 42.8 56.4 58.4zM224 224v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32H224zm128 0H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM272 320h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM320 320h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM192 320h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM368 320h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM144 320h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
// );
// // ===================================

// export default function AuditSolutionSection() {
//   return (
//     <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white font-inter">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase mb-2">
//             PREMIUM INVESTIGATION
//           </h2>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//             Comprehensive Due Diligence
//           </h1>
//         </div>

//         {/* Unique, Asymmetrical Layout */}
//         <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//           {/* LEFT/VISUAL: Glassmorphism Shield Card (Col 1-5) */}
//           <motion.div
//             className="lg:col-span-5 relative flex justify-center items-center h-96 p-8 rounded-3xl overflow-hidden shadow-2xl 
//                        bg-white/10 backdrop-blur-xl border border-white/20"
//             initial={{ opacity: 0, x: -60, rotate: 0 }}
//             whileInView={{ opacity: 1, x: 0, rotate: -2 }} // Slight rotation for uniqueness
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.0, ease: "easeOut" }}
//           >
//             {/* Background Gradient/Light source */}
//             <div className="absolute inset-0 bg-white opacity-50 [mask-image:radial-gradient(ellipse_at_top,transparent_20%,#000)]"></div>
            
//             <div className="text-center">
//               {/* Main Icon */}
//               <IconShieldCheck className="w-24 h-24 text-blue-400 mx-auto mb-4 drop-shadow-lg" />
//               <p className="text-xl font-bold text-white tracking-wider">
//                 RISK MITIGATION ASSURED
//               </p>
//             </div>
//           </motion.div>

//           {/* RIGHT/CONTENT: Information Card (Col 6-12) - Overlapping the visual block on desktop */}
//           <motion.div
//             className="lg:col-start-6 lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100 lg:z-10"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
//           >
//             <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-4 border-l-4 border-blue-600 pl-4">
//               Your 360° Due Diligence Solution
//             </h3>

//             <p className="text-lg text-gray-700 leading-relaxed mb-4">
//               We provide a complete, end-to-end Property Due Diligence Service designed 
//               to protect you from legal pitfalls and technical complications that could 
//               jeopardize your investment.
//             </p>

//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Our multi-disciplinary team combines seasoned real estate attorneys, 
//               licensed civil engineers, and certified architects who meticulously 
//               investigate every aspect of the property transaction.
//             </p>

//             <p className="text-xl text-gray-800 leading-relaxed font-semibold mb-8 border-t pt-4">
//               We empower you to invest with total peace of mind and confidence by uncovering the hard facts others miss.
//             </p>

//             {/* CTA Button */}
//             <a 
//                 href="#"
//                 className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl 
//                            shadow-blue-500/40 transition duration-300 transform hover:scale-[1.03] text-lg"
//             >
//               Request a Free Audit Consultation
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }