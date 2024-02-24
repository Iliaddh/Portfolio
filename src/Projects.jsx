import React, { useState, useEffect } from 'react';
// import { FaReact, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';
// import tailwind from "../public/Tailwind.png";
import htmlIcon from "../public/icons8-html.svg"
import cssIcon from "../public/icons8-css.svg"
import javascriptsIcon from "../public/icons8-javascript.svg"
import tailwindIcon from "../public/icons8-tailwind-css.svg"
import reactIcon from "../public/icons8-react.svg";
import nextjsIcon from "../public/icons8-nextjs.svg"
function Projects({ card }) {
  const [isMd, setIsMd] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth > 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='justify-center max-w-2xl basis-1/3 flex-1 shadow-2xl p-8 rounded-lg'>
      <div className='py-2'>
        <button className='mx-2 w-24 h-10 rounded-lg bg-gradient-to-r from-cyan-300 to-teal-400 text-white text-center'>
          Description
        </button>
        <button className='mx-2 w-24 h-10 rounded-lg bg-gradient-to-r from-cyan-300 to-teal-400 text-white hover:transform hover:scale-110 transition-transform duration-300 ease-in-out center cursor-pointer text-center'>
          <a href={card.url} target="_blank">Website</a>
        </button>
      </div>

      <p className='p-4 text-lg mb-6'>
        {card.description}
      </p>
      
      <img src={card.img} className='rounded-xl object-cover' />

      <div className='flex justify-center mt-20 rounded-md shadow-lg bg-opacity-50 bg-cyan-500 shadow-cyan-300/50'>
        {isMd && <p className='text-white mt-3 text-lg'>Tools used:</p>}

        <div className='w-3/5 flex justify-center p-2 rounded-md'>
          <img src={javascriptsIcon} className='text-blue-500 size-9 ml-3'></img>
          <img src={htmlIcon} className='text-blue-500 size-9 ml-3'></img>
          <img src={cssIcon} className='text-blue-500 size-9 ml-3'></img>
          {card.tailwindcss && <img src={tailwindIcon} className='text-blue-500 size-9 ml-3'></img>}
          {card.reactjs && <img src={reactIcon} className='text-blue-500 size-9 ml-3 '></img>}
          {card.nextjs && <img src={nextjsIcon} className='text-blue-500 size-9 ml-3 '></img>}
        </div>
      </div>
    </div>
  );
}

export default Projects;
