"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaPython,
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

          {technologies.map((tech, index) => (
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