// // components/FuturisticShowcase.tsx
// export default function FuturisticShowcase() {
//   return (
//     <section className="relative h-[80vh] bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] text-white flex flex-col items-center justify-center px-6 overflow-hidden">
//       <div className="text-center space-y-4 z-10">
//         <p className="text-lg uppercase tracking-widest text-pink-300">Palm Springs, CA</p>
//         <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-purple-500">
//           Futuristic Haven
//         </h2>
//         <div className="mt-8 flex gap-4 justify-center flex-wrap">
//           <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition">
//             Get in touch
//           </button>
//           <button className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition">
//             View Details
//           </button>
//         </div>
//       </div>

//       {/* Optional: Add a blurred architectural background image */}
//       <div className="absolute inset-0 z-0 opacity-20 bg-[url('/your-image.jpg')] bg-cover bg-center blur-sm"></div>
//     </section>
//   );
// }


// // components/HeroSection.tsx
// export default function HeroSection() {
//   return (
//     <section className="relative h-[90vh] text-white bg-gradient-to-br from-[#1f1c2c] via-[#928dab] to-[#1f1c2c] overflow-hidden flex flex-col items-center justify-center px-6 text-center">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0 opacity-30 bg-[url('/futuristic-building.jpg')] bg-cover bg-center blur-sm"></div>

//       {/* Content */}
//       <div className="relative z-10 space-y-4">
//         <p className="text-lg uppercase tracking-widest text-pink-300">Palm Springs, CA</p>
//         <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-purple-500">
//           Futuristic Haven
//         </h1>
//         <div className="mt-8 flex gap-4 justify-center flex-wrap">
//           <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition">
//             Get in touch
//           </button>
//           <button className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition">
//             View Details
//           </button>
//         </div>
//       </div>

//       {/* Floating CTA */}
//       <div className="absolute bottom-6 right-6 z-10">
//         <button className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
//           Get This Template
//         </button>
//       </div>
//     </section>
//   );
// }



// components/HeroSection.tsx
// export default function HeroSection() {
//   return (
//     <section className="relative h-[90vh] flex items-center justify-center text-white">

//       {/* Background Image */}
//       <div className="absolute inset-0 bg-[url('/luxury-villa.jpg')] bg-cover bg-center"></div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-3xl space-y-6">
//         <p className="text-lg uppercase tracking-widest text-yellow-300">
//           Premium Real Estate
//         </p>

//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//           Find Your Dream Home With <span className="text-blue-400">PropertyWiz</span>
//         </h1>

//         <p className="text-lg text-gray-200">
//           Explore luxury properties, premium rentals, and smart investment opportunities.
//         </p>

//         {/* Search Bar */}
//         <div className="mt-6 bg-white/10 border border-white/20 backdrop-blur-xl p-4 rounded-xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="City / Location"
//             className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none w-full"
//           />
//           <input
//             type="text"
//             placeholder="Budget (₹)"
//             className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none w-full"
//           />
//           <select className="px-4 py-3 rounded-md bg-white/20 text-white focus:outline-none w-full">
//             <option value="">Property Type</option>
//             <option>Apartment</option>
//             <option>Villa</option>
//             <option>Commercial</option>
//           </select>

//           <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium">
//             Search
//           </button>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex gap-4 justify-center mt-4">
//           <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold">
//             Explore Listings
//           </button>
//           <button className="px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-full font-semibold">
//             Schedule Visit
//           </button>
//         </div>
//       </div>

//       {/* Floating CTA button (optional) */}
//       <div className="absolute bottom-6 right-6 z-10">
//         <button className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
//           Get This Template
//         </button>
//       </div>
//     </section>
//   );
// }


// components/HeroSection.tsx
// export default function HeroSection() {
//   return (
//     <section className="relative h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 gap-10">

//       {/* Left Content */}
//       <div className="flex flex-col text-left space-y-4 max-w-lg z-10">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
//           Find Your Perfect Home
//         </h1>

