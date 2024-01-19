// BackToTopButton.js
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from 'react-icons/io';

const BackToTop  = () => {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 300,  // You can adjust the duration of the scroll
      smooth: 'easeInOutQuad',  // You can adjust the easing function
    });
  };

  return (
    <button
    className="back-to-top-button fixed bottom-0 right-0 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full p-3 m-6"
    onClick={handleScrollToTop}
  >
    <IoIosArrowUp className='text-white' />
  </button>
  );
};

export default BackToTop ;
