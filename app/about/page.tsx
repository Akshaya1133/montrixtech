import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import {
  Lightbulb,
  ShieldCheck,
 Award,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  return (
    <PageTransition>
<main className="min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_top,_#dff8f6_0%,_#eef2f5_45%,_#f8f9fb_100%)] text-black">


        <div className="relative z-10">

          <Navbar />

<section className="px-5 sm:px-8 lg:px-10 pt-16 pb-14 text-center">  
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">  About <span className="text-[#12B8B0]">MontrixTech</span>
</h1>

            <p className="max-w-4xl mx-auto text-base md:text-lg text-gray-600">
              building innovative digital solutions that help businesses
              grow, automate processes, and achieve digital transformation.
            </p>
          </section>

          {/* Mission & Vision */}
         {/* Mission & Vision */}
<section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

    {/* Mission */}
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-gray-200
      shadow-lg
      p-8
      lg:p-10
      min-h-[280px]
      flex
      flex-col
      justify-center
      hover:-translate-y-2
      hover:border-[#12B8B0]
      hover:shadow-[0_20px_50px_rgba(18,184,176,0.15)]
      transition-all
      duration-300
      "
    >
      <h2 className="text-3xl font-bold text-[#12B8B0] mb-6">
        Our Mission
      </h2>

      <p className="text-lg md:text-base text-gray-600 leading-8">
        To empower businesses with modern technology solutions by delivering
        innovative software, scalable digital platforms, and reliable technology
        services that help organizations grow, innovate, and succeed in the
        digital era.
      </p>
    </div>

    {/* Vision */}
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-gray-200
      shadow-lg
      p-8
      lg:p-10
      min-h-[280px]
      flex
      flex-col
      justify-center
      hover:-translate-y-2
      hover:border-[#12B8B0]
      hover:shadow-[0_20px_50px_rgba(18,184,176,0.15)]
      transition-all
      duration-300
      "
    >
      <h2 className="text-3xl font-bold text-[#12B8B0] mb-6">
        Our Vision
      </h2>

      <p className="text-lg md:text-base text-gray-600 leading-8">
        To become a trusted global technology partner recognized for innovation,
        quality, customer success, and delivering world-class digital solutions
        that create lasting business value.
      </p>
    </div>

  </div>

</section>

{/* Story */}
<section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16">  <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
    Who We Are
  </h2>

  <p className="text-gray-600 text-center text-base leading-7 max-w-4xl mx-auto">
    MontrixTech Private Limited is a modern software
development company specializing in building
high-performance digital solutions.

From startup MVPs to enterprise platforms,
our team helps businesses innovate through
Web Development, Mobile Applications,
Cloud Infrastructure, Artificial Intelligence,
and Custom Software Solutions.
  </p>
</section>

{/* Our Core Values */}
<section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
    Our Core Values
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        icon: <Lightbulb size={30} />,
        title: "Innovation",
        desc: "Building modern digital experiences using the latest technologies and creative thinking.",
      },
      {
        icon: <ShieldCheck size={30} />,
        title: "Integrity",
        desc: "Transparency, trust and accountability remain at the heart of every project.",
      },
      {
        icon: <Award size={30} />,
        title: "Excellence",
        desc: "Delivering scalable, reliable and high-quality software that exceeds expectations.",
      },
      {
        icon: <Handshake size={30} />,
        title: "Customer First",
        desc: "Building long-term partnerships by understanding every client's unique business goals.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="
        group
        bg-white
        rounded-3xl
        border
        border-gray-200
        p-6
        text-center
        hover:-translate-y-2
        hover:border-[#12B8B0]
        hover:shadow-[0_20px_50px_rgba(18,184,176,0.15)]
        transition-all
        duration-300
        "
      >
        <div
          className="
          w-14
          h-14
          mx-auto
          mb-5
          rounded-2xl
          bg-[#12B8B0]/10
          flex
          items-center
          justify-center
          text-[#12B8B0]
          group-hover:bg-[#12B8B0]
          group-hover:text-white
          transition-all
          duration-300
          "
        >
          {item.icon}
        </div>

        <h3 className="text-xl font-bold mb-3">
          {item.title}
        </h3>

        <p className="text-gray-600 leading-6 text-sm">
          {item.desc}
        </p>
      </div>
    ))}

  </div>

</section>
          <Footer />

        </div>

      </main>
    </PageTransition>
  );
}
