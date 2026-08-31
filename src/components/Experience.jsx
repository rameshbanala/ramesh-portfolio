import { Calendar, MapPin } from "lucide-react";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { Reveal } from "./ui/Section";
import Chip from "./ui/Chip";
import { experiences } from "../data/experience";

const Experience = () => (
  <Section id="experience">
    <SectionHeading
      eyebrow="Experience"
      index="02"
      title="Where I've built"
      description="Production work across AI, backend, mobile, and infrastructure."
    />

    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Reveal key={exp.company} delay={index * 0.1}>
          <div className="overflow-hidden rounded-2xl border border-line bg-ink-800/60">
            <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-paper sm:text-2xl">
                    {exp.company}
                  </h3>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-base font-medium text-accent-400">
                  {exp.role}
                </p>
                <p className="mt-2 max-w-2xl text-sm text-muted">{exp.summary}</p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1.5 text-xs text-paper-dim">
                  <Calendar size={13} />
                  {exp.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1.5 text-xs text-paper-dim">
                  <MapPin size={13} />
                  {exp.location}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 px-6 pt-6 sm:px-8">
              {exp.tags.map((tag) => (
                <Chip key={tag} tone="accent">
                  {tag}
                </Chip>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-3">
              {exp.groups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-sm font-semibold text-paper">
                    {group.title}
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {group.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm leading-relaxed text-paper-dim"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-line p-6 sm:p-8">
              {exp.techStack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Experience;
