import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { Reveal } from "./ui/Section";
import Chip from "./ui/Chip";
import { skillGroups } from "../data/skills";

const Skills = () => (
  <Section id="skills">
    <SectionHeading eyebrow="Skills" title="Technical Skills" />

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, index) => (
        <Reveal key={group.title} delay={index * 0.06}>
          <div className="h-full rounded-2xl border border-line bg-ink-800/60 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
