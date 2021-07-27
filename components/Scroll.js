import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

const Scroll = () => {
  // Creo el state de la flecha para que no se vea (false)
  const [showArrow, setShowArrow] = useState(false);

  // Si el eje "Y" supera los 400 pixeles entonces la flecha se verá (true)
  const checkShowArrow = () => {
    if (!showArrow && window.pageYOffset > 400) {
      setShowArrow(true);
    } else if (showArrow && window.pageYOffset <= 400) {
      setShowArrow(false);
    }
  };

  // Posiciona el scroll al comienzo de la página
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  // Muestra la flecha en el DOM
  if (typeof window !== "undefined") {
    // esta línea es porque la variable window no está definida. Si no pongo el condicional, tira error.
    window.addEventListener("scroll", checkShowArrow);
  }
  return (
    <button
      onClick={scrollToTop}
      className="w-12 md:w-14 fixed bottom-5 right-5"
    >
      {showArrow ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#ef7b0b"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ) : null}
    </button>
  );
};

export default Scroll;
