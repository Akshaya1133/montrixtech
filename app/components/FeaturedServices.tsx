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
        <svg viewBox="0 0 80 80" className="h-12 w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="60" height="40" rx="6" stroke="#12B8B0" strokeWidth="3" fill="#FFFFFF" />
          <path d="M18 25H62" stroke="#0A2E57" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 33H32" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 33H56" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="45" r="10" fill="#12B8B0" />
          <path d="M46 42L50 46L54 42" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46 46L50 42L54 46" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 61H52" stroke="#0A2E57" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 80 80" className="h-12 w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="10" width="32" height="56" rx="8" stroke="#12B8B0" strokeWidth="3" fill="#fff" />
          <rect x="30" y="19" width="20" height="8" rx="2" fill="#12B8B0" />
          <rect x="30" y="31" width="12" height="10" rx="2" fill="#12B8B0" />
          <rect x="44" y="31" width="6" height="10" rx="2" fill="#12B8B0" />
          <rect x="30" y="45" width="20" height="10" rx="2" fill="#12B8B0" />
          <circle cx="40" cy="63" r="2.5" fill="#0A2E57" />
          <circle cx="54" cy="54" r="8" fill="#12B8B0" />
          <path d="M52 52L56 52" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M54 50L54 56" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 80 80" className="h-12 w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="40" height="40" rx="10" fill="#12B8B0" />
          <path d="M28 28H52" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M34 35H46" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M28 45H52" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M23 40H17" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M63 40H57" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 23V17" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 63V57" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 30L24 24" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 30L56 24" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 50L24 56" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 50L56 56" stroke="#12B8B0" strokeWidth="3" strokeLinecap="round" />
          <text x="40" y="46" textAnchor="middle" fill="#0A2E57" fontSize="16" fontWeight="700">AI</text>
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 80 80" className="h-12 w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 45C22 45 20.5 43.5 20.5 41.5C20.5 39.5 22 38 24 38H26C26 36.5 27.5 35 29.5 35C31 35 32.2 35.8 32.8 37C33.9 36.2 35.5 35.5 37.3 35.5C40.3 35.5 42.7 37.8 43 40.7C45 41 46.5 42.8 46.5 44.9C46.5 47.4 44.4 49.5 41.9 49.5H27C25.9 49.5 24.7 48.9 24 48Z" fill="#12B8B0" />
          <path d="M25 44H42" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 54H40" stroke="#0A2E57" strokeWidth="4" strokeLinecap="round" />
          <rect x="28" y="54" width="24" height="12" rx="3" fill="#0A2E57" />
          <path d="M36 50V54" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M44 50V54" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
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
            const Icon = service.Icon as IconType;
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
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-[#12B8B0]/15 bg-[#12B8B0]/10 text-[#12B8B0] shadow-lg">
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