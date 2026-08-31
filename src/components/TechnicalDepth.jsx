import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { Reveal } from "./ui/Section";
import Chip from "./ui/Chip";
import { technicalDepth } from "../data/skills";

const TechnicalDepth = () => (
  <Section id="technical-depth" className="bg-ink-900/40">
    <SectionHeading
      eyebrow="Engineering"
      index="04"
      title="What I Work On"
      description="The kinds of problems I keep coming back to, beyond a stack list."
    />

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {technicalDepth.map((area, index) => (
        <Reveal key={area.title} delay={index * 0.08}>
          <div className="h-full rounded-2xl border border-line bg-ink-800/60 p-6 sm:p-7">
            <h3 className="text-lg font-bold text-paper">{area.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper-dim">
              {area.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {area.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default TechnicalDepth;
