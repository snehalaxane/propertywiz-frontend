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


