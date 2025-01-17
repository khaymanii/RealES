import { productCard } from "@/data";
import Image from "next/image";

export default function Product() {
  return (
    <div className="flex flex-col items-center gap-5 mt-10 bg-gradient-to-t to-customBlue2 via-[rgba(12,38,69,0.8)] from-customBlue1 lg:px-28 lg:py-10">
      <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.2rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-5 text-[#60a6e7] text-center px-3 lg:px-0">Your best call for B2B/B2C product innovation</h2>

      <div className="lg:grid lg:grid-cols-3 gap-5 items-center justify-between flex flex-col mb-10 lg:mb-20">
        {productCard.map((card, index) => (
            <div className="flex flex-col px-8 py-12 gap-5 lg:w-[90%] w-[80%] bg-[#030516] rounded-lg animate-border-rotate border-3 border-[#60a6e7]" key={index}>
               <Image src={card.img} alt={card.title} width={50} height={50} className="bg-[#60a6e7] p-2 rounded-md" />
                 <h2 className="text-white font-semibold text-[20px] leading-[1rem]">{card.title}</h2>
                 <p className="text-white opacity-70 text-[18px] leading-[1.5rem] text-left w-[95%]">{card.span1}</p>
            </div>
        ))}
      </div>
    </div>
  );
}