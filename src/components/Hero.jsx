import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT, PERSONAL_INFO } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  },
};

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Available for Work Badge */}
        {PERSONAL_INFO.availableForWork && (
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-stone-700 bg-stone-900/50 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-stone-300 uppercase tracking-wider">
              Available for Work
            </span>
          </motion.div>
        )}

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
        >
          <span className="text-stone-400">Hello! I'm </span>
          <span className="text-stone-100">{PERSONAL_INFO.name}.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-stone-400 mb-2">
            {PERSONAL_INFO.tagline}
          </p>
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-stone-200 to-stone-400 bg-clip-text text-transparent">
            {PERSONAL_INFO.role}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-stone-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {HERO_CONTENT}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-stone-100 text-stone-900 rounded-full font-medium hover:bg-stone-200 transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 border border-stone-700 text-stone-300 rounded-full font-medium hover:bg-stone-900 transition-all duration-300 hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <div className="flex flex-col items-center gap-2 text-stone-500">
            <span className="text-sm uppercase tracking-wider">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-stone-700 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1 h-2 bg-stone-500 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
