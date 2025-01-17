import Image from "next/image";
export default function Starks () {
    return (
        <div className="via-[rgba(12,38,69,0.8)] bg-customBlue1 rounded-[30px] w-[50%] h-72 ">
             <div className="flex flex-row items-center px-5 gap-5 py-5">
                <div className="flex flex-col gap-4 text-white w-full">
                    <h2 className="text-xl font-normal">Stark Associate</h2>
                    <p className="text-sm w-full">Partnering with Forcythe was like finding a hidden gem. 
                        Their genuine interest in our success was palpable, and the continuous support
                         post-launch has been a testament to their commitment.
                        They’ve become more than a service provider; they’re a trusted ally.
                     </p>
                     <h2 className="text-xl font-normal">John, Management</h2>
                </div>
                <div className="w-full">
                <Image src="/images/john.svg" alt="arrow" width={100} height={100} className="w-full h-60 object-contain" />
             </div>
             </div>
        </div>
    )
}