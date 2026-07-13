"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Cloud,
  Smartphone,
  Database,
} from "lucide-react";

export default function HeroTechWorld() {
  const easeInOut = [0.45, 0, 0.55, 1] as const;

  // Shared animations
  const floatCenter = {
    animate: {
      y: [0, -15, 0],
      rotate: [-0.5, 0.5, -0.5],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const floatLaptop = {
    animate: {
      y: [0, -18, 0],
      rotate: [-1, 1, -1],
      transition: {
        duration: 5.5,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const floatCloud = {
    animate: {
      y: [0, -22, 0],
      x: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const pulseDot = {
    animate: {
      opacity: [0.3, 0.8, 0.3],
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* ========== MOBILE VERSION (< 640px) ========== */}
      <div className="block sm:hidden w-full">
        <div className="relative w-[90vw] max-w-[320px] h-[240px] mx-auto">
          {/* Mobile Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[50%] aspect-square bg-[#12B8B0]/10 blur-[60px] rounded-full" />
          </div>

          {/* Mobile Center Card */}
          <motion.div
            {...floatCenter}
            className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 z-20 w-full"
          >
            <div className="w-[70%] mx-auto">
              {/* Glow layer */}
              <div className="absolute inset-0 bg-[#12B8B0]/8 rounded-[30px] blur-xl translate-y-2" />
              
              {/* Main card */}
              <div className="relative bg-white rounded-[28px] shadow-[0_15px_40px_rgba(15,23,42,0.08)] border border-[#12B8B0]/10 p-8 flex items-center justify-center">
                <img
                  src="/images/TECH-logo.png"
                  alt="MontrixTech"
                  className="w-[60%] h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Decorative Cloud Icon - Subtle */}
          <motion.div
            {...floatCloud}
            className="absolute top-[5%] right-[5%] opacity-30"
          >
            <Cloud className="w-8 h-8 text-[#12B8B0]" />
          </motion.div>

          {/* Mobile Decorative Monitor Icon - Subtle */}
          <motion.div
            {...floatLaptop}
            className="absolute bottom-[5%] left-[5%] opacity-30"
          >
            <Monitor className="w-8 h-8 text-[#12B8B0]" />
          </motion.div>
        </div>
      </div>

      {/* ========== TABLET VERSION (640px - 1024px) ========== */}
      <div className="hidden sm:block lg:hidden w-full">
        <div className="relative w-[85vw] max-w-[500px] aspect-[560/460] mx-auto">
          {/* Tablet Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[55%] aspect-square bg-[#12B8B0]/10 blur-[80px] rounded-full" />
          </div>

          {/* Tablet Connection Lines - Minimal */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[33.7%] left-[50.9%] w-[21.4%] h-[2px] bg-[#12B8B0]/15 rounded-full" />
            <div className="absolute top-[59.8%] left-[63.4%] w-[2px] h-[13%] bg-[#12B8B0]/15 rounded-full" />
          </div>

          {/* Tablet Center Card */}
          <motion.div
            {...floatCenter}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="absolute w-[40cqw] h-[31.3cqh] bg-white rounded-[36px] shadow-xl translate-y-3" />
            <div className="absolute w-[37.1cqw] h-[27.8cqh] bg-[#12B8B0]/8 rounded-[30px] blur-xl translate-x-1.5 translate-y-1.5" />
            <div className="relative w-[37.1cqw] h-[24.3cqh] bg-white rounded-[28px] shadow-[0_15px_40px_rgba(15,23,42,0.08)] border border-[#12B8B0]/10 flex items-center justify-center">
              <img
                src="/images/TECH-logo.png"
                alt="MontrixTech"
                className="w-[25.7cqw] h-auto object-contain"
              />
            </div>
            <div className="absolute left-1/2 top-full -translate-x-1/2 mt-1 w-[31.4cqw] h-[3px] bg-white rounded-full shadow-md" />
          </motion.div>

          {/* Tablet Laptop */}
          <motion.div
            {...floatLaptop}
            className="absolute top-[8.7%] left-[14.3%]"
          >
            <div className="w-[37.1cqw] h-[31.3cqh] bg-white rounded-3xl shadow-xl p-2">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0A2E57] to-[#12B8B0] relative">
                <div className="absolute top-[14.3%] left-[9.1%] w-[14.3cqw] h-[1.7cqh] bg-white/30 rounded-full" />
                <div className="absolute top-[35.7%] left-[9.1%] w-[20cqw] h-[1.7cqh] bg-white/20 rounded-full" />
                <div className="absolute top-[57.1%] left-[9.1%] w-[11.4cqw] h-[1.7cqh] bg-white/20 rounded-full" />
                <Monitor className="absolute bottom-[14.3%] right-[9.1%] w-[7.1cqw] h-[8.7cqh] text-white" />
              </div>
            </div>
            <div className="w-[40cqw] h-[3px] bg-white rounded-full shadow-lg mx-auto -mt-[1px]" />
          </motion.div>

          {/* Tablet Cloud */}
          <motion.div
            {...floatCloud}
            className="absolute top-[8.7%] right-[11.4%]"
          >
            <Cloud className="w-[7.1cqw] h-[8.7cqh] text-[#12B8B0] mx-auto mb-1" />
            <div className="space-y-1">
              <div className="w-[17.1cqw] h-[5.2cqh] bg-white rounded-xl shadow-md" />
              <div className="w-[17.1cqw] h-[5.2cqh] bg-white rounded-xl shadow-md" />
              <div className="w-[17.1cqw] h-[5.2cqh] bg-white rounded-xl shadow-md" />
            </div>
          </motion.div>

          {/* Tablet Decorative Dot */}
          <motion.div
            {...pulseDot}
            className="absolute top-[30%] right-[15%] w-2 h-2 bg-[#12B8B0] rounded-full"
          />
        </div>
      </div>

      {/* ========== DESKTOP VERSION (> 1024px) ========== */}
      <div className="hidden lg:block w-full">
        <div className="relative w-[90vw] max-w-[560px] aspect-[560/460] mx-auto">
          <div className="[container-type:size] absolute inset-0 overflow-visible">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[60.7cqw] aspect-square bg-[#12B8B0]/6 blur-[50px] sm:blur-[70px] md:blur-[90px] rounded-full" />
            </div>

            {/* CONNECTION LINES */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[33.7%] left-[50.9%] w-[21.4%] h-[2px] bg-[#12B8B0]/15 rounded-full" />
              <div className="absolute top-[59.8%] left-[63.4%] w-[2px] h-[13%] bg-[#12B8B0]/15 rounded-full" />
              <div className="absolute bottom-[31.5%] left-[50%] w-[19.6%] h-[2px] bg-[#12B8B0]/15 rounded-full" />
              <div className="absolute bottom-[31.5%] right-[37.5%] w-[17.9%] h-[2px] bg-[#12B8B0]/15 rounded-full" />
            </div>

            {/* CENTER PLATFORM */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [-0.5, 0.5, -0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              {/* Bottom layer */}
              <div className="absolute w-[40cqw] h-[31.3cqh] bg-white rounded-[36px] shadow-xl translate-y-3 sm:translate-y-4 md:translate-y-6" />

              {/* Glow layer */}
              <div className="absolute w-[37.1cqw] h-[27.8cqh] bg-[#12B8B0]/8 rounded-[30px] blur-xl translate-x-1.5 translate-y-1.5 sm:translate-x-2 sm:translate-y-2 md:translate-x-3 md:translate-y-3" />

              {/* Main card */}
              <div className="relative w-[37.1cqw] h-[24.3cqh] bg-white rounded-[28px] shadow-[0_15px_40px_rgba(15,23,42,0.08)] border border-[#12B8B0]/10 flex items-center justify-center">
                <img
                  src="/images/TECH-logo.png"
                  alt="MontrixTech"
                  className="w-[25.7cqw] h-auto object-contain"
                />
              </div>

              {/* Isometric base */}
              <div className="absolute left-1/2 top-full -translate-x-1/2 mt-1 sm:mt-1.5 md:mt-2 w-[31.4cqw] h-[3px] bg-white rounded-full shadow-md" />
            </motion.div>

            {/* LAPTOP */}
            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[8.7%] left-[14.3%]"
            >
              <div className="w-[37.1cqw] h-[31.3cqh] bg-white rounded-3xl shadow-xl p-2 sm:p-3 md:p-4">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0A2E57] to-[#12B8B0] relative">
                  <div className="absolute top-[14.3%] left-[9.1%] w-[14.3cqw] h-[1.7cqh] bg-white/30 rounded-full" />
                  <div className="absolute top-[35.7%] left-[9.1%] w-[20cqw] h-[1.7cqh] bg-white/20 rounded-full" />
                  <div className="absolute top-[57.1%] left-[9.1%] w-[11.4cqw] h-[1.7cqh] bg-white/20 rounded-full" />
                  <Monitor className="absolute bottom-[14.3%] right-[9.1%] w-[7.1cqw] h-[8.7cqh] text-white" />
                </div>
              </div>
              <div className="w-[40cqw] h-[3px] bg-white rounded-full shadow-lg mx-auto -mt-[1px] sm:-mt-1" />
            </motion.div>

            {/* CLOUD INFRASTRUCTURE */}
            <motion.div
              animate={{
                y: [0, -22, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[8.7%] right-[11.4%]"
            >
              <Cloud className="w-[7.1cqw] h-[8.7cqh] text-[#12B8B0] mx-auto mb-1 sm:mb-1.5 md:mb-2" />
              <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                <div className="w-[17.1cqw] h-[5.2cqh] bg-white rounded-xl shadow-md" />
                <div className="w-[17.1cqw] h-[5.2cqh] bg-white rounded-xl shadow-md" />
                <div className="w-[17.1cqw] h-[5.2cqh] bg-white rounded-xl shadow-md" />
                <div className="w-[17.1cqw] h-[5.2cqh] bg-white rounded-xl shadow-md" />
              </div>
            </motion.div>

            {/* MOBILE */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[10.4%] left-[8.6%] bg-white rounded-[24px] shadow-xl p-3 sm:p-4 md:p-5"
            >
              <Smartphone className="w-[7.1cqw] h-[8.7cqh] text-[#12B8B0]" />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 sm:mt-1.5 md:mt-2 w-[10cqw] h-[3px] bg-white rounded-lg" />
            </motion.div>

            {/* SERVER STACK */}
            <motion.div
              animate={{
                y: [0, -18, 0],
                x: [0, 8, 0],
              }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[10.4%] right-[11.4%]"
            >
              <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                <div className="w-[17.1cqw] h-[6.1cqh] bg-white rounded-lg shadow-md" />
                <div className="w-[17.1cqw] h-[6.1cqh] bg-white rounded-lg shadow-md" />
                <div className="w-[17.1cqw] h-[6.1cqh] bg-white rounded-lg shadow-md" />
              </div>
              <div className="w-[20cqw] h-[3px] bg-white rounded-full shadow-md mt-1.5 sm:mt-2 md:mt-3 mx-auto" />
            </motion.div>

            {/* DATABASE */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[7%] right-[1.4%]"
            >
              <div className="bg-white rounded-2xl shadow-lg p-2 sm:p-2.5 md:p-3">
                <Database className="w-[5.7cqw] h-[7cqh] text-[#12B8B0]" />
              </div>
              <div className="w-[7.1cqw] h-[2px] bg-white rounded-full mx-auto mt-1 sm:mt-1.5 md:mt-2" />
            </motion.div>

            {/* DECORATIVE CUBES */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[20.9%] right-[7.1%] w-[3.6cqw] h-[4.3cqh] bg-white rounded-md shadow-md"
            />

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-[12.2%] left-[58%] w-[2.9cqw] h-[3.5cqh] bg-white rounded-md shadow-md"
            />

            {/* FLOATING DOTS */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[27.8%] right-[14.3%] w-[1.4cqw] h-[1.7cqh] bg-[#12B8B0] rounded-full"
            />

            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[20.9%] right-[31.4%] w-[1.4cqw] h-[1.7cqh] bg-[#12B8B0] rounded-full"
            />

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 30, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute top-[38.3%] left-[48%] w-[3.6cqw] h-[4.3cqh] bg-white rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}