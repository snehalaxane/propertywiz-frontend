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


"use client";

import { motion } from "framer-motion";

export default function TwoPillarVerification() {
  const pillars = [
    {
      icon: "📜",
      title: "Forensic Legal Verification",
      description: `We confirm you receive a clear, marketable, and undisputed title
      free from legal complications.\n\nAll government permissions, No Objection Certificates (NOCs),
      and tax payments are thoroughly checked and verified to be current and valid.`,
      bg: "from-blue-400 to-blue-600",
      textColor: "text-white"
    },
    {
      icon: "🏗️",
      title: "Physical & Technical Verification",
      description: `We assess whether the construction is structurally sound,
      safe, and aligned with approved engineering standards.\n\nEvery component is checked to ensure the property has been
      built exactly as per approved plans and codes.`,
      bg: "from-indigo-400 to-indigo-600",
      textColor: "text-white"
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Two-Pillar Verification Process
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our comprehensive audit is built on two essential pillars that work together.
          We don’t just examine paperwork or inspect the building in isolation—
          we connect every detail to ensure complete alignment.
        </motion.p>

        {/* Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${pillar.bg} ${pillar.textColor} transform hover:scale-105 transition-transform duration-300 cursor-default`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
              <p className="leading-relaxed whitespace-pre-line">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
