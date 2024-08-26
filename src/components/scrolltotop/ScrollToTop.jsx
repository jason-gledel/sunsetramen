import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Défilement vers l'élément correspondant à l'ancre
      const element = document.getElementById(hash.substring(1)); // Retire le '#' pour obtenir l'id
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Défilement en haut de la page si pas d'ancre
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
