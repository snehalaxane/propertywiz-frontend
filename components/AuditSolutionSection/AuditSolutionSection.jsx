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


"use client"; // Framer Motion needs this

import { motion } from "framer-motion";

export default function AuditSolutionSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: Image */}
        <motion.div
          className="overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/audit-solution.jpg"
            alt="Due Diligence Audit"
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Our Solution: 360° Due Diligence Audit
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We provide a complete, end-to-end Property Due Diligence Service designed 
            to protect you from legal pitfalls and technical complications that could 
            jeopardize your investment.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our multi-disciplinary team combines seasoned real estate attorneys, 
            licensed civil engineers, and certified architects who meticulously 
            investigate every aspect of the property transaction.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            We uncover the hard facts others miss, identify all potential risks before 
            they become problems, and empower you to invest with total peace of mind 
            and confidence.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
