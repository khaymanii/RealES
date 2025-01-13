import Image from "next/image"
import { FaPlay } from "react-icons/fa"
export default function HeroSection () {
  return (
    <div className="pt-16">
    <div className="flex flex-col bg-cover h-screen text-white lg:px-28 px-5 lg:py-10 sm:px-5 sm:py-2"  style={{ backgroundImage: 'url("/images/background.jpg")' }}>
        <div className=" bg-white bg-opacity-10 w-full px-10 py-10 lg:mt-0 mt-20" style={{ borderRadius: "55px"}}>
        <h1 className="lg:text-[5rem] min-h-[180px] font-normal leading-[1] lg:w-[80%] w-full text-[3.5rem]">
             We build <span className="text-[#60a6e7] ">products</span> that shape a better future
          </h1>

        <p className="mt-4 mb-8 leading-[1] text-[24px] lg:text-base md:text-lg text-[#aea9b1] lg:w-[75%] w-full fade-in">
          We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.
        </p>
       <button className="bg-white text-[#030516] font-semibold px-5 py-3 rounded-full hover:bg-[#60a6e7] hover:text-white flex flex-row items-center gap-3"> Book a Call <FaPlay /></button>
        </div>
        <div className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center lg:mt-32 mt-20 font-normal">
                <span >Success </span>
                <span >in </span>
                <span className="text-[#60a6e7]">Motion </span>
                <span className="">– </span>
                <span className=" capitalize">Our </span>
                <span className=" ">clients’ </span>
                <span className=" ">journey </span>
                </div>
      </div>
      <div className="flex flex-col gap-2 lg:mt-10">
      <section className="w-full overflow-hidden flex justify-center items-center lg:mt-0 mt-24" >
  <div className="flex animate-scrollRight gap-4">
    <Image src="/images/activity.svg" alt="image" width={250} height={200}  className="h-64"/>
    <Image src="/images/africaFund.svg" alt="image" width={250} height={200}  className="h-64"/>
    <Image src="/images/exec-pro.svg" alt="image" width={250} height={400}  className="h-64"/>
    <Image src="/images/starks.svg" alt="image" width={250} height={200}  className="h-64"/>
    <Image src="/images/phone.svg" alt="image" width={250} height={200}  className="h-64"/>
    <Image src="/images/stac.svg" alt="image" width={250} height={200}  className="h-64"/>

    <Image src="/images/activity.svg" alt="image" width={250} height={200}  className="h-64"/>
    <Image src="/images/africaFund.svg" alt="image" width={250} height={200} className="h-64" />
    <Image src="/images/exec-pro.svg" alt="image" width={250} height={200}  className="h-64"/>
    <Image src="/images/starks.svg" alt="image" width={250} height={200} className="h-64"/>
    <Image src="/images/phone.svg" alt="image" width={250} height={200} className="h-64" />
    <Image src="/images/stac.svg" alt="image" width={250} height={200}  className="h-64"/>
  </div>
  </section>      
  <section className="w-full overflow-hidden flex justify-center items-center mt-0 pt-0">
  <div className="flex animate-scrollLeft gap-4">
    <Image src="/images/phone.svg" alt="image" width={250} height={200} className="h-64" />
    <Image src="/images/africaFund.svg" alt="image" width={250} height={200}  className="h-64"/>
    <Image src="/images/exec-pro.svg" alt="image" width={250} height={300}  className="h-64"/>
    <Image src="/images/starks.svg" alt="image" width={250} height={200}  className="h-64"/>
    <Image src="/images/activity.svg" alt="image" width={250} height={200} className="h-64" />
    <Image src="/images/starks.svg" alt="image" width={250} height={200}  className="h-64"/>

    <Image src="/images/phone.svg" alt="image" width={250} height={200} className="h-64" />
    <Image src="/images/africaFund.svg" alt="image" width={250} height={300}  className="h-64"/>
    <Image src="/images/exec-pro.svg" alt="image" width={250} height={200} className="h-64" />
    <Image src="/images/starks.svg" alt="image" width={250} height={200} className="h-64" />
    <Image src="/images/activity.svg" alt="image" width={250} height={200} className="h-64" />
    <Image src="/images/starks.svg" alt="image" width={250} height={200} className="h-64"/>
  </div>
   </section>
</div>
</div>
  )
}