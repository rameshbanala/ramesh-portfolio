import { motion } from "framer-motion";

const Section = ({ id, className = "", children, ...props }) => (
  <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${className}`} {...props}>
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

export const Reveal = ({ children, delay = 0, className = "", as: Component = motion.div, ...props }) => (
  <Component
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </Component>
);

export default Section;
