
  "use client";
import { homeCard } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Card {
  id: number;
  name: string;
  img: string;
  price: string;
  span1: string;
  span2: string;
  span3: string;
  span4: string;
  address: string;
  year: string;
  details: string;
  residence: string;
}



export default function HomeCard () {

  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleCardClick = (card : Card) => {
    setSelectedCard(card);
  }

  const closeModal = () => {
    console.log("Modal closed");
    setSelectedCard(null);
  }
  return (
    <div className="flex flex-col lg:flex-col items-start lg:px-20 mt-10 gap-5 px-5 md:px-10">
      <h2 className="text-3xl font-semibold">Homes For You</h2>
      <hr className="w-full h-0.5 bg-gray-700 border-none" />
       <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-10 w-full">
       {homeCard.map((card) => (
          <div
           className="flex flex-col gap-1 border-2 border-gray-600" 
           key={card.id}
           onClick={() => handleCardClick(card)}>
            <div className="relative w-full">
             <Image src={card.img} alt="home" width={1920} height={300} />
             </div>
             <h2 className="text-xl font-semibold px-2">{card.price}</h2>
             <div className="flex flex-row items-center gap-2 px-2">
              <span className="">{card.span1}</span>
              <hr className="h-5 w-0.5 bg-gray-700 border-none" />
              <span className="">{card.span2}</span>
              <hr className="h-5 w-0.5 bg-gray-700 border-none"/>
              <span className="">{card.span3}</span>
             </div>
             <p className="px-2 text-gray-700">{card.address}</p>
          </div>
        ))}
       </div>

       {/* Modal Card */}

       {selectedCard && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">

         <div className="bg-white lg:p-6 rounded-lg w-full max-w-md lg:max-w-[80%] relative p-3">
           <button
             className="absolute top-2 right-2 text-xl text-gray-700"
             onClick={closeModal}
           >
             <FaTimes  className="cursor-pointer"/>
           </button>
           {/* Modal Content */}

           <div className="flex flex-col lg:flex-row px-10 gap-10 items-center w-full">
           <div className="relative w-full lg:h-96 h-64 lg:min-h-[470px] mb-4">
             <Image
               src={selectedCard.img}
               alt={selectedCard.address}
               layout="fill"
               objectFit="cover"
             />
           </div>
           <div className="flex flex-col gap-2 w-full">
            <h2 className="text-2xl font-bold">{selectedCard.name}</h2>
            <div className="lg:flex lg:flex-row items-center gap-2 hidden">
              <span className="">{selectedCard.span1}</span>
              <hr className="h-5 w-0.5 bg-gray-700 border-none" />
              <span className="">{selectedCard.span2}</span>
              <hr className="h-5 w-0.5 bg-gray-700 border-none"/>
              <span className="">{selectedCard.span3}</span>
             </div>
             <p className="text-gray-700">{selectedCard.address}</p>
           <h2 className="text-xl font-bold mb-2">{selectedCard.price}</h2>
           <div className="flex flex-row items-center gap-5">
            <button type="button" className="bg-blue-700 rounded-md text-white  w-full py-2">Buy</button>
            <button type="button" className="bg-white rounded-md text-blue-700 border-2 border-blue-700  w-full py-2">Contact agent</button>
           </div>
           <div className="lg:flex lg:flex-col gap-1 mt-2 hidden">
           <hr className="w-full h-0.5 bg-gray-700 border-none" />
           <h2 className="font-semibold text-[20px]">Overview</h2>
           <p className="text-gray-700 text-sm">{selectedCard.details}</p>
           <hr className="w-full h-0.5 bg-gray-700 border-none" />
           </div>
            <div className="flex flex-col gap-1 mt-2">
              <h2 className="text-[20px] font-semibold">Facts and Features</h2>
              <ul className="list-disc pl-5">
                <li className="font-semibold">Purchace price : <span className="font-normal">{selectedCard.price}</span></li>
                <li className="font-semibold">Type of Residence: <span className="font-normal">{selectedCard.residence}</span></li>
                <li className="font-semibold">Bed Rooms : <span className="font-normal">{selectedCard.span1}</span></li>
                <li className="font-semibold">Bathrooms : <span className="font-normal">{selectedCard.span4}</span></li>
                <li className="font-semibold">Square Feets : <span className="font-normal">{selectedCard.span3}</span></li>
                <li className="font-semibold">Built Year: <span className="font-normal">{selectedCard.year}</span></li>
              </ul>
            </div>
           </div>
           </div>
         </div>
       </div>
       )}


       </div>

  )
}
