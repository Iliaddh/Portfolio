// BackToTopButton.js
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop  = () => {
  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 300,  // You can adjust the duration of the scroll
      smooth: 'easeInOutQuad',  // You can adjust the easing function
    });
  };

  return (
    <button className="back-to-top-button float-right  " onClick={handleScrollToTop}>
      Back to Top
    </button>
  );
};

export default BackToTop ;
