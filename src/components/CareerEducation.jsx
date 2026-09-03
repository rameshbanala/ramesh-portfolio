import { GraduationCap, Trophy, ExternalLink } from "lucide-react";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { Reveal } from "./ui/Section";
import { education, achievement } from "../data/careerEducation";

const CareerEducation = () => (
  <Section id="career">
    <SectionHeading eyebrow="Career" index="06" title="Career & Education" />

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Reveal>
        <div className="h-full rounded-2xl border border-line bg-ink-800/60 p-6 sm:p-8">
          <GraduationCap size={22} className="text-accent-400" />
          <h3 className="mt-4 text-lg font-bold text-paper">{education.degree}</h3>
          <p className="mt-1 text-sm text-paper-dim">{education.school}</p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="font-semibold text-emerald-300">
              CGPA: {education.cgpa}
            </span>
            <span className="text-muted">{education.period}</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="h-full rounded-2xl border border-line bg-ink-800/60 p-6 sm:p-8">
          <Trophy size={22} className="text-accent-400" />
          <h3 className="mt-4 text-lg font-bold text-paper">{achievement.title}</h3>
          <p className="mt-1 text-sm text-paper-dim">{achievement.organization}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {achievement.description}
          </p>
          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300"
            >
              View post
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </Reveal>
    </div>
  </Section>
);

export default CareerEducation;
