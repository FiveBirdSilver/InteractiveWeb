import { useState, useEffect, useRef } from "react";
import Tags from "./stacksTag";

interface Props {
  data: {
    name: string;
    content: string;
    link: string;
    stack: string[];
    image: string;
  }[];
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
    handleDynamicHeight(objectRef);
    applyScrollListener(containerRef);
  }, []);

  return (
    <div style={{ height: `${dynamicHeight}px` }} className="relative w-full ">
      <div className="sticky top-0 w-full h-screen overflow-x-hidden " ref={containerRef}>
        <div
          style={{ transform: `translateX(${translateX}px)` }}
          className="absolute h-full will-change-transform "
          ref={objectRef}
        >
          <div className="relative flex items-center justify-start h-full ">
            {data.map((v, index) => (
              <div
                className="flex items-center justify-center w-screen h-screen pr-12 border-r-[1px] border-neutral-400"
                key={index}
              >
                <div className="flex h-2/3">
                  <img src={require(`../asset/images/projects/${v.image}.png`)} className="w-full" />
                </div>
                <div className="flex flex-col h-2/3 w-[600px] gap-10">
                  <h1 className="text-zinc-950 text-start font-extrabold text-7xl font-['watermelonSalad'] mt-6 mb-1">
                    {v.name}
                  </h1>
                  <p className="text-zinc-950 text-start text-3xl font-['watermelonSalad'] mt-6 mb-1">{v.content}</p>
                  <Tags tag={v.stack} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// #fffd13
// relative h-full pl-[100px] flex justify-start items-center

export default HorizontalCarousel;
