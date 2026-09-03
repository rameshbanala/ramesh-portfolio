import { Reveal } from "./Section";

const SectionHeading = ({ eyebrow, index, title, description, align = "center" }) => (
  <Reveal
    className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
  >
    {eyebrow && (
      <p
        className={`mb-3 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-400 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {index && <span className="text-muted">{index}</span>}
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl font-bold tracking-tight text-paper sm:text-4xl">{title}</h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
    )}
  </Reveal>
);

export default SectionHeading;
