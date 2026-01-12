import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
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
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Featured <span className="font-bold">Projects</span>
          </h2>
          <p className="mt-6 text-lg text-stone-400 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in full-stack development,
            UI/UX design, and AI integration.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {PROJECTS?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-6 p-6 bg-stone-900/30 border border-stone-800 rounded-2xl hover:border-stone-700 transition-all duration-300">
                {/* Project Image */}
                {project.image && (
                  <div className="lg:w-1/3">
                    <div className="relative overflow-hidden rounded-xl aspect-video lg:aspect-square">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                )}

                {/* Project Content */}
                <div className={`flex-1 ${!project.image ? 'lg:w-full' : 'lg:w-2/3'}`}>
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-stone-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-stone-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-stone-800 text-stone-300 rounded-full border border-stone-700"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
