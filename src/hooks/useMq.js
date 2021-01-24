import { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { tablet, desktop, extraLarge } from "styles/mq";

const calculate = (screenWidth, screenHeight) => ({
  isMobile: screenWidth < tablet,
  isTablet: screenWidth >= tablet,
  isTabletOnly: screenWidth >= tablet && screenWidth < desktop,
  isDesktop: screenWidth >= desktop,
  isNotDesktop: screenWidth < desktop,
  isExtraLarge: screenWidth >= extraLarge,
  screenHeight,
  screenWidth,
});

const useMq = () => {
  const [screenWidth, screenHeight] = useWindowSize();
  const [state, setState] = useState(calculate(screenWidth, screenHeight));

  useEffect(() => {
    setState(calculate(screenWidth, screenHeight));
  }, [screenWidth, screenHeight]);

  return state;
};

export default useMq;
