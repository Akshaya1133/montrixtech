"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      {/* Navy Glow */}
      <motion.div
        animate={{
          x: [0, 220, 0],
          y: [0, 120, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -top-32
          -left-40
          w-[750px]
          h-[750px]
          rounded-full
          bg-[#0A2E57]
          opacity-15
          blur-[220px]
        "
      />

      {/* Teal Glow */}
      <motion.div
        animate={{
          x: [0, -220, 0],
          y: [0, -140, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          top-[550px]
          -right-32
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#12B8B0]
          opacity-12
          blur-[220px]
        "
      />
    </>
  );
}