"use client";

import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    setShowButton(position > 100);
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => window.removeEventListener("scroll", handleVisibleButton);
  }, [scrollPosition]); // Dependencies include scrollPosition to ensure updates

  return (
    <IconContext.Provider
      value={{
        className: `scroll ${showButton ? "show-button" : "hide-button"}`,
      }}
    >
      {showButton && <BsFillArrowUpSquareFill onClick={handleScrollUp} />}
    </IconContext.Provider>
  );
};

export default BackToTop;
