import { useEffect, useState } from 'react';

export default function useScrollDirection() {
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) return;

      setDirection(scrollY > lastScrollY ? 'DOWN' : 'UP');
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const handleScroll = () => {
      // to calculate scroll direction in sync with window refresh frame rate
      // ensure scroll direction calc happens after each page render/repaint
      window.requestAnimationFrame(updateScrollDir);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [direction]);

  return { direction };
}
