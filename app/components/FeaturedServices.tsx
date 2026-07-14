"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Modern websites built with Next.js and React.",
    icon: "web",
  },
  {
    title: "Mobile Apps",
    description: "Android & iOS apps with Flutter.",
    icon: "mobile",
  },
  {
    title: "AI Solutions",
    description: "Automation and smart systems for business efficiency.",
    icon: "ai",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, DevOps, AWS deployment and maintenance.",
    icon: "cloud",
  },
] as const;

type Service = (typeof services)[number];

type ServiceIconType = Service["icon"];

function ServiceIcon({ icon }: { icon: ServiceIconType }) {
  switch (icon) {
    case "web":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="#E6FBF9" />
          <rect x="18" y="26" width="52" height="38" rx="5" fill="#fff" stroke="#0A2E57" strokeWidth="3" />
          <rect x="18" y="26" width="52" height="10" rx="5" fill="#0A2E57" />
          <circle cx="24" cy="31" r="1.6" fill="#fff" />
          <circle cx="29" cy="31" r="1.6" fill="#fff" />
          <circle cx="34" cy="31" r="1.6" fill="#fff" />
          <path d="M28 48L23 53L28 58" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 48L47 53L42 58" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M37 45L33 61" stroke="#0A2E57" strokeWidth="3" strokeLinecap="round" />
          <circle cx="66" cy="62" r="17" fill="#12B8B0" />
          <path d="M60 62L64.5 66.5L73 57" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="#E6FBF9" />
          <rect x="33" y="16" width="34" height="58" rx="8" fill="#fff" stroke="#0A2E57" strokeWidth="3" />
          <rect x="39" y="24" width="10" height="10" rx="2.5" fill="#12B8B0" />
          <rect x="51" y="24" width="10" height="10" rx="2.5" fill="#12B8B0" fillOpacity="0.5" />
          <rect x="39" y="36" width="10" height="10" rx="2.5" fill="#12B8B0" fillOpacity="0.5" />
          <rect x="51" y="36" width="10" height="10" rx="2.5" fill="#12B8B0" />
          <rect x="39" y="48" width="22" height="8" rx="2.5" fill="#0A2E57" fillOpacity="0.15" />
          <circle cx="50" cy="68" r="2.6" fill="#0A2E57" />
          <circle cx="68" cy="66" r="16" fill="#12B8B0" />
          <rect x="61" y="59" width="14" height="14" rx="3" stroke="#fff" strokeWidth="2.5" />
          <path d="M64 66H72" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="#E6FBF9" />
          <path d="M50 16V26" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 74V84" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 50H26" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M74 50H84" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M26 26L33 33" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M67 67L74 74" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M74 26L67 33" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M33 67L26 74" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="50" r="24" fill="#fff" stroke="#0A2E57" strokeWidth="2.5" />
          <rect x="38" y="38" width="24" height="24" rx="6" fill="#12B8B0" />
          <text x="50" y="55" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily="Arial, sans-serif">AI</text>
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42" fill="#E6FBF9" />
          <path
            d="M38 52C33 52 29 48 29 43C29 38 33 34 38 34C39 34 39.9 34.2 40.7 34.4C42.6 30.6 46.5 28 51 28C56.6 28 61.3 32 62.6 37.3C67.3 38 71 42.1 71 47C71 52.5 66.5 57 61 57H39C38.6 57 38.3 56.9 38 56.8"
            stroke="#12B8B0"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <path d="M50 44V64" stroke="#0A2E57" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M43 51L50 44L57 51" stroke="#0A2E57" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="34" y="66" width="14" height="16" rx="2.5" fill="#0A2E57" />
          <rect x="37" y="70" width="8" height="2" rx="1" fill="#fff" />
          <rect x="37" y="75" width="8" height="2" rx="1" fill="#fff" />
          <rect x="52" y="66" width="14" height="16" rx="2.5" fill="#0A2E57" fillOpacity="0.75" />
          <rect x="55" y="70" width="8" height="2" rx="1" fill="#fff" />
          <rect x="55" y="75" width="8" height="2" rx="1" fill="#fff" />
          <circle cx="70" cy="68" r="10" fill="#12B8B0" />
          <path d="M65.5 68L68.5 71L74.5 65" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FeaturedServices() {
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

          {services.map((service, index) => {
            return (
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
                  rounded-3xl
                  p-8
                  text-center
                  hover:border-[#12B8B0]/50
                  hover:shadow-2xl
                  hover:-translate-y-3
                  hover:scale-[1.02]
                  transition-all
                  duration-500
                "
              >
                <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center">
                  <ServiceIcon icon={service.icon} />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-[#12B8B0]">
                  {service.title}
                </h3>

                <p className="mx-auto max-w-xs text-gray-600 leading-8 text-base mb-8">
                  {service.description}
                </p>

                <span className="mx-auto block h-1 w-14 rounded-full bg-[#12B8B0]" />
              </motion.div>
            );
          })}

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