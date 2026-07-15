"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      title: "Website Development",
      details: [
        "Corporate Websites",
        "Landing Pages",
        "E-Commerce Solutions",
        "SEO Optimization",
        "Responsive Design",
      ],
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      details: [
        "Android Apps",
        "iOS Apps",
        "Flutter Development",
        "Firebase Integration",
        "App Maintenance",
      ],
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      details: [
        "ERP Systems",
        "CRM Systems",
        "Business Automation",
        "Inventory Management",
        "Custom Dashboards",
      ],
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      details: [
        "AWS Deployment",
        "Cloud Hosting",
        "CI/CD Pipelines",
        "Server Management",
        "Scalable Infrastructure",
      ],
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      details: [
        "AI Chatbots",
        "Business Automation",
        "Machine Learning",
        "Analytics",
        "Custom AI Tools",
      ],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      details: [
        "Wireframing",
        "Web Design",
        "Mobile Design",
        "Prototyping",
        "User Experience Research",
      ],
    },
  ];

  const [activeService, setActiveService] = useState<typeof services[number] | null>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const closedAt = useRef(0);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia?.("(hover: hover)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      // Some browsers pass MediaQueryListEvent, others MediaQueryList
      setCanHover(!!(e && (e as any).matches));
    };

    if (mq) {
      update(mq);
      if (mq.addEventListener) {
        mq.addEventListener("change", update as any);
      } else if (mq.addListener) {
        mq.addListener(update as any);
      }
    }

    return () => {
      if (!mq) return;
      if (mq.removeEventListener) {
        mq.removeEventListener("change", update as any);
      } else if (mq.removeListener) {
        mq.removeListener(update as any);
      }
    };
  }, []);
 const showService = (service: typeof services[number], index: number) => {
    setActiveService(service);
    setActiveServiceIndex(index);
  };

  const toggleService = (service: typeof services[number], index: number) => {
    if (activeService?.title === service.title) {
      hideService();
    } else if (canOpenNow()) {
      showService(service, index);
    }
  };

  const handleHover = (service: typeof services[number], index: number) => {
    // Handler attachment is already gated by `canHover`.
    // Keep this function free of `canHover` references to avoid runtime errors
    // if an older JS bundle executes this code briefly during HMR.
    if (canOpenNow()) {
      showService(service, index);
    }
  };

  const hideService = () => {
    closedAt.current = Date.now();
    setActiveService(null);
    setActiveServiceIndex(null);
  };

  const canOpenNow = () => Date.now() - closedAt.current > 300;

  useEffect(() => {
    if (!activeService) return;

    const handleScroll = () => {
      hideService();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeService]);
  
  const getPopupPositionClass = () => {
    return "left-1/2";
  };

  const getPopupAlignmentClass = () => {
    return "text-center";
  };

  const getCardClasses = (service: typeof services[number]) => {
  const isActive = activeService?.title === service.title;

  if (!activeService) {
    return `
      bg-white
      border border-gray-100
      shadow-lg
      rounded-3xl
      p-5
      min-h-[96px]
      flex
      items-center
      cursor-pointer
      hover:-translate-y-2
      hover:border-[#12B8B0]
      hover:shadow-xl
      transition-all
      duration-300
    `;
  }

  return isActive
    ? `
      bg-white
      border-2 border-[#12B8B0]
      shadow-2xl
      rounded-3xl
      p-5
      cursor-pointer
      scale-100
      transition-all
      duration-300
    `
    : `
      bg-white
      border border-gray-100
      rounded-3xl
      p-5
      opacity-40
      scale-[0.96]
      transition-all
      duration-300
    `;
};
 return (
    <PageTransition>
<main className="min-h-screen relative overflow-x-hidden bg-[radial-gradient(circle_at_top,_#dff8f6_0%,_#eef2f5_45%,_#f8f9fb_100%)] text-black">
        <Navbar />

        {/* Header */}
        <section className="px-6 xl:px-10 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#12B8B0] mb-4">
            Our Services
          </h1>

<p className="text-gray-600 max-w-2xl mx-auto text-base md:text-base">
              MontrixTech provides complete digital transformation solutions for
            startups, businesses and enterprises.
          </p>
        </section>

        {/* Services Layout */}
<section className="px-10 pb-24 relative">
            {activeService && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.18 }}
              className={`${getPopupPositionClass()}
fixed
top-[58%]
z-20
w-[520px]
max-w-[90vw]
-translate-x-1/2
-translate-y-1/2
rounded-[28px]
border
border-white/40
bg-white/70
backdrop-blur-2xl
p-6
${getPopupAlignmentClass()}
shadow-[0_20px_60px_rgba(18,184,176,0.20)]
`}            ><div
  className="
  absolute
  inset-0
  -z-10
  rounded-[32px]
  bg-[#12B8B0]/10
  blur-3xl
  "
/>
<button
  onClick={hideService}
  aria-label="Close"
  className="
    absolute
    top-4
    right-4
    z-10
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-full
    bg-gray-100
    text-gray-600
    hover:bg-[#12B8B0]
    hover:text-white
    transition-all
    duration-300
  "
>
  <X size={18} />
</button>

<h2 className="text-3xl md:text-4xl font-bold text-[#12B8B0] mb-4 pr-8">        
          {activeService.title}
              </h2>
<div className="grid grid-cols-2 gap-4 mt-6">
  {activeService.details.map((item: string, idx: number) => (
    <div
      key={item}
      className={
        `
      bg-white
      hover:bg-[#f0fffd]
      border
      border-[#12B8B0]/10
      rounded-2xl
      px-4
      py-4
      text-gray-700
      font-medium
      shadow-sm
      hover:border-[#12B8B0]
      hover:shadow-md
      transition-all
      duration-300
      ${idx === 4 ? 'col-span-2 max-w-[280px] mx-auto' : ''}
      `
      }
    >
      ✓ {item}
    </div>
  ))}
</div>
            </motion.div>
          )}

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Left Side */}
            <div className="space-y-6">
              {services.slice(0, 3).map((service, index) => (
  <div
    id={service.id}
    key={service.title}
    onMouseEnter={canHover ? () => handleHover(service, index) : undefined}
    onClick={() => toggleService(service, index)}
    className={getCardClasses(service)}
  >
                  <h2 className="text-2xl font-bold text-[#0A2E57]">{service.title}</h2>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {services.slice(3, 6).map((service, index) => (
                <div
                  id={service.id}
                  key={service.title}
                  onMouseEnter={canHover ? () => handleHover(service, index + 3) : undefined}
                  onClick={() => toggleService(service, index + 3)}
                  className={getCardClasses(service)}
                >
                  <h2 className="text-2xl font-bold text-[#0A2E57] text-right">{service.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="text-center py-24">
<h2 className="text-4xl md:text-5xl font-bold mb-6">
      Let's Build Something Amazing
  </h2>

  <p className="text-gray-600 text-lg mb-8">
    From websites to AI-powered solutions, we help businesses scale faster.
  </p>

          
          <a
            href="/contact"
            className="
            inline-block
            bg-[#12B8B0]
            text-white
            hover:bg-[#0A2E57]
            hover:-translate-y-1
            shadow-lg
            px-8
            py-4
            rounded-lg
            transition-all
            duration-300
            "
          >
            Start Your Project
          </a>

        </section>

        <Footer />

      </main>
    </PageTransition>
  );
}