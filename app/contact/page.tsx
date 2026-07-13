"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export default function ContactPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const sendEmail = async () => {
    // Clear previous errors
    setNameError("");
    setEmailError("");
    setMessageError("");

    // ---------- Name Validation ----------
    const trimmedName = name.trim();

    if (trimmedName.length < 3) {
      setNameError("Name must contain at least 3 characters.");
      return;
    }

    if (trimmedName.length > 50) {
      setNameError("Name cannot exceed 50 characters.");
      return;
    }

       // ---------- Email Validation ----------
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!email.trim()) {
      setEmailError("Email is required.");
      return;
    }

    if (email.length > 100) {
      setEmailError("Email cannot exceed 100 characters.");
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");

    // ---------- Message Validation ----------
    const trimmedMessage = message.trim();

    if (trimmedMessage.length < 20) {
      setMessageError(
        "Message must contain at least 20 characters."
      );
      return;
    }

    if (trimmedMessage.length > 500) {
      setMessageError(
        "Message cannot exceed 500 characters."
      );
      return;
    }

    setMessageError("");

    setLoading(true);

    try {
      await emailjs.send(
        "service_n80mi2e",
        "template_35q6b8y",
        {
          name: trimmedName,
          email: email.trim(),
          message: trimmedMessage,
        },
        "dqzJ0CcAduQI_w0sB"
      );

      router.push("/thank-you");
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      if (error.text) {
        console.log("EmailJS Text:", error.text);
      }
      if (error.status) {
        console.log("Status:", error.status);
      }
      alert(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_top,_#dff8f6_0%,_#eef2f5_45%,_#f8f9fb_100%)] text-black">
        <Navbar />

        <section className="px-6 md:px-10 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#12B8B0] mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Let's discuss your next project and build something amazing together.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-[0_20px_40px_rgba(18,184,176,0.15)] hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-5 text-gray-700">
                <div>
                  <h3 className="text-[#12B8B0] font-semibold text-sm uppercase tracking-wider mb-1">Email</h3>
                  <p className="text-sm">montrixtech@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-[#12B8B0] font-semibold text-sm uppercase tracking-wider mb-1">Phone</h3>
                  <p className="text-sm">+91 90351 96480</p>
                </div>
                <div>
                  <h3 className="text-[#12B8B0] font-semibold text-sm uppercase tracking-wider mb-3">Location</h3>
                  <p className="leading-6 text-sm">
                    MONTRIXTECH PRIVATE LIMITED
                    <br />
                    No 12, 1st Main, 9th Cross
                    <br />
                    Papanna Layout, Maruthi Nagar
                    <br />
                    Yelahanka, Bangalore - 560064
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-[0_20px_40px_rgba(18,184,176,0.15)] hover:-translate-y-2 transition-all duration-300 rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Message</h2>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    maxLength={50}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError("");
                    }}
                    placeholder="Your Name"
                    className={`w-full bg-[#f8fbfc] border rounded-xl p-4 focus:outline-none transition-colors ${
                      nameError
                        ? "border-red-500"
                        : "border-gray-200 focus:border-[#12B8B0]"
                    }`}
                  />
                  {nameError && (
                    <p className="text-red-500 text-sm mt-2">{nameError}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    maxLength={100}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    placeholder="Your Email"
                    className={`w-full bg-[#f8fbfc] border rounded-xl p-4 focus:outline-none transition-colors ${
                      emailError
                        ? "border-red-500"
                        : "border-gray-200 focus:border-[#12B8B0]"
                    }`}
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-2">{emailError}</p>
                  )}
                </div>

                <div>
                  <textarea
                    rows={5}
                    value={message}
                    maxLength={500}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setMessageError("");
                    }}
                    placeholder="Tell us about your project..."
                    className={`w-full bg-[#f8fbfc] border rounded-xl p-4 resize-none focus:outline-none transition-colors ${
                      messageError
                        ? "border-red-500"
                        : "border-gray-200 focus:border-[#12B8B0]"
                    }`}
                  />
                  {messageError && (
                    <p className="text-red-500 text-sm mt-2">{messageError}</p>
                  )}
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Minimum 20 characters</span>
                    <span>{message.length}/500</span>
                  </div>
                </div>

                <button
                  onClick={sendEmail}
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#12B8B0] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#0A2E57] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
}
