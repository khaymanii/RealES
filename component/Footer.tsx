import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedin, FaSpotify, FaYoutube } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"
export default function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <div className="flex bg-gradient-to-t from-[#1f3449] to-[#030516]">
      <div className="flex flex-col gap-6 lg:px-28 lg:py-10 px-5 mb-5 mt-24">
      <div className="flex lg:flex-row flex-col gap-8 justify-between ">
       <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row items-center border-2 border-white w-full rounded-3xl">
          <input 
          type="email" 
          name="email"
          placeholder="Your Email Address" 
          className="w-full p-3 bg-transparent outline-none text-white focus:ring-0"/>
          <button type="submit" className="bg-white text-[#030516] font-normal p-3 rounded-r-2xl">Subscribed</button>
        </div>
        <div className="flex flex-row items-center gap-3">
        <label className="inline-flex items-center cursor-pointer">
               <input type="checkbox" id="checkbox" className="peer hidden" />
             <span className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-blue-500 peer-checked:border-blue-500">
               <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                 </span>
            </label>
          <p className="text-white text-sm">I agree to receive other notifications from Forcythe</p>
        </div>
       </div>
       <div className="flex flex-col gap-8 w-full">
        <Image src="/images/forcythe logo.svg" alt="logo" width={120} height={80} />
        <p className="text-white text-[16px] opacity-80 text-left w-full">We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth.</p>
        <div className="flex flex-row gap-4">
         <FaFacebook className="text-[#60a6e7]  text-3xl border border-[#60a6e7] rounded-full p-1 cursor-pointer"/>
         <FaInstagram className="text-[#60a6e7]  text-3xl border border-[#60a6e7] rounded-full p-1 cursor-pointer"/>
         <FaTwitter className="text-[#60a6e7]  text-3xl border border-[#60a6e7] rounded-full p-1 cursor-pointer" />
         <FaLinkedin  className="text-[#60a6e7]  text-3xl border border-[#60a6e7] rounded-full p-1 cursor-pointer"/>
         <FaYoutube className="text-[#60a6e7]  text-3xl border border-[#60a6e7] rounded-full p-1 cursor-pointer" />
         <FaSpotify className="text-[#60a6e7]  text-3xl border border-[#60a6e7] rounded-full p-1 cursor-pointer"/>
        </div>
       </div>
       <div className="flex flex-col gap-4 w-full">
        <h2 className="text-white font-semibold text-2xl">Company</h2>
        <ul className="flex flex-col gap-2 text-[#60a6e7] text-md">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Service</li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer">Studio</li>
          <li className="cursor-pointer">Foundation</li>
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">Blogs</li>
        </ul>
       </div>
      </div>
      <hr className="w-full h-0.5 bg-[#60a6e7] opacity-30 border-none" />
      <p className="text-[#60a6e7]  opacity-85 text-sm"> Copyright &copy; {currentYear}. Forcythe. All rights reserved.</p>
      </div>
    </div>
  )
}