import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HorizontalCarousel from "../componet/horizontalCarousel";

export default function Main() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const TechStack = [
    "javascript",
    "typescript",
    "react",
    "node",
    "nextjs",
    "html",
    "css",
    "scss",
    "tailwind",
    "nginx",
    "gitlabrunner",
    "github",
    "reactquery",
  ];
  // function useParallax(value: MotionValue<number>, distance: number) {
  //   return useTransform(value, [0, 1], [-distance, distance]);
  // }

  // function Image(props: DataProps) {
  //   const { title, image } = props;

  //   const { scrollYProgress } = useScroll({ target: ref });
  //   const y = useParallax(scrollYProgress, 300);

  //   return (
  //     <div
  //       ref={ref}
  //       style={{ backgroundImage: `url(${require(`../asset/image/${image}.jpg`)})` }}
  //       className="relative flex justify-center h-screen snap-start"
  //     >
  //       <motion.h1 style={{ y }} className="text-main font-['Cormorant']">
  //         {title}
  //       </motion.h1>
  //     </div>
  //   );
  // }
  return (
    <div>
      <div
        ref={ref}
        style={{ backgroundImage: `url(${require(`../asset/images/Project_bg_1.jpg`)})` }}
        className="relative flex items-center justify-center h-screen snap-start"
      >
        <h1 className="text-main text-zinc-100 font-['Cormorant']">FIVEBIRDSILVER</h1>
      </div>
      <div
        className="relative w-full min-h-screen snap-start"
        style={{ backgroundImage: `url(${require(`../asset/images/Project_bg_2.jpg`)})` }}
      >
        <HorizontalCarousel data={TechStack} />
      </div>
      <div
        ref={ref}
        style={{ backgroundImage: `url(${require(`../asset/images/Project_bg_2.jpg`)})` }}
        className="relative flex justify-center h-screen snap-start"
      ></div>
      <motion.div className="fixed left-0 right-0 h-1 bg-zinc-100 bottom-10" style={{ scaleX }} />
    </div>
  );
}
