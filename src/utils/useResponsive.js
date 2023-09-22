import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

function useResponsive() {
  const MOBILE_SCREEN_WIDTH = 768;
  const TABLET_SCREEN_WIDTH = 992;

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_SCREEN_WIDTH
  );
  const [isTablet, setIsTablet] = useState(
    window.innerWidth < TABLET_SCREEN_WIDTH
  );
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= TABLET_SCREEN_WIDTH
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < MOBILE_SCREEN_WIDTH);
      setIsTablet(windowWidth < TABLET_SCREEN_WIDTH);
      setIsDesktop(windowWidth >= TABLET_SCREEN_WIDTH);
    }, 250); // Adjust the debounce delay as needed 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
}

export default useResponsive;
