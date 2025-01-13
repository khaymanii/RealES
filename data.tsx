import Beaupreneur from "./component/beaupreneur";
import Design from "./component/design";
import Develop from "./component/develop";
import ExecutivePros from "./component/executivePros";
import Idea from "./component/idea";
import Iwaria from "./component/iwaria";
import Launch from "./component/launch";
import Stacai from "./component/stacai";
import Starks from "./component/starks";


export const blogCard = [
    {
        id: 1,
        img: "/images/image.webp",
        title: "Blog",
        date:"May 29th 2024",
        span1: "The Reformist",
        span2: "Will AI take over Art?",
    },
    {
        id: 2,
        img: "/images/image (1).webp",
        title: "Blog",
        date:"May 29th 2024",
        span1: "The Reformist",
        span2: "Cryptocurrency versus Tokens",
    },
    {
        id: 3,
        img: "/images/image (2).webp",
        title: "Blog",
        date:"May 29th 2024",
        span1: "The Reformist",
        span2: "Cryptocurrency and Crypto Assets",
    },
]

export const productCard = [
    {
        id: 1,
        img: "/images/layers-three.svg",
        title: "Experience",
        span1: "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
        
    },
    {
        id: 2,
        img: "/images/layers-three.svg",
        title: "Quick Support",
        span1: "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
       
    },
    {
        id: 3,
        img: "/images/layers-three.svg",
        title: "Cost Savings",
        span1: "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
      
    },
]

export const logo = [

        {
          id: 1,
          name: "Starks", 
          img: "/images/starks (1).svg" , 
          component: <Starks />
        },
        { id: 2,
          name: "ExecutivePros", 
          img: "/images/ExecutivePros Logo.svg" ,
          component: <ExecutivePros />
        },
        {  id: 3,
          name: "stac.ai",
          img: "/images/stacai.svg",
          component: <Stacai />
        },
        { id: 4,
          name: "Iwaria",
          img: "/images/iwaria.svg" ,
          component: <Iwaria />
        },
        { id: 5,
          name: "Beaupreneur",
          img: "/images/Beaupreneur.svg" ,
          component: <Beaupreneur />
        },
      ];

 
      export const workNav = [
        {
            id: 1,
            name: "Idea",
            details: <Idea />,
            img: "/images/idea.svg"
        },
        {
            id: 2,
            name: "Design",
            details: <Design />,
            img: "/images/Design.svg"
        },
        {
            id: 3,
            name: "Develop",
            details: < Develop />,
            img: "/images/Develope.svg"
        },
        {
            id: 4,
            name: "Launch",
            details: <Launch />,
            img: "/images/launch.svg"
        }
      ]