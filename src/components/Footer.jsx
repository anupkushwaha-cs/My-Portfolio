
import footerBg from "../assets/Footer/Footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anup-kushwaha-357522399",
      label: "Connect professionally",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.01 18.34H5.02V9.5h2.99v8.84ZM6.52 8.29a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm11.82 10.05h-2.98v-4.3c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27v4.38H9.3V9.5h2.86v1.21h.04c.4-.7 1.37-1.43 2.82-1.43 3.01 0 3.57 1.98 3.57 4.55v4.51h-.25Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/anupkushwaha-cs",
      label: "Explore my code",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path
            fillRule="evenodd"
            d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.62 1.55.23 2.7.11 2.98.73.79 1.16 1.79 1.16 3.02 0 4.31-2.64 5.27-5.15 5.55.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#070807] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070807]/80 via-[#070807]/90 to-[#070807]" />

        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#ccff00]/[0.07] blur-[110px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#ccff00]/[0.06] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-5 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        {/* Top section */}
        <div className="grid gap-10 border-b border-white/[0.09] pb-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:pb-12">
          {/* Introduction */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#ccff00]/20 bg-[#ccff00]/[0.06] px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ccff00] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ccff00]" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ccff00]">
                Available for opportunities
              </span>
            </div>

            <h2 className="max-w-xl text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-[3.5rem]">
              Let’s build
              <br />
              something{" "}
              <span className="font-serif font-normal italic text-[#ccff00]">
                amazing.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-[15px]">
              Hey, I’m Anup Kushwaha — a developer who loves turning ideas
              into clean, interactive and meaningful digital experiences.
              Have something in mind? Let’s make it happen.
            </p>

            <a
              href="mailto:anupkushwaha916@gmail.com"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_8px_35px_rgba(204,255,0,0.16)]"
            >
              Let’s talk
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-7 md:justify-self-end md:gap-12 lg:gap-16">
            <div>
              <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.23em] text-white/35">
                Navigation
              </h3>

              <ul className="space-y-3.5">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-[13px] text-white/65 transition-colors duration-300 hover:text-[#ccff00]"
                    >
                      <span className="w-3 text-[9px] text-white/20 transition-colors group-hover:text-[#ccff00]">
                        0{index + 1}
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.23em] text-white/35">
                Find me on
              </h3>

              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ccff00]/30 hover:bg-[#ccff00]/[0.05]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/80 transition-colors group-hover:bg-[#ccff00] group-hover:text-black">
                        {link.icon}
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs font-medium text-white/85">
                          {link.name}
                        </span>
                        <span className="mt-1 block text-[10px] text-white/35">
                          {link.name === "GitHub"
                            ? "My repositories"
                            : "Let's connect"}
                        </span>
                      </span>

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="ml-auto h-3.5 w-3.5 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ccff00]"
                      >
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Drop me an email
                </p>
                <a
                  href="mailto:anupkushwaha916@gmail.com"
                  className="break-all text-xs text-white/65 transition-colors hover:text-[#ccff00]"
                >
                  anupkushwaha916@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Personal branding */}
        <div className="relative overflow-hidden py-9 sm:py-12">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-28 w-64 rounded-full bg-[#ccff00]/[0.045] blur-[65px] sm:w-96" />
          </div>

          <h2
            className="relative select-none text-center text-[clamp(4rem,13vw,10rem)] font-black uppercase leading-[0.82] tracking-[-0.09em] text-white/[0.93]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            ANUP<span className="text-[#ccff00]">.</span>
          </h2>

          <div className="relative mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#ccff00]/50" />
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/40 sm:text-[10px] sm:tracking-[0.4em]">
              Design. Develop. Create.
            </p>
            <span className="h-px w-7 bg-[#ccff00]/50" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.09] py-5 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-white/40">
            © {currentYear}{" "}
            <span className="font-medium text-white/65">Anup Kushwaha</span>.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.09] px-3.5 py-2 text-[11px] text-white/55 transition-all duration-300 hover:border-[#ccff00]/35 hover:text-[#ccff00]"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
