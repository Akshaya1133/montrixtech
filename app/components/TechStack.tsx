"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaPython,
  FaChevronDown,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiDocker,
  SiGit,
} from "react-icons/si";

import { BsRobot } from "react-icons/bs";

export default function TechStack() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileScreen = window.innerWidth < 1024;
    setIsMobile(isMobileScreen);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const technologies = [
    { name: "React", icon: <FaReact size={50} /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} /> },
    { name: "Flutter", icon: <SiFlutter size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },

    { name: "Java", icon: <FaJava size={50} /> },
    { name: "AWS", icon: <FaAws size={50} /> },
    { name: "Firebase", icon: <SiFirebase size={50} /> },
    { name: "AI", icon: <BsRobot size={50} /> },

    { name: "Python", icon: <FaPython size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "Docker", icon: <SiDocker size={50} /> },
    { name: "Git", icon: <SiGit size={50} /> },
  ];

  // Show all on desktop, limit to 6 on mobile unless expanded
  const itemsToShow = isMobile && !expanded ? 6 : technologies.length;
  const visibleTechs = technologies.slice(0, itemsToShow);
  const hasMore = isMobile && technologies.length > 6;

  return (
    <section className="relative px-5 sm:px-8 lg:px-10 py-12 md:py-14 lg:py-16">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3"
        >
          Technologies We Use
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8"
        >
          Modern technologies powering scalable digital solutions.
        </motion.p>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

          {visibleTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="
                group
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-8
                text-center
                hover:border-[#12B8B0]
                hover:shadow-2xl
                hover:-translate-y-2
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              <div
                className="
                  flex
                  justify-center
                  mb-5
                  text-[#12B8B0]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                {tech.icon}
              </div>

              <h3 className="text-xl font-bold">
                {tech.name}
              </h3>
            </motion.div>
          ))}

        </div>

        {/* View More Button - Only visible on mobile when collapsed */}
        {hasMore && !expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setExpanded(true)}
              className="
                flex
                items-center
                gap-2
                bg-[#12B8B0]
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
                hover:bg-[#0A2E57]
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-lg
              "
            >
              View More Technologies
              <FaChevronDown size={16} />
            </button>
          </motion.div>
        )}

        {/* Collapse Button - Only visible when expanded on mobile */}
        {hasMore && expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setExpanded(false)}
              className="
                flex
                items-center
                gap-2
                bg-gray-600
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
                hover:bg-gray-700
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-lg
              "
            >
              Show Less
              <FaChevronDown size={16} className="rotate-180" />
            </button>
          </motion.div>
        )}

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-gray-600 text-base sm:text-lg">
            And many more technologies tailored to your business requirements...
          </p>
        </motion.div>

      </div>

    </section>
  );
}