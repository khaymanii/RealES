import Image from "next/image";
export default function Stacai () {
    return (
        <div className="">
        <div className="via-[rgba(12,38,69,0.8)] bg-customBlue1 rounded-[30px] w-[50%] h-72 ml-[450px]">
             <div className="flex flex-row items-center px-5 gap-5 py-5">
                <div className="flex flex-col gap-4 text-white w-full">
                    <h2 className="text-xl font-normal">Stac AI</h2>
                    <p className="text-sm w-full">Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.
                     </p>
                     <h2 className="text-xl font-normal">Edwin, Fomer CTO</h2>
                </div>
                <div className="w-full">
                <Image src="/images/edwin.svg" alt="arrow" width={100} height={100} className="w-full h-60 object-contain" />
             </div>
             </div>
        </div>
        </div>
    )
}