"use client";
export default function BuildingAuditContact() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-start">
      
      {/* Background Image */}
      <img
        src="/modern-building.png"
        alt="Building Audit"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 max-w-xl text-left text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-xl">
          Schedule Your Building Audit Today
        </h2>

        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-lg">
          Ensure your building is safe and compliant. Our experts conduct thorough audits 
          and provide detailed reports to help you maintain structural integrity and safety standards.
        </p>

        <button
          className="px-8 py-4 rounded-full bg-blue-700 hover:bg-blue-900 text-white 
                     font-semibold text-lg transition duration-300 shadow-lg"
        >
          Book a Free Audit Consultation
        </button>
      </div>
    </section>
  );
}


