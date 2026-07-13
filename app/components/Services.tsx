"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Cloud,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive, and high-performance websites built with Next.js, React, and Tailwind CSS.",
      icon: <Globe size={42} />,
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform Android & iOS applications developed using Flutter and modern technologies.",
      icon: <Smartphone size={42} />,
    },
    {
      title: "Custom Software",
      description:
        "ERP systems, CRM platforms, business automation, and enterprise software tailored to your needs.",
      icon: <Code2 size={42} />,
    },
    {
      title: "UI / UX Design",
      description:
        "Beautiful, intuitive, and user-focused interface designs that improve customer experience.",
      icon: <Palette size={42} />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Cloud deployment, AWS infrastructure, DevOps, hosting, security, and maintenance.",
      icon: <Cloud size={42} />,
    },
    {
      title: "Testing & QA",
      description:
        "Comprehensive software testing to ensure quality, performance, security, and reliability.",
      icon: <ShieldCheck size={42} />,
    },
  ];

  return (
<section className="relative px-5 sm:px-8 lg:px-10 py-12 lg:py-14"><div className="max-w-5xl mx-auto">
          {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12"
        >
          End-to-end digital solutions designed to help businesses innovate,
          scale, and succeed.
        </motion.p>

        {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
              className="
                group
                bg-white
                border
                border-gray-200
                rounded-3xl
                p-5
                shadow-sm
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#12B8B0]/10
                  flex
                  items-center
                  justify-center
                  text-[#12B8B0]
                  mb-5
                  group-hover:bg-[#12B8B0]
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >
                {service.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-6 text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}