// "use client"; 

// import { motion } from "framer-motion";

// export default function AuditSolutionSection() {
//   return (
//     <section className="w-full py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//         {/* LEFT: Image with floating effect */}
//         <motion.div
//           className="relative overflow-hidden rounded-3xl shadow-2xl"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9 }}
//         >
//           <img
//             src="/audit-solution.jpg"
//             alt="Due Diligence Audit"
//             className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
//           />

//           {/* Subtle floating circles */}
//           <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
//           <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-blue-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         </motion.div>

//         {/* RIGHT: Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9, delay: 0.2 }}
//           className="space-y-6"
//         >
//           <h2 className="text-2xl md:text-4xl font-bold leading-snug">
//   <span className="text-black">Our Solution:</span>{" "}
//   <span className="text-blue-600">360° Due Diligence Audit</span>
// </h2>

//           <p className="text-lg md:text-s text-gray-700 leading-relaxed">
//             We provide a complete, end-to-end Property Due Diligence Service designed 
//             to protect you from legal pitfalls and technical complications that could 
//             jeopardize your investment.
//           </p>

//           <p className="text-lg md:text-s text-gray-700 leading-relaxed">
//             Our multi-disciplinary team combines seasoned real estate attorneys, 
//             licensed civil engineers, and certified architects who meticulously 
//             investigate every aspect of the property transaction.
//           </p>

//           <p className="text-lg md:text-s text-gray-800 leading-relaxed font-medium">
//             We uncover the hard facts others miss, identify all potential risks before 
//             they become problems, and empower you to invest with total peace of mind 
//             and confidence.
            
//           </p>

//           {/* CTA Button */}
//           <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
//             Learn More About Our Audit
//           </button>
//         </motion.div>
//       </div>

//       {/* Custom animation style */}
//       <style jsx>{`
//         @keyframes pulse-slow {
//           0%, 100% { transform: scale(1); opacity: 0.6; }
//           50% { transform: scale(1.2); opacity: 0.3; }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 6s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
// Assuming you have installed Lucide icons: npm install lucide-react
import { ShieldCheck, FileText, Landmark, DollarSign, Zap, Users } from "lucide-react"; 

// --- Feature Data (New Content Integrated) ---
const features = [
  { 
    title: "Comprehensive Legal Verification", 
    description: "Ensuring clear property titles, approvals, and compliance with all local regulations.", 
    icon: Landmark,
    delay: 0.6
  },
  { 
    title: "Technical & Structural Assessment", 
    description: "Detailed inspections of building quality, construction materials, and structural integrity.", 
    icon: ShieldCheck,
    delay: 0.8
  },
  { 
    title: "Financial Risk Analysis", 
    description: "Identifying hidden liabilities, pending dues, or unexpected costs that could affect your investment.", 
    icon: DollarSign,
    delay: 1.0
  },
  { 
    title: "Customized & Actionable Reports", 
    description: "Easy-to-understand audit reports that give you a clear, prioritized picture before committing.", 
    icon: FileText,
    delay: 1.2
  },
  { 
    title: "Technology-Driven Insights", 
    description: "Using advanced tools and data analysis to detect risks that might be invisible to the naked eye.", 
    icon: Zap,
    delay: 1.4
  },
  { 
    title: "Client-Centric Partnership", 
    description: "Our team guides you at every step, providing clarity, recommendations, and professional advice.", 
    icon: Users,
    delay: 1.6
  },
];

// --- Sub-Component for Feature Cards ---
const AuditFeatureCard = ({ title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, delay: delay }}
    className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 space-y-3"
  >
    <div className="flex items-center space-x-3">
      <Icon className="w-6 h-6 text-blue-600" />
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
    </div>
    <p className="text-sm text-gray-500">{description}</p>
  </motion.div>
);


export default function AuditSolutionSection() {
  // Existing auditAreas data remains, but we will use the features array for the new section

  return (
    <section className="w-full py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Title, Image, and Main Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Image with subtle border and shadow */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            <img
              src="/audit-solution.jpg" // Ensure this image path is correct
              alt="Due Diligence Audit Professional"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* RIGHT: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">The Gold Standard</p>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tight text-gray-900">
              <span className="block">Our Solution:</span>{" "}
              <span className="text-blue-600">360° Real Estate Due Diligence</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We deliver a complete, end-to-end Due Diligence Service designed to protect your capital from unforeseen legal and technical risks. Our multi-disciplinary team ensures every potential pitfall is identified before you commit.
            </p>
            
            <p className="text-lg text-gray-800 leading-relaxed font-semibold">
              Gain confidence, clarity, and control over your investment, ensuring every decision is informed and secure.
            </p>

            {/* CTA Button */}
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold shadow-xl transition transform hover:scale-[1.03] active:scale-95"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }} 
            >
              Request a Confidential Audit Proposal
            </motion.button>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: What Sets Us Apart (Feature Grid) --- */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <motion.h3
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            What Sets Our Audit Apart?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <AuditFeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

      </div>

      {/* Note: Removed the custom CSS for floating circles/slow pulse as it might appear less professional */}
    </section>
  );
}