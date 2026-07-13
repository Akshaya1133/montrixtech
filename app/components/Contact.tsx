"use client";

type ContactProps = {
  showHeading?: boolean;
};

export default function Contact({
  showHeading = true,
}: ContactProps) {
  return (
    <section className="px-5 sm:px-8 lg:px-10 py-16">

      <div className="max-w-7xl mx-auto">

        {showHeading && (
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Get In Touch
            </h2>

            <p className="text-center text-gray-600 text-lg mb-12">
              Ready to transform your business with innovative technology
              solutions?
            </p>
          </>
        )}

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12">

          <div className="grid md:grid-cols-2 gap-6 mb-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#12B8B0]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#12B8B0]"
            />

          </div>

          <input
            type="text"
            placeholder="Service Required"
            className="w-full rounded-xl border border-gray-300 p-4 mb-6 outline-none focus:border-[#12B8B0]"
          />

          <textarea
            rows={6}
            placeholder="Tell us about your project..."
            className="w-full rounded-xl border border-gray-300 p-4 mb-8 outline-none resize-none focus:border-[#12B8B0]"
          />

          <button
            className="
              w-full
              md:w-auto
              bg-[#12B8B0]
              hover:bg-[#0A2E57]
              text-white
              px-10
              py-4
              rounded-xl
              transition-all
              duration-300
              shadow-lg
            "
          >
            Send Inquiry
          </button>

        </div>

      </div>

    </section>
  );
}