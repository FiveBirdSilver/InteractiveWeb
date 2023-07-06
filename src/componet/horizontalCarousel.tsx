import { useState, useEffect, useRef } from "react";

interface Props {
  data: string[];
}

function HorizontalCarousel(props: Props) {
  const { data } = props;
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  const calcDynamicHeight = (objectWidth: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 150;
  };

  const handleDynamicHeight = (ref: any) => {
    const objectWidth = ref?.current?.scrollWidth; // 가로 스크롤 페이지의 총 넓이
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  };

  const applyScrollListener = (ref: any) => {
    window.addEventListener("scroll", () => {
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    });
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    handleDynamicHeight(objectRef);
    applyScrollListener(containerRef);
  }, []);

  return (
    <div style={{ height: `${dynamicHeight * 1.1}px` }} className="relative w-full">
      <div className="sticky top-0 w-full h-screen overflow-x-hidden" ref={containerRef}>
        <div
          style={{ transform: `translateX(${translateX}px)` }}
          className="absolute h-full will-change-transform"
          ref={objectRef}
        >
          <div className="fixed w-full bg-black h-3/5">
            <h1 className="stack_title">STACKS</h1>
          </div>
          <div className="relative flex items-end justify-start h-full pb-10 pl-24">
            {data.map((name, index) => (
              <div className="project_container" key={index}>
                <img src={require(`../asset/images/stacks/${name}.png`)} className="w-full rounded-xl" />
                <p className="text-zinc-950 font-extrabold text-center text-3xl font-['Aboreto'] mt-6 mb-1ss">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCarousel;
