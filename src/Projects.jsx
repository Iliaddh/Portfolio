import React, { useState, useEffect } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import tailwind from "../public/Tailwind.png";

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
        {isMd && <p className='text-white mt-1.5 text-lg'>Tools used:</p>}

        <div className='w-3/5 flex justify-center p-2 rounded-md'>
          <div className='mx-3'><FaJs className='text-amber-300 size-7'></FaJs></div>
          <div className='mx-3'><FaHtml5 className='text-orange-500 size-7'></FaHtml5></div>
          <div className='mx-3'><FaCss3 className='text-blue-500 size-7'></FaCss3></div>

          {card.tailwindcss && <div className='mx-3'><img src={tailwind} className='size-7 max-w-lg'></img></div>}
          {card.reactjs && <div className='mx-3'><FaReact className='text-cyan-500 size-7'></FaReact></div>}
          {card.nextjs && <span>Next.js</span>}
        </div>
      </div>
    </div>
  );
}

export default Projects;
