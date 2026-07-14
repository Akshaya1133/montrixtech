"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const toggle = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`
        fixed
        bottom-4
        right-4
        sm:bottom-8
        sm:right-8
        z-50
        h-12
        w-12
        sm:h-14
        sm:w-14
        rounded-full
        bg-[#12B8B0]
        text-white
        shadow-xl
        transition-all
        duration-300
        flex
        items-center
        justify-center
        ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }
      `}
    >
      <FaArrowUp size={18} className="sm:w-6 sm:h-6" />
    </button>
  );
}