//         <p className="text-gray-600 dark:text-gray-300 text-lg">
//           Explore luxury properties with smart features tailored for modern living.
//         </p>

//         <div className="flex gap-4 mt-4">
//           <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
//             Explore Listings
//           </button>
//           <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition">
//             Contact Us
//           </button>
//         </div>
//       </div>

//       {/* Floating Image */}
//       <div className="relative w-full max-w-xl">
//         <img
//           src="/real-estate-hero.jpg"
//           alt="Luxury Home"
//           className="rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
//         />

//         {/* Floating effect */}
//         <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.25)] animate-float"></div>
//       </div>

//       {/* Floating animation */}
//       <style>{`
//         @keyframes float {
//           0%   { transform: translateY(0px); }
//           50%  { transform: translateY(-12px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>

//     </section>
//   );
// }


// components/HeroSection.tsx
// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      
//       {/* Floating Full-Width Image */}
//       <img
//         src="/real-estate-hero.jpg"
//         alt="Real Estate"
//         className="w-full max-w-full h-auto object-cover animate-float rounded-3xl shadow-2xl"
//       />

//       {/* Floating Animation */}
//       <style>{`
//         @keyframes float {
//           0%   { transform: translateY(0); }
//           50%  { transform: translateY(-20px); }
//           100% { transform: translateY(0); }
//         }
//         .animate-float {
//           animation: float 5s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }



// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">

//       {/* Background Image */}
//       <img
//         src="/real-estate-hero.jpg"
//         alt="Real Estate"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-3xl">
        
//         {/* Tagline */}
//         <p className="text-lg md:text-xl mb-4 font-light tracking-wide">
//           Find Your Perfect Home
//         </p>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//           Discover Your Dream Property Today
//         </h1>

//         {/* CTA Button */}
//         <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition">
//           Explore Properties
//         </button>

//         {/* Search Box (optional) */}
//         <div className="mt-10 bg-white/20 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Location"
//             className="w-full px-4 py-3 rounded-lg bg-white/80 text-black focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Budget"
//             className="w-full px-4 py-3 rounded-lg bg-white/80 text-black focus:outline-none"
//           />
//           <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white font-medium">
//             Search
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }


// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">

//       {/* Background Image — NOT REMOVED */}
//       <img
//         src="/real-estate-hero.jpg"
//         alt="Building Audit"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-3xl">

//         {/* Tagline */}
//         <p className="text-lg md:text-xl mb-4 font-light tracking-wide">
//           Professional Building Inspection & Compliance
//         </p>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//           Ensure Your Building Is Safe, Secure & Fully Audited
//         </h1>

//         {/* CTA Button */}
//         <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition">
//           Get Your Audit Report
//         </button>

//         {/* Search Box → converted to audit queries */}
//         <div className="mt-10 bg-white/20 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Building Name / Type"
//             className="w-full px-4 py-3 rounded-lg bg-white/80 text-black focus:outline-none"
//           />
//           <input
//             type="text"
//             placeholder="City / Location"
//             className="w-full px-4 py-3 rounded-lg bg-white/80 text-black focus:outline-none"
//           />
//           <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white font-medium">
//             Request Audit
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }


export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/real-estate-hero.jpg"   // your existing image
        alt="Property Audit"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        {/* Small Tagline */}
        <p className="text-lg md:text-xl mb-3 font-light tracking-wider text-blue-300">
          360° Property Due Diligence
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Audit Your Property Before You Invest
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Identify hidden risks, verify legality, and get an unbiased audit report 
          before making your biggest financial decision.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition">
            Get a Property Audit
          </button>

          <button className="bg-white/20 hover:bg-white/30 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-lg border border-white/40 transition">
            Download Sample Report
          </button>
        </div>

        {/* Optional small trust text */}
        <p className="mt-6 text-sm text-gray-300 tracking-wider">
          Trusted by home buyers, investors & NRI clients
        </p>

      </div>
    </section>
  );
}
