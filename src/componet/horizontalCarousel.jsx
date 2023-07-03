import { useState, useEffect, useRef } from "react";

function HorizontalCarousel() {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  const calcDynamicHeight = (objectWidth) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 150;
  };

  const handleDynamicHeight = (ref, setDynamicHeight) => {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  };

  const applyScrollListener = (ref, setTranslateX) => {
    window.addEventListener("scroll", () => {
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    });
  };

  return (
    <div style={{ height: `${dynamicHeight}px` }} className="relative w-full">
      <div className="sticky top-0 w-full h-screen overflow-x-hidden" ref={containerRef}>
        <div
          style={{ transform: `translateX(${translateX}px)` }}
          className="absolute h-full will-change-transform"
          ref={objectRef}
        >
          <div className="relative h-full pl-[100px] flex justify-start items-center">
            <div className="relative h-[300px] w-[500px] bg-slate-50 mr-[75px]" />
            <div className="relative h-[300px] w-[500px] bg-slate-50 mr-[75px]" />
            <div className="relative h-[300px] w-[500px] bg-slate-50 mr-[75px]" />
            <div className="relative h-[300px] w-[500px] bg-slate-50 mr-[75px]" />
            <div className="relative h-[300px] w-[500px] bg-slate-50 mr-[75px]" />
            <div className="relative h-[300px] w-[500px] bg-slate-50 mr-[75px]" />
            <div className="relative h-[300px] w-[500px] bg-slate-50 mr-[75px]" />
            <div className="relative h-[300px] w-[500px] bg-slate-50 mr-[75px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCarousel;
