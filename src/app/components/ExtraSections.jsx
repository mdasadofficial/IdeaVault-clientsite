import React from "react";

const ExtraSections = () => {
  return (
    <div>
      {/* 📊 EXTRA SECTION 1: LIVE PLATFORM METRICS */}
      <section className="bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80 rounded-2xl p-6 sm:p-8 md:p-12 transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            Ecosystem Growth
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1">
            Real data from thinkers and builders expanding globally.
          </p>
        </div>
        {/* Responsive Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
          <div className="space-y-1">
            <h3 className="text-3xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400">
              1,420+
            </h3>
            <p className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Ideas Shared
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400">
              58k+
            </h3>
            <p className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Feedbacks
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400">
              210+
            </h3>
            <p className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Teams Formed
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400">
              $3.8M
            </h3>
            <p className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Total Funding
            </p>
          </div>
        </div>
      </section>

      {/* 💡 EXTRA SECTION 2: WHY CHOOSE IDEAVAULT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 md:space-y-6 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Built for Builders. <br className="hidden sm:block" /> Optimized for
            Validation.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
            Skip building complex landing pages just to test an idea. On
            IdeaVault, you pitch your core concept directly to investors,
            developers, and early adopters who provide raw, actionable feedback.
          </p>

          {/* Features Checklist */}
          <div className="space-y-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 bg-emerald-500 text-white rounded-full p-0.5 text-[10px] flex-shrink-0">
                ✓
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                Advanced filtering and categorization based on industry trends.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 bg-emerald-500 text-white rounded-full p-0.5 text-[10px] flex-shrink-0">
                ✓
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                Secure ecosystem allowing you to manage and edit your posted
                concepts.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 bg-emerald-500 text-white rounded-full p-0.5 text-[10px] flex-shrink-0">
                ✓
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                Dynamic interactions including complex comment threads and
                rating tools.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Quote Block */}
        <div className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-[300px]">
          <span className="text-5xl sm:text-6xl font-serif text-white/20 absolute top-2 left-3 select-none">
            “
          </span>
          <p className="text-base sm:text-xl md:text-2xl italic font-medium relative z-10 leading-relaxed pt-6">
            "The best way to predict the future is to invent it. IdeaVault is
            where that invention sparks."
          </p>
          <div className="border-t border-white/20 pt-4 mt-6 flex justify-between items-center relative z-10">
            <div>
              <p className="font-bold text-xs sm:text-sm">Alan Kay</p>
              <p className="text-[10px] sm:text-xs text-indigo-200">
                Computer Scientist & Visionary
              </p>
            </div>
            <span className="text-[9px] sm:text-xs tracking-widest uppercase font-bold text-yellow-300 bg-black/20 px-2.5 py-1 rounded-full">
              Inspiration
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSections;
