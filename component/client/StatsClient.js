// "use client"; directive at the top to tell Next.js this is a Client Component
"use client";

import CountUp from "react-countup";

export default function  StatsClient () {
  return (
    <div className="relative bg-gradient-to-t from-customBlue2 via-[rgba(12,38,69,0.8)] to-customBlue1 text-white py-16 mb-20">
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="lg:w-2/3 w-full lg:pt-[35%] pt-[60%]  rounded-t-full bg-gradient-to-t from-[#030516] to-[#1f3449] mx-auto border-t-[#60a6e7] border-b-0 border-2"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-center lg:mt-40 flex flex-col items-center justify-center mt-0">
      <h2 className="text-[18px] lg:text-4xl font-medium lg:w-[40%] w-[48%]  mx-0 flex flex-wrap justify-center gap-2">
  <span className="word animate-fadeIn delay-0">We </span> 
  <span className="word animate-fadeIn delay-2000">build</span>
  <span className="word animate-fadeIn delay-4000">solutions</span>
  <span className="word animate-fadeIn delay-6000">that</span>
  <span className="word animate-fadeIn delay-8000">help{" "}</span>
  <span className="text-[#60a6e7] font-semibold animate-fadeIn delay-10000">businesses</span> 
  <span className="word animate-fadeIn delay-12000">of</span>
  <span className="word animate-fadeIn delay-14000">all</span> 
  <span className="word animate-fadeIn delay-16000">sizes</span>
  <span className="word animate-fadeIn delay-18000">to</span>
  <span className="text-[#60a6e7] font-semibold word animate-fadeIn delay-20000">scale</span>
</h2>
      </div>

      {/* Statistics */}
      <div className="relative z-10 lg:mt-12 flex justify-center gap-8 md:gap-16 mt-5">
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-[#60a6e7]">
            <CountUp start={0} end={50} duration={2} />+
          </p>
          <p className="mt-2 text-sm md:text-base">Clients</p>
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-[#60a6e7]">
          <CountUp start={0} end={120} duration={2} />+
          </p>
          <p className="mt-2 text-sm md:text-base">Projects</p>
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-[#60a6e7]">
          <CountUp start={0} end={10} duration={2} />+
          </p>
          <p className="mt-2 text-sm md:text-base">Team Leads</p>
        </div>
        <div className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-[#60a6e7]">
          <CountUp start={0} end={10} duration={2} />+
          </p>
          <p className="mt-2 text-sm md:text-base">Glorious Years</p>
        </div>
      </div>
    </div>
  );
};


