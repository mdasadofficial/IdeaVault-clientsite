import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="space-y-12 md:space-y-20 pb-16 overflow-hidden">
      
      {/*  HERO / BANNER SECTION */}
      <section className="relative rounded-2xl md:rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-purple-950 overflow-hidden shadow-2xl text-white py-12 px-5 sm:px-8 md:px-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[500px]">
        
        {/* Left Content */}
        <div className="max-w-2xl space-y-5 md:space-y-6 z-10 flex-1 w-full">
          <span className="inline-flex items-center gap-2 bg-white/10 text-indigo-200 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            ✨ Share. Validate. Scale.
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight md:leading-none">
            The Ultimate Vault for <br/>
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Startup Ideas
            </span>
          </h1>
          <p className="text-indigo-100/80 text-base md:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Don't let your brilliant concepts fade away. Share them with a global community of builders, gather real validation, and co-create the future.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:max-w-md mx-auto lg:mx-0">
            <Link 
              href="/ideas" 
              className="w-full sm:w-auto bg-white text-indigo-950 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 text-center text-sm md:text-base"
            >
              Explore Ideas
            </Link>
            <Link 
              href="/add-idea" 
              className="w-full sm:w-auto bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 text-center text-sm md:text-base"
            >
              Submit Your Idea
            </Link>
          </div>
        </div>

        {/* Right Graphical Card Component */}
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md flex justify-center items-center flex-1 z-10 mt-6 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-3xl rotate-12 opacity-60 blur-xl absolute"></div>
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 md:p-6 shadow-2xl w-full text-left space-y-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-center">
              <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md bg-yellow-400 text-indigo-950">#Trending No.1</span>
              <span className="text-[10px] sm:text-xs text-indigo-200">2 mins ago</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">EcoDrop: Smart Water Analytics</h3>
            <p className="text-xs sm:text-sm text-indigo-100/70 line-clamp-3 leading-relaxed">An AI-powered IoT device designed to monitor real-time water usage in urban households and detect leakages instantly.</p>
            <div className="flex justify-between items-center pt-3 border-t border-white/10 text-[10px] sm:text-xs text-indigo-200">
              <span>💬 48 Interactions</span>
              <span>🚀 94% Validated</span>
            </div>
          </div>
        </div>

        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600 rounded-full opacity-20 blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
      </section>


    </div>
    );
};

export default Banner;