import { AiFillHome } from "react-icons/ai"
import { FaBuilding, FaHome } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"


export const homeCard = [
    {
        id: 1,
        name: "Luxury NYC Apartment",
        img: "/images/h4.jpg",
        price: "25 ETH",
        span1: "3 beds",
        span2: "4 bathrooms",
        span3: "1200 sqft",
        span4: "2",
        address:"123 Main St, City, Country",
        year: "2021",
        details: "This is a beautiful 3-bedroom house located in City A. It has modern amenities and a spacious layout.",
        residence: 'Bugalow',
    },
    {
        id: 2,
        name: "Modern Beach House",
        img: "/images/h2.jpg",
        price: "30 ETH",
        span1: "4 beds",
        span2: "8 bathrooms",
        span3: "3969 sqft",
        span4: "3",
        address:"70780 Tamarind Dr, City, WA 98004",
        year: "2024",
        details: "A luxurious 4-bedroom house in City B with a beautiful garden and plenty of parking space.",
        residence: 'Condo',
    },
    {
        id: 3,
        name: "Cozy Cabin Retreat",
        img: "/images/h3.jpg",
        price: "40 ETH",
        span1: "6 beds",
        span2: "9 bathrooms",
        span3: "2456 sqft",
        span4: "4",
        address:"70780 Tamarisk Ln, Rancho Mirage, CA 92270",
        year: "2021",
        details: "An elegant 5-bedroom home in City C, perfect for large families with a stunning view.",
        residence: 'Penthhouses'
    },
    {
        id: 4,
        name: "Cozy Cabin Retreat",
        img: "/images/h5.jpg",
        price: "60 ETH",
        span1: "8 beds",
        span2: "12 bathrooms",
        span3: "2456 sqft",
        span4: "4",
        address:"70780 Tamarisk Ln, Rancho Mirage, CA 92270",
        year: "2021",
        details: "An elegant 5-bedroom home in City C, perfect for large families with a stunning view.",
        residence: 'Penthhouses'
    },
    {
        id: 5,
        name: "Cozy Cabin Retreat",
        img: "/images/h6.jpg",
        price: "80 ETH",
        span1: "10 beds",
        span2: "14 bathrooms",
        span3: "2456 sqft",
        span4: "4",
        address:"70780 Tamarisk Ln, Rancho Mirage, CA 92270",
        year: "2021",
        details: "An elegant 5-bedroom home in City C, perfect for large families with a stunning view.",
        residence: 'Penthhouses'
    },
    {
        id: 6,
        name: "Cozy Cabin Retreat",
        img: "/images/h1.jpg",
        price: "90 ETH",
        span1: "15 beds",
        span2: "17 bathrooms",
        span3: "2456 sqft",
        span4: "4",
        address:"70780 Tamarisk Ln, Rancho Mirage, CA 92270",
        year: "2021",
        details: "An elegant 5-bedroom home in City C, perfect for large families with a stunning view.",
        residence: 'Penthhouses'
    },
]

export const FeaturedCard = [
    {
        id: 1,
        name: "Town House",
        span: "4 properties",
        img:  <FaHome className="text-blue-600 text-4xl" />
    },
    {
        id: 2,
        name: "Office",
        span: "5 properties",
        img: <AiFillHome className="text-blue-600 text-4xl" />
    },
    {
        id: 3,
        name: "Modern Villa",
        span: "10 properties",
        img: <FaBuilding className="text-blue-600 text-4xl" />
    },
    {
        id: 4,
        name: "Apartment",
        span: "20 properties",
        img: <FaHouse className="text-blue-600 text-4xl" />
    },
]
