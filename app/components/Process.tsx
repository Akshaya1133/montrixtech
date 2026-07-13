"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discuss",
      description:
        "We understand your business goals and project requirements.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our team creates intuitive UI/UX and system architecture.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "We build scalable, secure, and high-performance solutions.",
    },
    {
      number: "04",
      title: "Deploy",
      description:
        "Launch, monitor, and support your product for success.",
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
          Our Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10"
        >
          A streamlined approach that turns your ideas into reality.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
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
                p-8
                text-center
                hover:border-[#12B8B0]
                hover:shadow-2xl
                hover:-translate-y-3
                hover:scale-[1.02]
                transition-all
                duration-500
              "
            >
              <div className="text-5xl font-bold text-[#12B8B0] mb-4">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}