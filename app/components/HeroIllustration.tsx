"use client";

import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <div className="relative w-[700px] h-[650px]">

      {/* Center Core */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        z-20
        "
      >
        <div
          className="
          w-48
          h-48
          rounded-[40px]
          bg-white
          shadow-2xl
          border
          border-gray-100
          flex
          items-center
          justify-center
          "
        >
          <img
            src="/images/logo.png"
            alt="MontrixTech"
            className="w-28"
          />
        </div>
      </motion.div>

      {/* Web Development */}
      <FloatingBlock
        image="/images/web.png"
        className="top-10 left-20"
      />

      {/* Cloud */}
      <FloatingBlock
        image="/images/cloud.png"
        className="top-0 right-20"
      />

      {/* AI */}
      <FloatingBlock
        image="/images/ai.png"
        className="top-52 right-0"
      />

      {/* Mobile */}
      <FloatingBlock
        image="/images/mobile.png"
        className="bottom-40 left-0"
      />

      {/* Server */}
      <FloatingBlock
        image="/images/server.png"
        className="bottom-0 right-10"
      />

    </div>
  );
}

function FloatingBlock({
  image,
  className,
}: {
  image: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className={`absolute ${className}`}
    >
      <img
        src={image}
        className="w-48 drop-shadow-2xl"
      />
    </motion.div>
  );
}