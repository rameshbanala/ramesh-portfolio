import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import Chip from "./ui/Chip";

const ArchitectureFlow = ({ project }) => (
  <div className="rounded-xl border border-line bg-ink-900/60 p-5 sm:p-6">
    <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
      Architecture
    </p>
    <div className="flex flex-col items-start gap-2">
      {project.architecture.map((step, i) => (
        <div key={step} className="flex flex-col items-start">
          <span className="rounded-lg border border-line bg-ink-800 px-3 py-1.5 font-mono text-xs text-paper-dim sm:text-sm">
            {step}
          </span>
          {i < project.architecture.length - 1 && (
            <span className="py-1 pl-3 text-muted">↓</span>
          )}
        </div>
      ))}

      {project.architectureBranch && (
        <div className="mt-1 flex flex-col items-start pl-4 sm:pl-8">
          <span className="pb-1 text-muted">↘</span>
          {project.architectureBranch.steps.map((step, i) => (
            <div key={step} className="flex flex-col items-start">
              <span className="rounded-lg border border-line bg-ink-800 px-3 py-1.5 font-mono text-xs text-paper-dim sm:text-sm">
                {step}
              </span>
              {i < project.architectureBranch.steps.length - 1 && (
                <span className="py-1 pl-3 text-muted">↓</span>
              )}
            </div>
          ))}
        </div>
      )}

      {project.realtime && (
        <div className="mt-4 flex flex-col items-start border-t border-line pt-4">
          <span className="rounded-lg border border-accent-500/25 bg-accent-500/10 px-3 py-1.5 font-mono text-xs text-accent-300 sm:text-sm">
            {project.realtime.label}
          </span>
          {project.realtime.steps.map((step) => (
            <div key={step} className="flex flex-col items-start">
              <span className="py-1 pl-3 text-muted">↓</span>
              <span className="rounded-lg border border-line bg-ink-800 px-3 py-1.5 font-mono text-xs text-paper-dim sm:text-sm">
                {step}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const ProjectCaseStudyModal = ({ project, onClose, triggerRef }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    const triggerEl = triggerRef?.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
      triggerEl?.focus();
    };
  }, [project, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-ink-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line p-6 sm:p-8">
              <div>
                <h3 id="case-study-title" className="text-2xl font-bold text-paper">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close case study"
                className="shrink-0 rounded-full border border-line p-2 text-paper-dim transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                  Overview
                </p>
                <p className="text-sm leading-relaxed text-paper-dim sm:text-base">
                  {project.overview}
                </p>
              </div>

              <ArchitectureFlow project={project} />

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                  Highlights
                </p>
                <ul className="space-y-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-paper-dim">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500/70" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>

              {(project.liveDemo || project.github || project.apkUrl) && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-500"
                    >
                      View Live
                      <ArrowRight size={15} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:border-accent-500/50"
                    >
                      Code
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
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectCaseStudyModal;
