import Image from "next/image";
export default function ExecutivePros () {
    return (<div className="">
        <div className="via-[rgba(12,38,69,0.8)] bg-customBlue1 rounded-[30px] w-[50%] h-72 ml-56">
             <div className="flex flex-row items-center px-5 gap-5 py-5">
                <div className="flex flex-col gap-4 text-white w-full">
                    <h2 className="text-xl font-normal">ExecutivePros</h2>
                    <p className="text-sm w-full">The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!
                     </p>
                     <h2 className="text-xl font-normal">Testimony, Co founder</h2>
                </div>
                <div className="w-full">
                <Image src="/images/executive-pro-ceo.svg" alt="arrow" width={100} height={100} className="w-full h-60 object-contain" />
             </div>
             </div>
        </div>
        </div>
    )
}