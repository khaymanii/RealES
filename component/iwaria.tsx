import Image from "next/image";
export default function Iwaria () {
    return (
        <div className="">
        <div className="via-[rgba(12,38,69,0.8)] bg-customBlue1 rounded-[30px] w-[50%] h-72 ml-[335px]">
             <div className="flex flex-row items-center px-5 gap-5 py-5">
                <div className="flex flex-col gap-4 text-white w-full">
                    <h2 className="text-xl font-normal">Iwaria</h2>
                    <p className="text-sm w-full">The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.
                     </p>
                     <h2 className="text-xl font-normal">Iwaria, Founder</h2>
                </div>
                <div className="w-full">
                <Image src="/images/iwaria-founder.svg" alt="arrow" width={100} height={100} className="w-full h-60 object-contain" />
             </div>
             </div>
        </div>
        </div>
    )
}