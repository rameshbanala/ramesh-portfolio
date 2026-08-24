import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";
import profilePicture from "../assets/profile_pic.jpeg";
import { socialLinks } from "../data/social";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-ink-800/80 px-3 py-1 font-mono text-xs text-paper-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Currently @ Tvara
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-paper sm:text-5xl">
            Hi, I&apos;m Ramesh.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-xl font-semibold leading-snug text-paper-dim lg:mx-0 sm:text-2xl">
            <span className="text-accent-400">Full Stack Developer</span>{" "}
            building production software, AI-powered systems, and scalable
            integrations.
          </p>

          <p className="mx-auto mt-5 max-w-xl font-mono text-sm text-muted lg:mx-0 sm:text-base">
            React / Next.js · Node.js / Go · PostgreSQL · AI / LLM · production
            systems
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-500 sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              Get In Touch
              <Mail size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-accent-500/50 hover:text-accent-300 sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              Download Resume
              <FileDown size={16} />
            </a>
          </div>

          <div className="mt-9 flex justify-center gap-3 lg:justify-start">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="rounded-full border border-line p-2.5 text-paper-dim transition-colors hover:border-accent-500/50 hover:text-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <div className="absolute inset-0 rounded-3xl border border-line bg-gradient-to-br from-accent-500/15 to-transparent" />
            <img
              src={profilePicture}
              alt="Ramesh Banala"
              className="relative h-full w-full rounded-3xl border border-line object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
