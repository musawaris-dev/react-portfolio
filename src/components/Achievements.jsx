import React from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Achievements
      </motion.h2>
      <div>
        {ACHIEVEMENTS?.map((achievement, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{achievement.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">{achievement.title}</h3>
              <p className="mb-4 text-stone-400 text-justify">
                {achievement.description}
              </p>
              {achievement.technologies && achievement.technologies.length > 0 && (
                <div className="flex flex-wrap">
                  {achievement.technologies.map((technology, techIndex) => (
                    <span
                      className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 text-nowrap"
                      key={techIndex}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
