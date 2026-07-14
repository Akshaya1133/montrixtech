"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16 bg-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* Company */}

          <div>

            <Image
              src="/images/TECH-logo.png"
              alt="MontrixTech Logo"
              width={260}
              height={70}
              className="object-contain mb-5"
            />

            <p className="text-gray-600 leading-8 text-lg">
              Building innovative digital solutions for businesses through
              web, mobile, cloud and AI technologies.
            </p>

          </div>

          {/* Services */}

          <div>

            <h4 className="text-xl font-semibold">
              Services
            </h4>

            <div className="w-14 h-1 bg-[#12B8B0] rounded-full mt-3 mb-8" />

            <ul className="space-y-4 text-base text-gray-700">

              <li>
                <Link
                  href="/services#web-development"
                  className="hover:text-[#12B8B0]"
                >
                  Website Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services#mobile-apps"
                  className="hover:text-[#12B8B0]"
                >
                  Mobile App Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services#custom-software"
                  className="hover:text-[#12B8B0]"
                >
                  Custom Software Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services#cloud-solutions"
                  className="hover:text-[#12B8B0]"
                >
                  Cloud Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/services#ai-solutions"
                  className="hover:text-[#12B8B0]"
                >
                  AI Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="/services#ui-ux-design"
                  className="hover:text-[#12B8B0]"
                >
                  UI/UX Design
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4 className="text-xl font-semibold">
              Company
            </h4>

            <div className="w-14 h-1 bg-[#12B8B0] rounded-full mt-3 mb-8" />

            <ul className="space-y-4 text-base text-gray-700">

              <li>
                <Link
                  href="/about"
                  className="hover:text-[#12B8B0]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-[#12B8B0]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#12B8B0]"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-semibold">
              Contact
            </h4>

            <div className="w-14 h-1 bg-[#12B8B0] rounded-full mt-3 mb-8" />

            <div className="space-y-5 text-base text-gray-700">

              <div className="flex gap-4 items-start">
                <FaEnvelope className="text-[#12B8B0] mt-1" />
                <div className="space-y-1">
                  <p>contact@montrixtech.in</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaPhoneAlt className="text-[#12B8B0] mt-1" />
                <div className="space-y-1">
                  <p>+91 90351 96480</p>
                  <p>+91 77957 95859</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt size={28} className="text-[#12B8B0] mt-1" />
                <div className="leading-7 text-base">
                  <a
                    href="https://maps.app.goo.gl/FC5Z3RgsYyLTznpL7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#12B8B0]"
                  >
                    <span className="whitespace-nowrap">MONTRIXTECH PRIVATE LIMITED</span>
                    <br />
                    No 12, 1st Main, 9th Cross
                    <br />
                    Papanna Layout, Maruthi Nagar
                    <br />
                    Yelahanka, Bangalore - 560064
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 pt-4 text-[#12B8B0]">
                <a
                  href="https://www.instagram.com/montrixtech_?utm_source=qr&igsh=NWw5a2Y1bTBiYmdt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A2E57]"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/18rLPk6iB6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A2E57]"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://x.com/MontrixTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A2E57]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L5.769 21.75H2.46l7.73-8.835L1.54 2.25h6.822l4.822 6.383L18.244 2.25zM17.51 19.389h1.828L6.362 4.156H4.432L17.51 19.389z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919035196480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A2E57]"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCQBF4NK6hXWmFnpWNpeV0Gw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A2E57]"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-[#0A2E57]"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Google Map */}

        <div className="mt-14">

          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-xl">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.7452513618263!2d77.6083468!3d13.1015932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19000c106b95%3A0x3da00a073255a34e!2sD%20Rukmini%20nilaya!5e0!3m2!1sen!2sin!4v1781770655419!5m2!1sen!2sin"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

        {/* Copyright */}

        <div className="border-t border-gray-200 mt-14 pt-8 text-center text-gray-500 text-lg">

          © 2026 MONTRIXTECH PRIVATE LIMITED. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}