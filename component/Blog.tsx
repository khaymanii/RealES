  "use client";
import { useState } from "react";
import { blogCard } from "@/data";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Blog() {
  // Explicitly define the type of hoveredIndex as 'number | null'
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col lg:px-28 lg:py-10 mb-24 mt-10 px-5">
        <div className="flex lg:flex-row flex-col lg:items-center items-start w-full justify-between gap-4">
            <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.2rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-5 text-white">Read our articles, news and product blog</h2>
            <button className="bg-white text-[#030516] font-semibold px-3 py-3 rounded-full hover:bg-[#60a6e7] hover:text-white flex flex-row items-center gap-3"> Book a Call <FaPlay /></button>
        </div>
    <div className="lg:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 items-center justify-center flex flex-col">
      {blogCard.map((card, index) => (
        <div
          className={`flex flex-col gap-4 border border-transparent rounded-2xl transition-transform duration-300 w-80 ${hoveredIndex === index ? "hover:shadow-[#60a6e7] shadow-sm" :""}`} // Fixed width for uniformity
          key={index}
          onMouseEnter={() => setHoveredIndex(index)} 
          onMouseLeave={() => setHoveredIndex(null)} 
        >
         
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={card.img}
              alt={card.title}
              width={330}
              height={100}
              className={`rounded-2xl h-52 transition-transform duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`}
            />
          </div>

          {/* Text Div */}
          <div className={`flex flex-col gap-3 border-white border-l-2 transition-transform duration-300  ${hoveredIndex === index ? 'scale-90' : ''}`}>
            <div className="px-5 flex flex-col gap-8">
              <div className="flex flex-col">
                <h2 className="text-white font-semibold text-lg">{card.title}</h2>
                <div className="flex flex-row items-center gap-2 text-white opacity-80">
                  <span>{card.span1}</span>
                  <div className="h-2 w-2 rounded-full bg-white mx-[6px]"></div>
                  <span>{card.date}</span>
                </div>
                <h3 className="text-white font-semibold text-[18px] mt-4">
                  {card.span2}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
