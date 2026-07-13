"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Business Website",
      tech: "Next.js, Tailwind CSS",
    },
    {
      title: "Mobile App",
      tech: "Flutter, Firebase",
    },
    {
      title: "ERP System",
      tech: "Java, MySQL",
    },
    {
      title: "E-Commerce Platform",
      tech: "React, Node.js",
    },
  ];

  return (
    <section className="px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Portfolio
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: false }}
            className="
              bg-zinc-900/50
              backdrop-blur-lg
              border
              border-[#12B8B0]/20
              rounded-2xl
              p-8
              hover:border-[#12B8B0]
              hover:shadow-[0_0_25px_rgba(18,184,176,0.35)]
              hover:scale-105
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}