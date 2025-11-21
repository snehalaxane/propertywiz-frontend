// export default function PropertyCoverageSection() {
//   return (
//     <section className="w-full py-20 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center">
//           What Properties Do We Cover?
//         </h2>

//         <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
//           Our expert due diligence service is tailored for all types of property 
//           investments—whether you are buying your first home or expanding your 
//           commercial portfolio.
//         </p>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

//           {/* Card 1 */}
//           <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
//             <div className="text-4xl mb-3">📏</div>
//             <h3 className="text-lg font-bold text-gray-900 mb-2">
//               Residential Plots & Layouts
//             </h3>
//             <p className="text-gray-700">
//               Verification of plot boundaries, layout approvals, and development 
//               permissions for vacant land purchases.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
//             <div className="text-4xl mb-3">🏢</div>
//             <h3 className="text-lg font-bold text-gray-900 mb-2">
//               Apartments & Flats
//             </h3>
//             <p className="text-gray-700">
//               Inspection of units in new or existing buildings, including 
//               common area assessment and builder credential verification.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
//             <div className="text-4xl mb-3">🏠</div>
//             <h3 className="text-lg font-bold text-gray-900 mb-2">
//               Independent Houses & Villas
//             </h3>
//             <p className="text-gray-700">
//               Evaluation of standalone properties such as villas or bungalows, 
//               covering both structure and land title verification.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
//             <div className="text-4xl mb-3">🏙️</div>
//             <h3 className="text-lg font-bold text-gray-900 mb-2">
//               Commercial Properties
//             </h3>
//             <p className="text-gray-700">
//               Due diligence for commercial buildings, offices, and retail spaces 
//               focusing on zoning and usage compliance.
//             </p>
//           </div>

//           {/* Card 5 */}
//           <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
//             <div className="text-4xl mb-3">🏘️</div>
//             <h3 className="text-lg font-bold text-gray-900 mb-2">
//               Builder Floors & Duplexes
//             </h3>
//             <p className="text-gray-700">
//               Assessment of multi-level units with emphasis on shared ownership 
//               structure, rights, and maintenance agreements.
//             </p>
//           </div>

//           {/* Card 6 */}
//           <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
//             <div className="text-4xl mb-3">🌾</div>
//             <h3 className="text-lg font-bold text-gray-900 mb-2">
//               Agricultural Land
//             </h3>
//             <p className="text-gray-700">
//               Expert verification including conversion feasibility and full 
//               regulatory compliance checks.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function PropertyCoverageSection() {
  const properties = [
    {
      icon: "📏",
      title: "Residential Plots & Layouts",
      description: "Verification of plot boundaries, layout approvals, and development permissions for vacant land purchases.",
      bg: "from-blue-300 to-blue-500",
      textColor: "text-white"
    },
    {
      icon: "🏢",
      title: "Apartments & Flats",
      description: "Inspection of units in new or existing buildings, including common area assessment and builder credential verification.",
      bg: "from-indigo-300 to-indigo-500",
      textColor: "text-white"
    },
    {
      icon: "🏠",
      title: "Independent Houses & Villas",
      description: "Evaluation of standalone properties such as villas or bungalows, covering both structure and land title verification.",
      bg: "from-purple-300 to-purple-500",
      textColor: "text-white"
    },
    {
      icon: "🏙️",
      title: "Commercial Properties",
      description: "Due diligence for commercial buildings, offices, and retail spaces focusing on zoning and usage compliance.",
      bg: "from-teal-300 to-teal-500",
      textColor: "text-white"
    },
    {
      icon: "🏘️",
      title: "Builder Floors & Duplexes",
      description: "Assessment of multi-level units with emphasis on shared ownership structure, rights, and maintenance agreements.",
      bg: "from-cyan-300 to-cyan-500",
      textColor: "text-white"
    },
    {
      icon: "🌾",
      title: "Agricultural Land",
      description: "Expert verification including conversion feasibility and full regulatory compliance checks.",
      bg: "from-green-300 to-green-500",
      textColor: "text-white"
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Properties Do We Cover?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our expert due diligence service is tailored for all types of property investments—whether you are buying your first home or expanding your commercial portfolio.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {properties.map((prop, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${prop.bg} ${prop.textColor} transform hover:scale-105 transition-transform duration-300 cursor-default`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{prop.icon}</div>
              <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
              <p className="leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
