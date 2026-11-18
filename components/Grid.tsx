import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const technologies = [
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", Icon: SiFramer, color: "#FFFFFF" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68A063" },
  { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git & GitHub", Icon: FaGithub, color: "#FFFFFF" },
  { name: "OpenAI API", Icon: SiOpenai, color: "#FFFFFF" },
];

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      <StackSection />
    </section>
  );
};

export default Grid;

const StackSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pb-20" aria-labelledby="stack-heading">
      <h2 id="stack-heading" className="heading">
        My <span className="text-purple">stack</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#C1C2D3] md:text-base">
        Tools and technologies I use to bring ideas to life.
      </p>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {technologies.map(({ name, Icon, color }, index) => (
          <motion.div
            key={name}
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: shouldReduceMotion ? 0 : index * 0.045,
            }}
            whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.04 }}
            className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#080B24]/80 px-3 py-5 shadow-[0_0_24px_rgba(101,60,255,0.04)] transition-colors hover:border-purple/50 hover:bg-[#10132E]"
          >
            <motion.span
              animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: index * 0.12,
                ease: "easeInOut",
              }}
              className="text-3xl transition-[filter] group-hover:drop-shadow-[0_0_10px_rgba(203,172,249,0.6)]"
              style={{ color }}
              aria-hidden="true"
            >
              <Icon />
            </motion.span>
            <span className="text-center text-xs font-medium text-[#C1C2D3] transition-colors group-hover:text-white sm:text-sm">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
