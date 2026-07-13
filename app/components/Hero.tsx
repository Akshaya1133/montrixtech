"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroTechWorld from "./HeroTechWorld";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 px-5 sm:px-8 lg:px-10">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="
          w-[500px]
          sm:w-[650px]
          lg:w-[700px]
          aspect-square
          rounded-full
          blur-[140px]
          bg-[#12B8B0]/15
          "
        />
      </div>

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-2
        items-center
        gap-10
        lg:gap-16
        "
      >

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
            font-black
            leading-[0.9]
            tracking-tight
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-7xl
            xl:text-8xl
            "
          >
            BUILD.
            <br />
            SCALE.
            <br />

            <div className="min-h-[1.15em] overflow-hidden">
              <TypeAnimation
                sequence={[
                  "GROW.",
                  2500,
                  "INNOVATE.",
                  2500,
                  "SUCCEED.",
                  2500,
                  "EXPAND.",
                  2500,
                ]}
                speed={60}
                repeat={Infinity}
                className="block whitespace-nowrap text-[#12B8B0]"
              />
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6"
          >
            <p
              className="
              max-w-xl
              mx-auto
              lg:mx-0
              text-base
              sm:text-lg
              lg:text-xl
              leading-8
              text-gray-700
              "
            >
              Software Solutions for Modern Businesses.
              Web, Mobile, Cloud & AI Applications built to accelerate growth.
            </p>

            <p
              className="
              mt-4
              max-w-xl
              mx-auto
              lg:mx-0
              text-base
              sm:text-lg
              lg:text-xl
              leading-8
              text-gray-700
              "
            >
              We Build Digital Solutions That Drive Business Growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="
            mt-8
            flex
            flex-col
            sm:flex-row
            justify-center
            lg:justify-start
            items-center
            gap-4
            "
          >
            <Link
              href="/contact"
              className="
              w-full
              sm:w-auto
              text-center
              border-2
              border-[#12B8B0]
              text-[#12B8B0]
              hover:bg-[#12B8B0]
              hover:text-white
              px-8
              py-4
              rounded-xl
              transition-all
              duration-300
              "
            >
              Start Project
            </Link>

            <Link
              href="/services"
              className="
              w-full
              sm:w-auto
              text-center
              bg-[#12B8B0]
              hover:bg-[#0A2E57]
              text-white
              px-8
              py-4
              rounded-xl
              shadow-xl
              transition-all
              duration-300
              "
            >
              View Services
            </Link>
          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="
          hidden
          sm:flex
          justify-center
          items-center
          w-full
          "
        >
          <HeroTechWorld />
        </div>

      </div>

    </section>
  );
}