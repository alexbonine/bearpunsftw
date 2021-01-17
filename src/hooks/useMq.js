import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { tablet, desktop } from "styles/mq";

const calculate = (screenWidth) => ({
  isMobile: screenWidth < tablet,
  isTablet: screenWidth >= tablet,
  isTabletOnly: screenWidth >= tablet && screenWidth < desktop,
  isDesktop: screenWidth >= desktop,
  isNotDesktop: screenWidth < desktop,
});

const useMq = () => {
  const screenWidth = useWindowWidth();
  const [state, setState] = useState(calculate(screenWidth));

  useEffect(() => {
    setState(calculate(screenWidth));
  }, [screenWidth]);

  return state;
};

export default useMq;
