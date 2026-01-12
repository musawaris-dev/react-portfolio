import React from "react";
import { motion } from "framer-motion";
import { EXPERTISE } from "../constants";

const Expertise = () => {
  return (
    <section className="py-20 px-4" id="expertise">
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
            My Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            What I'm <span className="font-bold">Offering</span>
          </h2>
          <p className="mt-6 text-lg text-stone-400 max-w-3xl mx-auto">
            I design and build end-to-end digital products — from intuitive user interfaces to scalable backend systems. 
            My focus is on creating reliable, high-performance solutions that solve real problems and scale with business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE?.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-stone-700 transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-sm font-bold text-stone-400 group-hover:bg-stone-700 group-hover:text-stone-200 transition-all duration-300">
                {service.number}
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3 text-stone-200 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-stone-400 to-stone-600 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

