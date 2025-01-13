"use client";
import { workNav } from "@/data";
import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Workflow () {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const handleClick = (index : number) => {
        setActiveIndex( index === activeIndex ? null : index)
    }
   return ( <div className="flex flex-col lg:px-28 py-10 mt-10 px-5">
        <h2 className="text-[2.6rem] text-left leading-[1.2] text-white mb-6 lg:w-[63%] w-full">From  <span className="text-[#60a6e7]">Spark</span> to <span className="text-[#60a6e7]">Sportlight:</span>  we take you every step of the way to success.</h2>
        <div className="flex lg:flex-row items-center lg:gap-40 w-full flex-col gap-5">
        <div className=" flex flex-col lg:w-full ">
        <div className="flex justify-between items-center rounded-l-full rounded-r-full border-[rgb(179,208,242)] border-[2px] w-full px-3 py-3 overflow-x-auto scroll-smooth whitespace-nowrap">
  {workNav.map((card, index) => (
    <div
      className={`text-center font-medium text-sm sm:text-base relative cursor-pointer rounded-full px-6 sm:px-8 py-3 sm:py-4 ${
        activeIndex === index ? "bg-[rgb(179,208,242)] text-black" : "text-white"
      }`}
      key={index}
      onClick={() => handleClick(index)}
    >
      <h2>{card.name}</h2>
    </div>
  ))}
</div>


        <div className="mt-4">
                  {activeIndex !== null && (
                    <div className="overflow-hidden transition-all duration-300">
                      {workNav[activeIndex].details}
                    </div>
                  )}
                </div>
        </div>

        <div className="w-full">
                    {activeIndex !== null && (
            <Image
              src={
                workNav[activeIndex].img
              }
              alt={workNav[activeIndex].name}
              className="w-[90%] h-80 rounded-lg transition-opacity duration-300"
              width={80}
              height={80}
            />
          )}
        </div>
        </div>
        <button className="bg-white text-[#030516] font-semibold px-5 py-3 rounded-full hover:bg-[#60a6e7] hover:text-white flex flex-row items-center gap-3 w-fit"> Book a Call <FaPlay /></button>
    </div>
   )
}