import { useRef, useState } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { Reveal } from "./ui/Section";
import Chip from "./ui/Chip";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";
import { primaryProjects, secondaryProjects } from "../data/projects";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const triggerRef = useRef(null);

  const openCaseStudy = (project, e) => {
    triggerRef.current = e.currentTarget;
    setActiveProject(project);
  };

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        index="03"
        title="Things I've Shipped"
        description="Two projects, presented as case studies — how they're built, not just what they look like."
      />

      <div className="space-y-16">
        {primaryProjects.map((project, index) => (
          <Reveal
            key={project.slug}
            delay={index * 0.1}
            className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-2xl border border-line bg-ink-800">
              {project.image ? (
                project.imageOrientation === "portrait" ? (
                  <div className="flex items-center justify-center py-6">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="max-h-[420px] w-auto max-w-[85%] rounded-lg object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top"
                  />
                )
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-ink-800">
                  <span className="font-mono text-lg text-muted">{project.title}</span>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-paper sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-accent-400">{project.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim sm:text-base">
                {project.overview}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={(e) => openCaseStudy(project, e)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                >
                  View Case Study
                  <ArrowRight size={15} />
                </button>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-accent-500/50"
                  >
                    Live
                    <ExternalLink size={15} />
                  </a>
                )}
                {project.apkUrl && (
                  <a
                    href={project.apkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-accent-500/50"
                  >
                    Download APK
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mb-8 mt-24">
        <h3 className="text-xl font-bold text-paper">Other Notable Projects</h3>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {secondaryProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-ink-800/60 p-6 transition-colors hover:border-accent-500/40">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="mb-5 h-32 w-full rounded-lg object-cover object-top"
                />
              ) : (
                <div className="mb-5 flex h-32 w-full items-center justify-center rounded-lg bg-ink-900">
                  <span className="font-mono text-sm text-muted">
                    {project.title.split(" ")[0]}
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between gap-2">
                <h4 className="text-base font-bold text-paper">{project.title}</h4>
                {project.workProject && (
                  <span className="shrink-0 rounded-full bg-accent-500/10 px-2.5 py-1 text-[11px] font-medium text-accent-300">
                    Internship
                  </span>
                )}
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Chip key={tech} className="text-[11px]">
                    {tech}
                  </Chip>
                ))}
              </div>

              {(project.liveDemo || project.github) && (
                <div className="mt-5 flex gap-2">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-line bg-ink-900 px-3 py-2.5 text-center text-xs font-semibold text-paper transition-colors hover:border-accent-500/50 hover:text-accent-300"
                    >
                      Live Demo
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="flex items-center justify-center rounded-lg border border-line bg-ink-900 px-3 py-2.5 text-paper-dim transition-colors hover:border-accent-500/50 hover:text-paper"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <ProjectCaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        triggerRef={triggerRef}
      />
    </Section>
  );
};

export default Projects;
