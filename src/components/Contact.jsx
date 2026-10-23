
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contactBgVideo from "../assets/contact_assets/contact_bg.mp4";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const formContainerRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: "",
    type: "",
  });

  useEffect(() => {
    const elements = [infoRef.current, formContainerRef.current].filter(Boolean);

    const animations = elements.map((element, index) =>
      gsap.fromTo(
        element,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: index * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      )
    );

    return () => {
      animations.forEach((animation) => animation.scrollTrigger?.kill());
      animations.forEach((animation) => animation.kill());
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage({
        text: "The contact form is not configured yet. Please email me directly.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ text: "", type: "" });

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey }
      );

      setStatusMessage({
        text: "Message sent successfully! Thank you for reaching out.",
        type: "success",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatusMessage({
        text: "Message could not be sent. Please try again or email me directly.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-[#ccff00]/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#ccff00]/20";

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#050505] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background video */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        >
          <source src={contactBgVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/85 to-[#050505]" />
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#ccff00]/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#ccff00]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        {/* Heading */}
        <div className="mb-12 max-w-2xl sm:mb-14">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ccff00]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ccff00]" />
            Contact
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Let's talk
            <span className="font-serif font-light italic text-gray-400">
              {" "}together.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, an opportunity, or just want to connect?
            Send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact information */}
          <div
            ref={infoRef}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:col-span-2"
          >
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              I'm Anup Kushwaha, a Full-Stack Developer interested in building
              useful and engaging web experiences.
            </p>

            <div className="mt-8">
              <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">
                Email me
              </p>

              <a
                href="mailto:anupkushwaha916@gmail.com"
                className="break-all text-sm text-gray-200 transition-colors hover:text-[#ccff00] sm:text-base"
              >
                anupkushwaha916@gmail.com
              </a>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                My role
              </p>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ccff00]/20 bg-[#ccff00]/[0.07] px-3 py-2 text-xs font-medium text-[#ccff00]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ccff00]" />
                Full-Stack Developer
              </span>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/anup-kushwa-357522399/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-[#ccff00]/50 hover:text-[#ccff00]"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/anupkushwaha-cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-[#ccff00]/50 hover:text-[#ccff00]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            ref={formContainerRef}
            className="rounded-2xl border border-white/10 bg-[#0b0b0b]/90 p-6 shadow-2xl shadow-black/20 sm:p-8 lg:col-span-3"
          >
            <div className="mb-7">
              <h3 className="text-xl font-semibold">Send a message</h3>
              <p className="mt-2 text-sm text-gray-500">
                Fields marked with * are required.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-gray-300"
                  >
                    Your name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-gray-300"
                  >
                    Email address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-xs font-medium text-gray-300"
                  >
                    Phone <span className="text-gray-600">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    autoComplete="tel"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs font-medium text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    maxLength={150}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium text-gray-300"
                >
                  Your message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about your idea..."
                  rows={5}
                  required
                  maxLength={5000}
                  className={`${inputClass} resize-y`}
                />
              </div>

              {statusMessage.text && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    statusMessage.type === "success"
                      ? "border-green-500/30 bg-green-500/10 text-green-400"
                      : "border-red-500/30 bg-red-500/10 text-red-400"
                  }`}
                >
                  {statusMessage.text}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ccff00] px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending message..." : "Send Message"}
                {!isSubmitting && <span aria-hidden="true">↗</span>}
              </button>

              <p className="text-center text-xs leading-5 text-gray-600">
                Prefer email?{" "}
                <a
                  href="mailto:anupkushwaha916@gmail.com"
                  className="text-gray-400 underline underline-offset-4 transition-colors hover:text-[#ccff00]"
                >
                  Contact me directly
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
