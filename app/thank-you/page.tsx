"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(18,184,176,0.14)_0%,_rgba(248,249,251,1)_70%)] px-6 py-10 sm:px-12">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle,_rgba(18,184,176,0.18)_0%,_transparent_55%)] blur-3xl" />
      <div className="absolute left-[10%] top-32 h-48 w-48 rounded-full bg-[#12B8B0]/10 blur-2xl" />
      <div className="absolute right-[10%] top-44 h-44 w-44 rounded-full bg-[#0A2E57]/10 blur-2xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-3xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[40px] border border-white/60 bg-white/90 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-14">
          <div className="absolute -right-16 top-12 h-36 w-36 rounded-full bg-[#12B8B0]/10 shadow-[inset_0_0_0_1px_rgba(18,184,176,0.15)]" />
          <div className="absolute -left-16 bottom-10 h-32 w-32 rounded-full bg-[#0A2E57]/10 shadow-[inset_0_0_0_1px_rgba(10,46,87,0.12)]" />

          <div className="relative z-10 text-center">
            <div className="mb-8 inline-flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#12B8B0] to-[#0A2E57] text-white shadow-xl shadow-[#12B8B026]">
              <span className="text-5xl">✓</span>
            </div>
            <h1 className="text-5xl font-bold text-[#0A2643] sm:text-6xl">
              Thank You!
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 sm:text-xl">
              Your message has been received successfully. Our team will review your inquiry and get back to you shortly.
            </p>
            {/* <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
              You will be redirected to the homepage automatically in 10 seconds.
            </p> */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0A2E57] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#12B8B0]"
              >
                Back To Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-[#12B8B0] hover:text-[#0A2E57]"
              >
                Send Another Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}