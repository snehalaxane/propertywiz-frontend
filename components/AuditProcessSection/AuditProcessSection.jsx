// "use client";
// import { ClipboardCheck, SearchCheck, FileCheck2 } from "lucide-react";

// export default function AuditProcessSection() {
//   const steps = [
//     {
//       icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
//       title: "Consultation & Document Kick-off",
//       desc: "You share initial property details and any available documents from the seller. We provide a transparent quote, clear timelines, and explain our full methodology.",
//     },
//     {
//       icon: <SearchCheck className="w-12 h-12 text-blue-600" />,
//       title: "Investigation & Analysis",
//       desc: "Our legal and technical teams perform deep investigation: government office searches, registry checks, and detailed on-site inspections. Typically 7–10 working days.",
//     },
//     {
//       icon: <FileCheck2 className="w-12 h-12 text-blue-600" />,
//       title: "Report Delivery & Consultation",
//       desc: "You receive a comprehensive final report followed by a consultation call. We explain findings, legal/technical risks, and answer all your questions.",
//     },
//   ];

//   return (
//     <section className="w-full py-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto text-center">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//           Our Simple & Transparent Process
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//           We have streamlined property due diligence into three straightforward phases,
//           ensuring you stay informed every step of the way.
//         </p>

//         {/* Steps Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
//             >
//               <div className="flex justify-center mb-4">{step.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                 {step.title}
//               </h3>
//               <p className="text-gray-700 leading-relaxed">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { ClipboardCheck, SearchCheck, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AuditProcessSection() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
      title: "Consultation & Document Kick-off",
      desc: "You share initial property details and any available documents from the seller. We provide a transparent quote, clear timelines, and explain our full methodology.",
    },
    {
      icon: <SearchCheck className="w-12 h-12 text-blue-600" />,
      title: "Investigation & Analysis",
      desc: "Our legal and technical teams perform deep investigation: government office searches, registry checks, and detailed on-site inspections. Typically 7–10 working days.",
    },
    {
      icon: <FileCheck2 className="w-12 h-12 text-blue-600" />,
      title: "Report Delivery & Consultation",
      desc: "You receive a comprehensive final report followed by a consultation call. We explain findings, legal/technical risks, and answer all your questions.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Simple & Transparent Process
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We have streamlined property due diligence into three straightforward phases,
          ensuring you stay informed every step of the way.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-100 inline-block">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
