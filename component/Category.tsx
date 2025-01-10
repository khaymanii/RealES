import { FeaturedCard } from "@/data";
import { FaArrowRight } from "react-icons/fa";




export default function Category () {
    return (
        <div className="lg:px-20 px-5">
        <div className="flex flex-col items-start gap-3 lg:px-10 mt-20 bg-blue-600 px-4">
            <h2 className="text-white font-semibold text-xl mt-5">Featured</h2>
            <div className="flex flex-row justify-between w-full">
                <span className="text-sm opacity-85 text-white">Lorem ipsum dolor sit amet</span>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-white text-sm ">View all categories</span>
                    <FaArrowRight className="text-white text-sm" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center gap-5 w-full mb-10">
             {FeaturedCard.map((card, index) => (
                <div className="flex flex-col items-center justify-center bg-white p-20 rounded-md gap-7" key={index}>
                  <div>{card.img}</div>
                 <div className="flex flex-col items-center justify-center">
                    <h2 className=" font-semibold text-sm">{card.name}</h2>
                    <span className="text-sm">{card.span}</span>
                 </div>
                </div>
             ))}
            </div>
        </div>
        </div>
    )
}