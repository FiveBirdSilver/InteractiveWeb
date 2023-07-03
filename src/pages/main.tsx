import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
// import Stack from "../componet/stack";
interface DataProps {
  title?: string;
  image: string;
}

export default function Main() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  function Image(props: DataProps) {
    const { title, image } = props;

    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
      <div
        ref={ref}
        style={{ backgroundImage: `url(${require(`../asset/image/${image}.jpg`)})` }}
        className="relative flex justify-center h-screen snap-center"
      >
        <motion.h1 style={{ y }} className="text-main font-['Cormorant']">
          {title}
        </motion.h1>
      </div>
    );
  }

  return (
    <>
      <Image title="FIVEBIRDSILVER" image="Project_bg_1" />
      <div
        ref={ref}
        style={{ backgroundImage: `url(${require(`../asset/image/Project_bg_2.jpg`)})` }}
        className="relative flex justify-center h-screen snap-center"
      >
        <div className="flex items-center justify-center ">{/* <Stack /> */}</div>
      </div>
      <motion.div className="fixed left-0 right-0 h-1 bg-white bottom-10" style={{ scaleX }} />
    </>
  );
}
