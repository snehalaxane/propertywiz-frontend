// // components/ServiceShowcase.tsx
// const services = [
//   { title: "Home inspection", icon: "🔍" },
//   { title: "Legal services", icon: "📜" },
//   { title: "Free evaluation", icon: "💬" },
//   { title: "Marketing presentation", icon: "📈" },
// ];

// export default function ServiceShowcase() {
//   return (
//     <section className="bg-[#fff] py-20 px-6 text-center text-gray-800">
//       {/* Intro */}
//       <div className="max-w-3xl mx-auto mb-12 space-y-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Exclusive. Committed. Professional
//         </h2>
//         <p className="text-lg text-gray-700">
//           Utilizing her exceptional experience and knowledge of the luxury waterfront markets, Simone serves an extensive and elite worldwide client base.
//         </p>
//       </div>

//       {/* Service Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/20 hover:shadow-lg transition"
//           >
//             <div className="text-4xl mb-4">{service.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//             <p className="text-sm text-gray-700">
//               We do a free evaluation to be sure you want to start selling.
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// const services = [
//   { title: "Home inspection", icon: "🔍" },
//   { title: "Legal services", icon: "📜" },
//   { title: "Free evaluation", icon: "💬" },
//   { title: "Marketing presentation", icon: "📈" },
// ];

// export default function ServiceShowcase() {
//   return (
//     <section className="bg-[#fff] py-20 px-6 text-center text-gray-800">
//       {/* Intro */}
//       <div className="max-w-3xl mx-auto mb-12 space-y-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Exclusive. Committed. Professional
//         </h2>
//         <p className="text-lg text-gray-700">
//           Utilizing her exceptional experience and knowledge of the luxury waterfront markets, Simone serves an extensive and elite worldwide client base.
//         </p>
//       </div>

//       {/* Horizontal Card Row */}
//       <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl p-6 shadow-md w-[250px] text-center hover:shadow-lg transition"
//           >
//             <div className="text-4xl mb-4">{service.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//             <p className="text-sm text-gray-700">
//               We do a free evaluation to be sure you want to start selling.
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, MessageCircle, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Home Inspection",
    icon: <ShieldCheck size={38} />,
    desc: "Complete property analysis with expert evaluation.",
  },
  {
    title: "Legal Services",
    icon: <FileText size={38} />,
    desc: "Hassle-free documentation and legal verification.",
  },
  {
    title: "Free Evaluation",
    icon: <MessageCircle size={38} />,
    desc: "Get a professional market valuation at no cost.",
  },
  {
    title: "Marketing Presentation",
    icon: <BarChart3 size={38} />,
    desc: "High-end marketing strategy to increase property value.",
  },
];

export default function ServiceShowcase() {
  return (
    <section className="bg-white py-24 px-6 text-center text-gray-800">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16 space-y-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Exclusive. Committed. Professional.
        </h2>
        <p className="text-lg text-gray-600">
          Personalized luxury real estate services for premium clients
          worldwide.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl p-8 w-[260px] text-center hover:shadow-2xl hover:border-gray-300 transition-all"
          >
            <div className="mb-4 text-gray-900 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {service.title}
            </h3>
            <p className="text-sm text-gray-700">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
