import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, FileDown } from "lucide-react";
import { navItems } from "../data/nav";
import { socialLinks } from "../data/social";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconLinks = socialLinks.filter((s) => s.label !== "Email");

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink-950/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="rounded-md font-mono text-lg font-bold tracking-tight text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
        >
          Ramesh<span className="text-accent-400">.</span>
        </a>

        <div className="hidden md:flex md:items-center md:gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-paper-dim transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:gap-3">
          {iconLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-md p-2 text-paper-dim transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              >
                <Icon size={18} />
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-800 px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-accent-500/50 hover:text-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          >
            Resume
            <FileDown size={15} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-md p-2 text-paper-dim hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-ink-950/95 backdrop-blur-md md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-paper-dim hover:bg-ink-800 hover:text-paper"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3">
                {iconLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="rounded-md p-2 text-paper-dim hover:text-paper"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
                <a
                  href="/resume.pdf"
                  download
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-line bg-ink-800 px-4 py-2 text-sm font-medium text-paper"
                >
                  Resume
                  <FileDown size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
