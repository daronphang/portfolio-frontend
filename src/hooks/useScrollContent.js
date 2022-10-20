import { useEffect, useState } from 'react';

export default function useScrollContent(singleUse) {
  const [ref, setRef] = useState(null);
  const [scrollContent, setScrollContent] = useState(0);

  const handleScroll = () => {
    if (!ref) return;
    const bounds = ref.getBoundingClientRect();
    const height = bounds.bottom - bounds.top;
    const content = height - (bounds.bottom - window.innerHeight);

    if (!singleUse || (singleUse && scrollContent > 0)) {
      setScrollContent(Math.min(100, (content / height).toFixed(4) * 100));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  const result = [setRef, scrollContent];

  // supports object destructuring
  result.ref = result[0];
  result.scrollContent = result[1];

  return result;
}
