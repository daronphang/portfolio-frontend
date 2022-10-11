import { useEffect, useState } from 'react';

export default function useScrollAmount(elementId) {
  const [scrollAmount, setScrollAmount] = useState(0);

  const handleScroll = () => {
    const element = document.getElementById(elementId)?.getBoundingClientRect();

    if (!element) return;
    const height = element.bottom - element.top;
    const amount = height - (element.bottom - window.innerHeight);

    if (amount > 0) {
      setScrollAmount(Math.min(100, (amount / height).toFixed(4) * 100));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollAmount };
}
