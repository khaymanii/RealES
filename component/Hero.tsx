"use client";
export default function HeroSection() {
  return (
    <div
    className="relative bg-cover bg-center h-screen pt-16 lg:pt-20"
    style={{ backgroundImage: "url('/images/h6.jpg')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Search it. Explore it. Buy it.
      </h1>
  
      {/* Input */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          className="w-full px-4 py-3 rounded-lg shadow-md text-gray-800 focus:outline-none"
        />
      </div>
    </div>
  </div>
  
  );
}
