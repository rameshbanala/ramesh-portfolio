import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { Reveal } from "./ui/Section";
import { aboutHighlights } from "../data/about";

const About = () => (
  <Section id="about">
    <SectionHeading
      eyebrow="About"
      index="01"
      title="What I build"
      align="left"
    />
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <Reveal className="space-y-5 text-base leading-relaxed text-paper-dim sm:text-lg">
        <p>
          I&apos;m a Full Stack Developer / Software Engineer with production
          experience across frontend applications, backend services,
          AI-powered systems, databases, and complex third-party
          integrations. I currently build at{" "}
          <span className="font-semibold text-paper">Tvara</span>, a B2B
          sales automation and AI-powered CRM platform, and previously spent
          ten months shipping mobile and full-stack products at{" "}
          <span className="font-semibold text-paper">
            ScaleOrange Technologies
          </span>
          .
        </p>
        <p>
          My work spans React and React Native on the frontend, Node.js and
          Go on the backend, and everything in between — LLM-powered
          workflows, telephony infrastructure, CRM sync, and the databases
          and cloud infrastructure that keep it all running.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
        {aboutHighlights.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="rounded-xl border border-line bg-ink-800/60 p-5"
          >
            <Icon size={20} className="text-accent-400" />
            <p className="mt-3 text-sm font-medium text-paper">{label}</p>
          </div>
        ))}
      </Reveal>
    </div>
  </Section>
);

export default About;
