import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const Loco = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => scroll.destroy(); // Cleanup on component unmount
  }, []);

  return (
    <div data-scroll-container>
      <section data-scroll-section>
        <h1 data-scroll data-scroll-speed="1">Hello, Locomotive Scroll!</h1>
        
      </section>
    </div>
  );
};

export default Loco;
