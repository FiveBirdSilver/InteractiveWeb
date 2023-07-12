import { motion, Variants } from "framer-motion";

interface Props {
  data: string[];
  arrange: string;
}
function StacksContainer(props: Props) {
  const { data, arrange } = props;

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <div className="flex justify-start w-full pl-16 pr-16" style={{ justifyContent: arrange }}>
      {data.map((name, index) => (
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="splash" />
          <motion.div className="stacks_container" variants={cardVariants}>
            <img src={require(`../asset/images/stacks/${name}.png`)} className="w-full rounded-xl" />
            <p className="text-zinc-950 font-extrabold text-center text-3xl font-['Aboreto'] mt-6 mb-1ss">{name}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
export default StacksContainer;
