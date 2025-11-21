export default function FinalReportSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
          The Final Report: Your Shield Against Risk
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          After our comprehensive audit, you receive a detailed Due Diligence Report—
          not just a summary, but an actionable investment guide that protects your interests.
        </p>
      </div>

      {/* Content Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Executive Summary</h3>
          <p className="text-gray-700">
            A clear “Go / No-Go” investment recommendation with expert rationale.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Risk Scorecard</h3>
          <p className="text-gray-700">
            All issues categorized as Critical, Major, or Minor with priority rankings.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Certified Documentation</h3>
          <p className="text-gray-700">
            Includes EC, certified deeds, and all key documents retrieved during verification.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Photographic Evidence</h3>
          <p className="text-gray-700">
            Visual documentation and precise measurements from our site inspection.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Remedial Actions</h3>
          <p className="text-gray-700">
            Step-by-step guidance to resolve any identified issues before purchase.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Expert Opinion</h3>
          <p className="text-gray-700">
            Final professional assessment on the safety and viability of your investment.
          </p>
        </div>

      </div>
    </section>
  );
}
