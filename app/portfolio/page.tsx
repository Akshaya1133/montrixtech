import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Business Website",
      tech: "Next.js, Tailwind CSS",
      description:
        "Modern responsive business website with premium UI.",
    },
    {
      title: "Mobile Application",
      tech: "Flutter, Firebase",
      description:
        "Cross-platform mobile application with cloud backend.",
    },
    {
      title: "ERP System",
      tech: "Java, MySQL",
      description:
        "Enterprise resource planning solution for businesses.",
    },
    {
      title: "E-Commerce Platform",
      tech: "React, Node.js",
      description:
        "Online shopping platform with payment integration.",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white">

        <Navbar />

        <section className="px-10 py-20 text-center">
          <h1 className="text-6xl font-bold text-[#12B8B0] mb-6">
            Our Portfolio
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore some of the digital products and solutions built by
            MontrixTech.
          </p>
        </section>

        <section className="px-10 pb-20">
          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project) => (
              <div
                key={project.title}
                className="
                bg-zinc-900/50
                border
                border-[#12B8B0]/20
                rounded-2xl
                p-8
                hover:border-[#12B8B0]
                hover:shadow-[0_0_25px_rgba(18,184,176,0.35)]
                transition-all
                duration-300
                "
              >
                <h2 className="text-2xl font-bold mb-4">
                  {project.title}
                </h2>

                <p className="text-[#12B8B0] mb-3">
                  {project.tech}
                </p>

                <p className="text-gray-400">
                  {project.description}
                </p>
              </div>
            ))}

          </div>
        </section>

        <Footer />

      </main>
    </PageTransition>
  );
}