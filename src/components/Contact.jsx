import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Web Development"
  });

  const subjects = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Backend Development",
    "Consulting",
    "DevOps"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add email service integration here
  };

  return (
    <section className="py-20 px-4 border-t border-stone-800" id="contact">
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
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Let's Work <span className="font-bold">Together</span>
          </h2>
          <p className="mt-6 text-lg text-stone-400 max-w-3xl mx-auto">
            I'm here to help you bring your ideas to life. Whether you need a website, app,
            or just want to chat, let's connect and make something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-600 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-600 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-600 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-300 mb-2">
                  What's on your mind?*
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg text-stone-100 focus:outline-none focus:border-stone-600 transition-colors"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-stone-100 text-stone-900 rounded-full font-medium hover:bg-stone-200 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="p-6 bg-stone-900/50 border border-stone-800 rounded-2xl">
              <h3 className="text-sm uppercase tracking-wider text-stone-500 mb-2">Contact</h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-xl text-stone-100 hover:text-stone-300 transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-stone-900/50 border border-stone-800 rounded-2xl">
              <h3 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-300 hover:text-stone-100 transition-colors"
                >
                  <span className="text-sm">LinkedIn</span>
                  <span className="text-stone-600">→</span>
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-300 hover:text-stone-100 transition-colors"
                >
                  <span className="text-sm">GitHub</span>
                  <span className="text-stone-600">→</span>
                </a>
                {CONTACT.twitter && (
                  <a
                    href={CONTACT.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-stone-300 hover:text-stone-100 transition-colors"
                  >
                    <span className="text-sm">Twitter</span>
                    <span className="text-stone-600">→</span>
                  </a>
                )}
              </div>
            </div>

            {/* Location */}
            {CONTACT.address && (
              <div className="p-6 bg-stone-900/50 border border-stone-800 rounded-2xl">
                <h3 className="text-sm uppercase tracking-wider text-stone-500 mb-2">Location</h3>
                <p className="text-stone-300">{CONTACT.address}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
