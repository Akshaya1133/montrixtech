"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  const stats = [
    {
      value: 5,
      suffix: "+",
      title: "Apps Delivered",
    },
    {
      value: 5,
      suffix: "+",
      title: "Websites Delivered",
    },
    {
      value: 3,
      suffix: "+",
      title: "Software Solutions",
    },
    {
      value: 24,
      suffix: "/7",
      title: "Support",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative px-5 sm:px-8 lg:px-10 py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Why Choose <span className="text-[#12B8B0]">MontrixTech?</span>
        </h2>

        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Delivering reliable technology solutions with quality, innovation,
          and continuous support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.title}
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
              <h3 className="text-5xl font-bold text-[#12B8B0]">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                  />
                ) : (
                  0
                )}
                {item.suffix}
              </h3>

              <p className="mt-4 text-gray-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}