import React, { useEffect } from 'react';

const useScrollPosition = () => {
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      console.log(scrollPosition);
      window.scrollTo(0, parseInt(scrollPosition));
      console.log('position');
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);
};

export default useScrollPosition;
