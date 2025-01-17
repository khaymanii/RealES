import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa"


export default function Footer () {

const currentYear = new Date ().getFullYear();
return (
  <div className="">
  <div className="bg-blue-600 h-fit w-full flex flex-col px-7 mt-16">
    <div className="flex flex-col items-center justify-center mt-6 gap-3 mb-10">
       <FaTelegram  style={{ color: 'white', fontSize: '40px' }}/>
       <h2 className="text-white font-semibold">Stay Up to Date</h2>
       <span className="lg:text-sm text-[12px] text-white opacity-85">Subscribe to our newsletter to receive our weekly feed</span>
       <div className="flex flex-row items-center border-none rounded-3xl bg-gray-200 p-2 w-80">
         <input
            type="email"
            name="email"
            className="border-none bg-transparent focus:ring-0 outline-none flex-1"
            placeholder="Enter your email"
           />
           <section className="flex flex-row gap-2 items-center cursor-pointer">
         <span className="text-gray-600 ">Send</span>
         <FaArrowRight className="text-gray-800"/>
         </section>
         </div>
    </div>
    <hr className="w-full h-0.5 bg-black opacity-30 border-none" />
    <div className="flex flex-row items-center justify-between lg:px-20 mb-10 mt-5 px-3">
          <p className="text-white opacity-85 ">&copy; {currentYear}. RealES</p>
          {/* Social Medial */}
          <section className="flex flex-row items-center gap-3 text-white">
            <FaFacebook  className="cursor-pointer"/>
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer"/>
            <FaLinkedin className="cursor-pointer"/>
          </section>
      </div>
  </div>
  </div>
)
}