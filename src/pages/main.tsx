import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HorizontalCarousel from "../componet/horizontalCarousel";
import StacksContainer from "../componet/stacksContainer";

export default function Main() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const TechStack = ["javascript", "typescript", "html", "react", "nextjs"];
  const TechStack_2 = ["node", "nginx", "gitlabrunner", "github"];
  const TechStack_3 = ["reactquery", "css", "scss", "tailwind"];

  const Projects = [
    {
      name: "TousFlux",
      content: "기업 내 수집한 데이터를 토대로 분석한 결과 기반의 대시보드",
      stack: [
        "nextjs",
        "react",
        "Javascript",
        "TypeScript",
        "scss",
        "html",
        "recoil",
        "gitlab-runner",
        "nodejs",
        "Nginx",
        "Pm2",
        "GCP",
      ],
      link: "https://www.notion.so/fivebirdsilver/WORK-EXPERIENCE-be1828ad44764f21922dd7c90b7cb867?pvs=4",
      image: "project1",
    },
    {
      name: "YEH",
      content: "익명성 보장을 기반으로 글을 통해 자신의 목소리를 낼수 있는 사내 소셜 네트워크 서비스",
      stack: ["nextjs", "react", "Javascript", "scss", "html", "recoil", "nodejs"],
      link: "https://www.notion.so/fivebirdsilver/YEH-b9aaac87b34f40349111cec9bd185a76?pvs=4",
      image: "project2",
    },

    {
      name: "KISA",
      content: "온라인에 실시간으로 생산되는 서비스 장애 데이터를 수집·분석하여 신속한 대응이 가능한 모니터링 서비스",
      stack: ["Javascript", "css", "html", "jquery", "Asp.net"],
      link: "https://www.notion.so/fivebirdsilver/KISA-8662f491d5a74295976d721d637ca2b1?pvs=4",
      image: "project3",
    },
    {
      name: "PublicData",
      content: "익명성 보장을 기반으로 글을 통해 자신의 목소리를 낼수 있는 사내 소셜 네트워크 서비스",
      stack: ["react-native", "react", "Javascript", "scss", "html", "expo"],
      link: "https://www.notion.so/fivebirdsilver/55f399842f2d4b96885a8b2fae174318?pvs=4",
      image: "project4",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <>
      <div
        ref={ref}
        // style={{ backgroundImage: `url(${require(`../asset/images/Project_bg_1.jpg`)})` }}
        className="relative flex items-center justify-center h-screen snap-start bg-bgGreen"
      >
        <h1 className="text-main text-zinc-900 font-['Cormorant']">FIVEBIRDSILVER</h1>
      </div>
      <div
        ref={ref}
        className="relative flex flex-col items-center justify-center w-full h-screen pr-24 snap-start bg-bgBeige"
      ></div>
      <div
        ref={ref}
        className="relative flex flex-col items-center justify-center w-full min-h-screen snap-start bg-bgBeige"
      >
        <h1 className="stack_title">STACKS</h1>
        <StacksContainer data={TechStack} arrange="flex-start" />
        <StacksContainer data={TechStack_2} arrange="flex-end" />
        <StacksContainer data={TechStack_3} arrange="flex-start" />
        <h2 className="stack_title" style={{ fontSize: "300px" }}>
          *
        </h2>
      </div>
      <div className="relative w-full min-h-screen snap-start bg-bgPink">
        <HorizontalCarousel data={Projects} />
      </div>
      <div
        ref={ref}
        style={{ backgroundImage: `url(${require(`../asset/images/Project_bg_1.jpg`)})` }}
        className="relative flex items-center justify-center h-screen snap-start bg-bgGreen"
      ></div>
      <motion.div className="fixed left-0 right-0 h-1 bg-zinc-900 bottom-10" style={{ scaleX }} />
    </>
  );
}
