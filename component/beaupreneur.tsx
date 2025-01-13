import Image from "next/image";
export default function Beaupreneur () {
    return (
        <div className="">
        <div className="via-[rgba(12,38,69,0.8)] bg-customBlue1 rounded-[30px] w-[50%] h-72 ml-[550px]">
             <div className="flex lg:flex-row flex-col items-center px-5 gap-5 py-5">
                <div className="flex flex-col gap-4 text-white w-full">
                    <h2 className="text-xl font-normal">Beaupreneur</h2>
                    <p className="text-sm w-full">I’m beyond impressed with the dedication Forcythe showed. 
                        They didn’t just deliver—they educated us, involving us in the creative process. 
                        The result? A website that truly feels like ours and speaks directly to our customers’ hearts.
                     </p>
                     <h2 className="text-xl font-normal">Christiana, Founder</h2>
                </div>
                <div className="w-full">
                <Image src="/images/christina.svg" alt="arrow" width={100} height={100} className="w-full h-60 object-contain" />
             </div>
             </div>
        </div>
        </div>
    )
}