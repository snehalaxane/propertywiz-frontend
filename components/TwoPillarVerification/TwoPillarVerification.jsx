// export default function TwoPillarVerification() {
//   return (
//     <section className="w-full py-20 px-6 bg-white">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <h2 className="text-2xl font-extrabold text-gray-900 text-center">
//           Two-Pillar Verification Process
//         </h2>

//         <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
//           Our comprehensive audit is built on two essential pillars that work together.
//           We don’t just examine paperwork or inspect the building in isolation—<br />
//           we connect every detail to ensure complete alignment.
//         </p>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

//           {/* Pillar 1 */}
//           <div className="p-8 bg-gray-400 rounded-2xl shadow-sm hover:shadow-md transition">
//             <div className="text-5xl mb-4">📜</div>
//             <h3 className="text-xl font-bold text-gray-900 mb-3">
//               Forensic Legal Verification
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               We confirm you receive a clear, marketable, and undisputed title
//               free from legal complications.  
//               <br /><br />
//               All government permissions, No Objection Certificates (NOCs),
//               and tax payments are thoroughly checked and verified to be
//               current and valid.
//             </p>
//           </div>

//           {/* Pillar 2 */}
//           <div className="p-8 bg-gray-400 rounded-2xl shadow-sm hover:shadow-md transition">
//             <div className="text-5xl mb-4">🏗️</div>
//             <h3 className="text-xl font-bold text-gray-900 mb-3">
//               Physical & Technical Verification
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               We assess whether the construction is structurally sound,
//               safe, and aligned with approved engineering standards.  
//               <br /><br />
//               Every component is checked to ensure the property has been
//               built exactly as per approved plans and codes.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";
// import { motion } from "framer-motion";

// export default function TwoPillarVerification() {
//   const pillars = [
//     {
//       icon: "📜",
//       title: "Forensic Legal Verification",
//       description: `We confirm you receive a clear, marketable, and undisputed title
//       free from legal complications.\n\nAll government permissions, No Objection Certificates (NOCs),
//       and tax payments are thoroughly checked and verified to be current and valid.`,
//       bg: "from-blue-400 to-blue-600",
//       textColor: "text-white"
//     },
//     {
//       icon: "🏗️",
//       title: "Physical & Technical Verification",
//       description: `We assess whether the construction is structurally sound,
//       safe, and aligned with approved engineering standards.\n\nEvery component is checked to ensure the property has been
//       built exactly as per approved plans and codes.`,
//       bg: "from-indigo-400 to-indigo-600",
//       textColor: "text-white"
//     }
//   ];

//   return (
//     <section className="w-full py-20 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Heading */}
//         <motion.h2
//           className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Two-Pillar Verification Process
//         </motion.h2>

//         <motion.p
//           className="text-s text-gray-600 max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Our comprehensive audit is built on two essential pillars that work together.
//           We don’t just examine paperwork or inspect the building in isolation—
//           we connect every detail to ensure complete alignment.
//         </motion.p>

//         {/* Pillar Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
//           {pillars.map((pillar, index) => (
//             <motion.div
//               key={index}
//               className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${pillar.bg} ${pillar.textColor} transform hover:scale-105 transition-transform duration-300 cursor-default`}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <div className="text-5xl mb-4">{pillar.icon}</div>
//               <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
//               <p className="leading-relaxed whitespace-pre-line">{pillar.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from 'react';
import { motion } from "framer-motion";

// === INLINE SVG ICONS (Simulating Lucide Icons) ===
// Icon for Legal Verification
const IconGavel = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 13l-3 3-8 8v-8l8-8 3-3V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1z"/><path d="M7 17l-3-3l3-3l3 3l-3 3z"/></svg>
);

// Icon for Technical Verification
const IconHardHat = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M16 11V6a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v5"/><path d="M12 22V12"/></svg>
);
// ===================================================


export default function TwoPillarVerification() {
  const pillars = [
    {
      icon: IconGavel,
      title: "Forensic Legal Verification",
      points: [
        "Confirm a clear, marketable, and undisputed title, free from all legal complications.",
        "Thoroughly check and verify all government permissions, No Objection Certificates (NOCs), and tax payments to ensure they are current and valid.",
      ],
      color: "blue",
    },
    {
      icon: IconHardHat,
      title: "Physical & Technical Verification",
      points: [
        "Assess the construction for structural soundness, safety, and alignment with approved engineering standards.",
        "Inspect every component to ensure the property has been built exactly as per approved plans and local codes.",
      ],
      color: "teal",
    }
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white font-inter">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-base font-semibold text-blue-600 tracking-wider uppercase mb-2">
            The Foundation of Trust
          </p>
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
  <span className="text-blue-600">Two-Pillar</span>{" "}
  <span className="text-gray-900">Verification Process</span>
</h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            Our comprehensive audit is built on two essential pillars that work together. 
            We connect every detail—from the initial legal paperwork to the final structural beam—to ensure complete investment security.
          </p>
        </motion.div>

        {/* Pillar Grid with Connector */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          
          {/* Vertical Connector Line (Only visible on MD screens and up) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-300 pointer-events-none"></div>

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const delay = index * 0.2;
            const colorClass = pillar.color === 'blue' ? 
              'border-blue-600 bg-blue-50 hover:shadow-blue-200' : 
              'border-teal-600 bg-teal-50 hover:shadow-teal-200';
            const iconColor = pillar.color === 'blue' ? 'text-blue-600' : 'text-teal-600';

            return (
              <motion.div
                key={index}
                className={`p-6 sm:p-8 text-left rounded-3xl border-b-4 ${colorClass} shadow-xl transform hover:scale-[1.02] transition-all duration-500 cursor-default h-full`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: delay }}
              >
                <div className="flex items-start mb-6">
                  {/* Icon with prominent styling */}
                  <div className={`p-4 rounded-full ${iconColor} bg-white ring-4 ring-white shadow-md flex-shrink-0`}>
                    <Icon className="w-8 h-8 stroke-2" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-900 ml-4 pt-1 leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                {/* Description Points */}
                <ul className="space-y-4 text-gray-700 list-none pl-0">
                  {pillar.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <svg className={`w-5 h-5 ${iconColor} mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <p className="ml-3 text-lg">{point}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}