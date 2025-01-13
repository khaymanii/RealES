"use client";
import Image from 'next/image';
import { logo } from '@/data';
import { useState } from 'react';

export default function Testimonial() {
  
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); 
  };

  return (
    <div className="w-full lg:px-28 py-10 flex flex-col items-center gap-5 mt-10 px-5">
     <h2 className="text-[24px] sm:text-[28px] lg:text-[3rem] text-center text-white mb-4 sm:mb-6 lg:w-[80%] px-4">
           Discover the <span className="text-[#60a6e7]">transformative stories</span> of startups that scaled new heights with us
      </h2>
      <div className="px-5 lg:px-0">
    <div className="flex justify-between items-center rounded-l-full rounded-r-full border-[#60a6e7] border-[1px] whitespace-nowrap">
    {logo.map((item, index) => (
      <div
        key={index}
        onClick={() => handleClick(index)}
        className={`relative flex flex-col justify-center items-center w-1/5 min-w-[120px] h-16 cursor-pointer ${
          activeIndex === index ? "via-[rgba(12,38,69,0.8)] bg-customBlue1" : ""
        } transition-all duration-300 ${
          index === 0 ? "rounded-l-full" : index === logo.length - 1 ? "rounded-r-full" : ""
        }`}
      >
        <Image
          src={item.img}
          alt=""
          width={100}
          height={100}
          className="h-8 object-contain"
        />
      </div>
    ))}
</div>

        {/* Content Row */}
        <div className="mt-4">
          {activeIndex !== null && (
            <div className="overflow-hidden transition-all duration-300">
              {logo[activeIndex].component}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
