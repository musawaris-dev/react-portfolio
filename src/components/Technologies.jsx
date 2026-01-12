import React from "react";
import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiNodejsLine,
  RiTailwindCssLine
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiGit
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { Icon: RiReactjsLine, color: "text-[#58C4DC]", name: "React", duration: 2.5 },
  { Icon: SiNextdotjs, color: "text-white", name: "Next.js", duration: 3 },
  { Icon: SiTypescript, color: "text-[#3178C6]", name: "TypeScript", duration: 4 },
  { Icon: RiNodejsLine, color: "text-[#417E38]", name: "Node.js", duration: 3.5 },
  { Icon: SiExpress, color: "text-stone-300", name: "Express", duration: 2.8 },
  { Icon: SiMongodb, color: "text-[#50A84C]", name: "MongoDB", duration: 2 },
  { Icon: SiPostgresql, color: "text-[#336791]", name: "PostgreSQL", duration: 3.2 },
  { Icon: RiTailwindCssLine, color: "text-[#38BDF8]", name: "Tailwind", duration: 5 },
  { Icon: SiPython, color: "text-[#3776AB]", name: "Python", duration: 4.5 },
  { Icon: SiDocker, color: "text-[#2496ED]", name: "Docker", duration: 3.8 },
  { Icon: FaAws, color: "text-[#FF9900]", name: "AWS", duration: 3.3 },
  { Icon: SiRedis, color: "text-[#DC382D]", name: "Redis", duration: 2.7 },
  { Icon: SiGraphql, color: "text-[#E10098]", name: "GraphQL", duration: 3.6 },
  { Icon: SiGit, color: "text-[#F05032]", name: "Git", duration: 2.9 },
  { Icon: DiJava, color: "text-red-700", name: "Java", duration: 4.8 },
  { Icon: TbBrandCpp, color: "text-blue-400", name: "C++", duration: 5.2 },
];

const Technologies = () => {
  return (
    <section className="py-20 px-4" id="tech-stack">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-wider text-stone-500 mb-2">
            My Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            What I <span className="font-bold">Use</span>
          </h2>
          <p className="mt-6 text-lg text-stone-400 max-w-3xl mx-auto">
            I utilize a comprehensive suite of modern technologies to build robust, scalable,
            and high-performance digital solutions.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {technologies.map(({ Icon, color, name, duration }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(duration)}
                whileHover={{ scale: 1.2 }}
                className="relative"
              >
                <Icon className={`text-6xl md:text-7xl ${color} transition-all duration-300`} />

                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-stone-800 text-stone-200 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    {name}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
