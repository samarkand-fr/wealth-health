import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

/**
 * A custom hook for responsive design that detects the current device screen size.
 *
 * @returns {Object} An object containing flags for mobile, tablet, and desktop screen sizes.
 */
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
    /**
     * Handle the window resize event using debounce for performance optimization.
     */
    const handleResize = debounce(() => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < MOBILE_SCREEN_WIDTH);
      setIsTablet(windowWidth < TABLET_SCREEN_WIDTH);
      setIsDesktop(windowWidth >= TABLET_SCREEN_WIDTH);
    }, 250); // Adjust the debounce delay as needed

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
}

export default useResponsive;
