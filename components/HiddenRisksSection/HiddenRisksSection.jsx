// import Image from "next/image";

// export default function HiddenRisksSection() {
//   return (
//     <section className="w-full py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        
//         {/* IMAGE */}
//         <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
//           <Image
//             src="/risk-img.jpg"  // replace with your image
//             alt="Hidden Risks"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* TEXT CONTENT (YOUR EXACT DATA) */}
//         <div>
//           <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
//             Hidden Risks
//           </h2>

//           <p className="mt-4 text-gray-700 leading-relaxed">
//             Buying property is a significant investment, but hidden legal and technical issues can
//             transform your dream asset into a costly nightmare. Before committing your capital,
//             critical questions demand answers.
//           </p>

//           <div className="mt-6 space-y-5 text-gray-800">

//             <div>
//               <h3 className="font-semibold text-lg">Complete Ownership History</h3>
//               <p className="text-gray-600">
//                 Can you verify the complete chain of title and confirm every previous transaction is legitimate and properly documented?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Building Plan Approval</h3>
//               <p className="text-gray-600">
//                 Is the structure fully approved with no illegal floors, unauthorized additions, or unpermitted modifications?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Zoning Compliance</h3>
//               <p className="text-gray-600">
//                 Does the land use match official zoning designations for residential or commercial purposes?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Clear Title Status</h3>
//               <p className="text-gray-600">
//                 Are there any outstanding mortgages, liens, pending litigation, or court-ordered restrictions on the property?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Land Classification</h3>
//               <p className="text-gray-600">
//                 Is the survey number free from prohibition lists including government reserves, forest land, or disputed territory?
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg">Future Risk Assessment</h3>
//               <p className="text-gray-600">
//                 Could you unknowingly inherit property disputes or face government acquisition proceedings?
//               </p>
//             </div>

//           </div>

//           <p className="mt-8 font-semibold text-gray-900 text-lg">
//             Dont risk your life savings on uncertainty and assumptions.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// export default function HiddenRisksSection() {
//   return (
//     <section className="relative w-full h-[90vh] overflow-hidden">

//       {/* Background Image */}
//       <img
//         src="/risk-img.jpg"
//         alt="Property Audit Risk"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-white">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           The Hidden Risks of Property Investment
//         </h2>

//         <p className="text-lg mb-8 leading-relaxed">
//           Buying property is a significant investment, but hidden legal and 
//           technical issues can turn your dream asset into a costly nightmare. 
//           Before committing your capital, critical questions demand answers.
//         </p>

//         {/* Bullet Points */}
//         <ul className="space-y-3 text-lg">
//           <li>✔ Complete Ownership History Verification</li>
//           <li>✔ Building Plan Approval Check</li>
//           <li>✔ Zoning & Land Use Compliance</li>
//           <li>✔ Clear Title Status & Encumbrance Check</li>
//           <li>✔ Land Classification & Survey Number Validation</li>
//           <li>✔ Future Risk & Litigation Assessment</li>
//         </ul>
//       </div>
//     </section>
//   );
// }


// export default function HiddenRisksSection() {
//   return (
//     <section className="w-full py-20 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//         {/* LEFT: Image */}
//         <div className="w-full">
//           <img
//             src="/risk-img.jpg"
//             alt="Property Audit Risks"
//             className="w-full h-auto rounded-2xl shadow-xl object-cover"
//           />
//         </div>

//         {/* RIGHT: Content */}
//         <div>
//           <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug">
//             The Hidden Risks of Property Investment
//           </h2>

//           <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//             Buying property is a significant investment, but hidden legal and 
//             technical issues can transform your dream asset into a costly nightmare. 
//             Before committing your capital, critical questions demand answers.
//           </p>

//           {/* Bullet List */}
//           <ul className="space-y-4 text-l text-gray-800">
//             <li>✔ Complete Ownership History Verification</li>
//             <li>✔ Building Plan Approval & Floor Legality</li>
//             <li>✔ Zoning & Land Use Compliance Check</li>
//             <li>✔ Clear Title Status (mortgages, liens, litigation)</li>
//             <li>✔ Land Classification & Survey Number Validation</li>
//             <li>✔ Future Risk Assessment & Dispute Check</li>
//           </ul>

//           <p className="mt-6 text-lg font-semibold text-red-600">
//             Dont risk your life savings on uncertainty. Verify before you buy.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client"; // <-- Add this at the top

import { motion } from "framer-motion";

export default function HiddenRisksSection() {
  const risks = [
    "Ownership History Verification",
    "Building Plan & Floor Legality",
    "Zoning & Land Use Compliance",
    "Clear Title Status (mortgages, litigation)",
    "Land Classification & Survey Number Check",
    "Future Risk & Dispute Assessment",
  ];

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Hidden Risks of Property Investment
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Buying property is a significant investment, but hidden legal and technical issues
          can turn your dream asset into a costly nightmare. Before committing your capital,
          critical questions demand answers.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {risks.map((risk, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <span className="text-green-600 text-xl font-bold">✔</span>
              <p className="text-gray-800 font-medium">{risk}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
