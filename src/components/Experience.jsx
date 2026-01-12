import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section className="py-20 px-4" id="experience">
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
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Work <span className="font-bold">Experience</span>
          </h2>
          <p className="mt-6 text-lg text-stone-400 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in full-stack development,
            UI/UX design, and AI integration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-stone-800"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {EXPERIENCES?.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot - Desktop Only */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-stone-100 rounded-full border-4 border-stone-950 z-10"></div>

                {/* Date */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-4 py-2 bg-stone-900 border border-stone-800 rounded-full"
                  >
                    <p className="text-sm font-medium text-stone-300">{experience.period || experience.year}</p>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 bg-stone-900/50 border border-stone-800 rounded-2xl hover:border-stone-700 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-stone-100 mb-1">
                      {experience.title || experience.role}
                    </h3>
                    <p className="text-stone-400 mb-4">
                      {experience.company} · {experience.type || experience.location || 'Full-time'}
                    </p>
                    <p className="text-stone-400 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    {experience.achievements && experience.achievements.length > 0 && (
                      <div className="mb-4 space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-stone-500 mt-1">•</span>
                            <p className="text-sm text-stone-400">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-stone-800 text-stone-300 rounded-full border border-stone-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

