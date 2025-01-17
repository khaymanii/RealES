import { FaHome, FaKey } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
export default function Workflow () {
    return (
        <div className="lg:px-20 px-5 ">
        <div className="relative bg-[#FFF8F6] mt-20">
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center justify-center mt-5 px-2">
                    <h2 className="text-black font-semibold text-xl">How its work? Find a perfect home</h2>
                    <span className="text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
            <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between py-5 gap-10 md:px-5">
                <div className="flex flex-col items-center justify-center gap-2">
                <FaHome className="text-white bg-blue-500 rounded-full p-2 text-3xl" />
                <h2 className="text-black text-sm font-semibold">Find Real Estate</h2>
                <p className="text-black text-center w-[60%] text-sm md:w-full">Sumo petentium ut per, at his wisim utinam
                adipiscing. Est ei graeco</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                <MdOutlineRealEstateAgent className="text-white bg-blue-500 rounded-full p-2 text-3xl" />
                <h2 className="text-black text-sm font-semibold">Meet Relator</h2>
                <p className="text-black text-center w-[60%] text-sm md:w-full">Sumo petentium ut per, at his wisim utinam
                adipiscing. Est ei graeco</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                <FaKey className="text-white bg-blue-500 rounded-full p-2 text-3xl" />
                <h2 className="text-black text-sm font-semibold">Take The Keys</h2>
                <p className="text-black text-center w-[60%] text-sm md:w-full">Sumo petentium ut per, at his wisim utinam
                adipiscing. Est ei graeco</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}