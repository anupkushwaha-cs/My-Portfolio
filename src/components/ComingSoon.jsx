import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ComingSoon = ({ onBack }) => {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const photoRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        photoRef.current,
        { x: -35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: photoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        contentRef.current,
        { x: 35, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        timelineRef.current.filter(Boolean),
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current[0],
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const journey = [
    {
      number: "01",
      title: "Getting Started",
      description:
        "Started with HTML, CSS and JavaScript, learning how websites work and how to create interactive experiences.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      number: "02",
      title: "Exploring React",
      description:
        "Moved towards reusable components, hooks, state management and building more dynamic interfaces.",
      tags: ["React", "Hooks", "Components"],
    },
    {
      number: "03",
      title: "Real Projects",
      description:
        "Built projects like SkyMart, Weather App, Productivity Dashboard, FinTrack and Lazarave UI.",
      tags: ["REST APIs", "Responsive UI", "Git"],
    },
    {
      number: "04",
      title: "What's Next?",
      description:
        "Continuing to improve my development skills, explore new technologies and contribute to real-world products.",
      tags: ["Keep Learning", "Build", "Grow"],
    },
  ];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-8 md:px-14 md:py-28"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-[#ccff00]/[0.06] blur-[130px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div ref={introRef} className="mb-14 md:mb-20">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#ccff00] shadow-[0_0_12px_#ccff00]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-gray-300 sm:text-xs">
              My Developer Journey
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl md:text-8xl">
                Behind
                <br />
                The <span className="text-[#ccff00]">Code.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm font-light leading-7 text-gray-400 md:text-base lg:col-span-4 lg:pb-1">
              A journey of curiosity, continuous learning and turning ideas into
              real-world projects. Every line of code is another opportunity to
              improve.
            </p>
          </div>
        </div>

<div className="group relative isolate min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#101010] sm:min-h-[560px] lg:col-span-5">

  {/* Background */}
  <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#171717] to-[#263000]" />

  {/* Your Photo */}
  <img
    src="/images/anup-portrait.png"
    alt="Anup Kushwaha - React Developer"
    className="absolute inset-0 z-10 h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.04]"
    onError={(e) => {
      e.currentTarget.style.display = "none";
    }}
  />

  {/* Dark overlay */}
  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black via-black/10 to-transparent" />

  {/* Photo label */}
  <div className="absolute left-5 top-5 z-30 rounded-full border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-md">
    <span className="text-[10px] uppercase tracking-[0.18em] text-gray-200">
      The Person Behind The Pixels
    </span>
  </div>

  {/* Text at bottom */}
  <div className="absolute bottom-0 left-0 right-0 z-30 p-6 sm:p-8">
    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#ccff00]">
      Full-Stack Developer
    </p>

    <h3 className="text-4xl font-black tracking-tight sm:text-5xl">
      Anup Kushwaha
    </h3>

    <p className="mt-3 max-w-sm text-sm leading-6 text-gray-300">
      Building thoughtful digital experiences, one project at a time.
    </p>

    <div className="mt-6 flex items-center gap-3">
      <span className="h-px w-10 bg-[#ccff00]" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
        Learn · Build · Improve
      </span>
    </div>
  </div>

</div>

        {/* Journey Highlights */}
        <div className="mt-20 md:mt-28">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#ccff00]">
                Every Step Counts
              </p>

              <h3 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                The journey so far.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              From learning the fundamentals to building projects and
              discovering what's possible next.
            </p>
          </div>

          <div className="mb-8 h-px w-full bg-gradient-to-r from-[#ccff00] via-white/20 to-transparent" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {journey.map((item, index) => (
              <article
                key={item.number}
                ref={(el) => (timelineRef.current[index] = el)}
                className="group border-b border-white/10 pb-7 transition-colors duration-300 hover:border-[#ccff00]/60 lg:border-b-0"
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ccff00]/50 text-sm font-medium text-[#ccff00] transition-all duration-300 group-hover:bg-[#ccff00] group-hover:text-black">
                    {item.number}
                  </span>

                  <span className="h-px flex-1 bg-white/10 transition-colors group-hover:bg-[#ccff00]/40" />
                </div>

                <h4 className="mb-4 text-xl font-bold tracking-tight">
                  {item.title}
                </h4>

                <p className="min-h-0 text-sm font-light leading-7 text-gray-400">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1.5 text-[10px] text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center md:mt-24 md:pt-10">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-gray-500">
              The Next Chapter
            </p>

            <h3 className="text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
              Still learning.
              <span className="block font-light italic text-[#ccff00]">
                Always building.
              </span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/anupkushwaha-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#ccff00] px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white"
            >
              Explore My Work ↗
            </a>

            <a
              href="mailto:anupkushwaha916@gmail.com"
              className="rounded-full border border-white/20 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              Contact Me ↗
            </a>
          </div>
        </div>

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="mt-10 text-xs text-gray-500 transition-colors hover:text-[#ccff00]"
          >
            ← Go Back
          </button>
        )}
      </div>
    </section>
  );
};

export default ComingSoon;
