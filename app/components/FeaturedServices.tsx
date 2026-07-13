"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedServices() {
  const services = [
    {
      title: "Web Development",
      description: "Modern websites built with Next.js and React.",
    },
    {
      title: "Mobile Apps",
      description: "Android & iOS apps with Flutter.",
    },
    {
      title: "AI Solutions",
      description: "AI-powered automation and smart systems.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, DevOps, AWS deployment and maintenance.",
    },
  ];

  return (
    <section className="relative px-5 sm:px-8 lg:px-10 py-12 lg:py-16">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Why Businesses Choose
          <span className="text-[#12B8B0]"> MontrixTech</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10"
        >
          Delivering innovative digital solutions for startups,
          enterprises, and growing businesses.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                p-6
                hover:border-[#12B8B0]
                hover:shadow-2xl
                hover:-translate-y-3
                hover:scale-[1.02]
                transition-all
                duration-500
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-[#12B8B0]">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-4"
        >
          <Link
            href="/services"
            className="
              inline-block
              px-8
              py-4
              rounded-xl
              bg-[#12B8B0]
              text-white
              shadow-lg
              hover:bg-[#0A2E57]
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            View All Services
          </Link>
        </motion.div>

      </div>

    </section>
  );
}