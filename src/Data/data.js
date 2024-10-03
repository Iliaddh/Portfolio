import code from "../../public/code.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import web7 from "../../public/web7.png";
import web8 from "../../public/web8.png";
import web9 from "../../public/web9.png";
import web10 from "../../public/web10.png";

export const DATA = [
  {
    id: "7",
    projectName:"Highlight hub",
    description: "Highlight Hub is a platform that allows athletes to share their highlight videos of their sport with coaches and recruiters. This freelance project built to a client with modern technologies like MS Azure Blob Storage, Next.js, MongoDB, Prisma, Next Auth and TailwindCSS. ",
    img: web10,
    nextjs: true,
    reactjs: false,
    tailwindcss: true,
    underProduction: true,
    // url: "/",
    // gitHub:"/",
  },
  {
    id: "6",
    projectName:"Text to Image AI APP",
    description: "In this projct I built a platform that create images from text using OpenAI's DALLE-E 3 . Users can Log in and sign up using mongoDB, and share the image they created to the community. I also used cloudinary to store images. This project also uses DaisyUI which provides beautiful tailwindcss components and enhances the user interface. This project is under production and I will be adding more features to it.",
    img: web9,
    nextjs: true,
    reactjs: true,
    underProduction: false,
    tailwindcss: true,
    url: "https://text-to-image-ai-next.vercel.app/",
    gitHub:"https://github.com/Iliaddh/textToImageAINext",
},
    {
      id: "1",
      projectName:"Software License Management System",
      description: "A web-based system for software license management. We identify two primary users: Clients and Software providers. Clients are able to manage an account with relevant information, associate licenses to their account, acquire new licenses, etc. Software providers are able to manage client accounts, generate serial numbers, associate serial numbers with products and clients, etc.",
      img: web1,
      nextjs: false,
      reactjs: false,
      tailwindcss: false,
      url: "https://markghaby.github.io/SOEN287_Project/",
      gitHub:"https://github.com/Iliaddh/Software-Lisence-Management-Website",
  },
  {
    id: "4",
    projectName:"CarShop",
    description: "The CarShop project, built with Next.js, revolutionizes the online car-buying experience with its sleek design and robust functionality. Users can effortlessly browse through vehicles, enjoying immersive visuals and detailed specifications. Powered by Next.js' dynamic routing, the platform offers advanced search filters, personalized recommendations, and interactive features for an engaging shopping journey. With its minimalist yet captivating interface, CarShop sets a new standard for elegance and efficiency in automotive e-commerce.",
    img: web7,
    nextjs: true,
    reactjs: true,
    tailwindcss: false,
    url: "https://car-shop-seven.vercel.app/",
    gitHub:"https://github.com/Iliaddh/CarShop",
  },
  {
    id: "3",
    projectName:"CryptoApp",
    description: "CryptoApp is a complete responsive react project interacting with real world API and data.",
    img: web6,
    nextjs: false,
    reactjs: true,
    tailwindcss: false,
    url: "https://iliaddh.github.io/CurrencyApp/",
    gitHub:"https://github.com/Iliaddh/CurrencyApp",
  },
    {
      id: "2",
      projectName:"BookApp",
      description: "Book app is a responsive library website with a nice UX design and functionality.",
      img: web5,
      nextjs: false,
      reactjs: true,
      tailwindcss: false,
      url: "https://iliaddh.github.io/bookStore/",
      gitHub:"https://github.com/Iliaddh/bookStore",
    },
  
   
    {
      id: "5",
      projectName:"E-commerce Website",
      description: "This e-commerce website is built with modern and on demand libraries and frameworks in the web development industry. Built with axios, querys, useContext, and APIs , this projects helped me improve my skills in building commercial websites, and gave me an overview of its development process.",
      img: web8,
      nextjs: false,
      reactjs: true,
      underProduction: false,
      tailwindcss: false,
      url: "https://shopping-cart-one-lake.vercel.app",
      gitHub:"https://github.com/Iliaddh/Shopping-Cart",
    },
    
 
    
    
  ];

  export const designTools = [
    {
      id: 1 , 
      name: "Figma",
    },
    {
      id: 2 , 
      name: "Sanity",
  
    },
    {
      id: 3,
      name: "Photoshop"
    },
  ]

  export const languages = [
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "React.js",
    },
    {
      id: 3,
      name: "Next.js",
    },
    {
      id: 4,
      name: "TailwindCSS",
    },
    {
      id: 5,
      name: "HTML",
    },
    {
      id: 6,
      name: "CSS",
    },
  ]


  export const layoutData = [
    {
        id: 1,
        href: "#Home",
        innerText: "Home",
    },
    {
        id: 2,
        href: "#Skills",
        innerText: "Skills",
    },
    {
        id: 3,
        href: "#Projects",
        innerText: "Projects",
    },
    {
        id: 4,
        href: "#Contact",
        innerText: "Contact",
    },
    {
        id: 5,
        href: "https://drive.google.com/file/d/1q2DxExAx68-AJiYQlwOizxIHeF5jMeOl/view?usp=sharing",
        innerText: "Resume",
    },

  ]