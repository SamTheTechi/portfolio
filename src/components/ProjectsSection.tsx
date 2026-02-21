import { useState } from 'react';
import { projectCategories } from '../data/projects';

const ProjectsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section aria-label="Projects" className="projects-section">
      <div className="flex flex-wrap items-center gap-4 gap-y-2 mt-10 mb-6 max-[640px]:mt-8 max-[640px]:mb-5">
        <span className="text-[rgba(var(--crt-accent-rgb),0.7)] text-[1.1rem] max-[480px]:text-[1rem]">Sayu@Higehiro:</span>
        <span className="text-[1.4rem] max-[480px]:text-[1.2rem] lowercase text-[var(--crt-accent)] [text-shadow:0_0_10px_rgba(var(--crt-accent-rgb),0.5)]">
          projects
        </span>
        <span
          className="flex-1 h-px bg-[linear-gradient(90deg,rgba(var(--crt-accent-rgb),0.6),rgba(var(--crt-accent-rgb),0))]"
          aria-hidden="true"
        />
      </div>
      <div className="projects-grid grid grid-cols-3 gap-8 max-[1100px]:grid-cols-1">
        {projectCategories.map((category, index) => {
          const visibleCount = 1;
          const visibleProjects = category.projects.slice(0, visibleCount);
          const hiddenProjects = category.projects.slice(visibleCount);

          return (
            <div
              key={category.label}
              className={`px-5 ${index === 0 ? '' : 'border-l border-[rgba(var(--crt-accent-rgb),0.35)] max-[1100px]:border-l-0 max-[1100px]:border-t max-[1100px]:pt-6'} max-[1100px]:px-0`}
            >
              <h3 className="m-0 mb-4 text-[1.35rem] max-[480px]:text-[1.2rem] lowercase text-[var(--crt-accent)]">
                {category.label}
              </h3>
              <div className="flex flex-col gap-5">
                {visibleProjects.map((project) => (
                  <article
                    key={project.title}
                    className="flex flex-col gap-3.5 [text-shadow:0_0_8px_rgba(var(--crt-accent-rgb),0.25)]"
                  >
                    <div className="projects-card border border-[rgba(var(--crt-accent-rgb),0.5)] rounded-[14px] overflow-hidden bg-[#020302] max-[480px]:max-w-[320px] max-[480px]:mx-auto">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="w-full block h-auto saturate-[0.9]"
                      />
                    </div>
                    <div className="projects-meta flex flex-col gap-2 max-[480px]:max-w-[320px] max-[480px]:mx-auto">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="m-0 text-[1.1rem] max-[480px]:text-[1.05rem] text-[var(--crt-accent-light)]">
                          {project.title}
                        </h4>
                        <a
                          className="text-[1rem] max-[480px]:text-[1.05rem] lowercase text-[var(--crt-accent-light)] hover:bg-[var(--crt-accent)] hover:text-black px-1"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          github
                        </a>
                      </div>
                      <p className="m-0 text-[1rem] max-[480px]:text-[0.95rem] text-[rgba(var(--crt-accent-light-rgb),0.8)]">
                        {project.description}
                      </p>
                    </div>
                  </article>
                ))}
                {hiddenProjects.length > 0 ? (
                  <div className="mt-1">
                    <div
                      className={`grid gap-5 overflow-hidden transition-all duration-300 ease-out ${
                        isExpanded ? 'max-h-[2000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-2'
                      }`}
                    >
                      {hiddenProjects.map((project) => (
                        <article
                          key={project.title}
                          className="flex flex-col gap-3.5 [text-shadow:0_0_8px_rgba(var(--crt-accent-rgb),0.25)]"
                        >
                          <div className="projects-card border border-[rgba(var(--crt-accent-rgb),0.5)] rounded-[14px] overflow-hidden bg-[#020302] max-[480px]:max-w-[320px] max-[480px]:mx-auto">
                            <img
                              src={project.image}
                              alt={`${project.title} preview`}
                              loading="lazy"
                              className="w-full block h-auto saturate-[0.9]"
                            />
                          </div>
                          <div className="projects-meta flex flex-col gap-2 max-[480px]:max-w-[320px] max-[480px]:mx-auto">
                            <div className="flex items-baseline justify-between gap-4">
                              <h4 className="m-0 text-[1.1rem] max-[480px]:text-[1.05rem] text-[var(--crt-accent-light)]">
                                {project.title}
                              </h4>
                              <a
                                className="text-[1rem] max-[480px]:text-[1.05rem] lowercase text-[var(--crt-accent-light)] hover:bg-[var(--crt-accent)] hover:text-black px-1"
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                github
                              </a>
                            </div>
                            <p className="m-0 text-[1rem] max-[480px]:text-[0.95rem] text-[rgba(var(--crt-accent-light-rgb),0.8)]">
                              {project.description}
                            </p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex items-center justify-start px-5 max-[1100px]:px-0">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          className="inline-flex items-center rounded-full border border-[rgba(var(--crt-accent-rgb),0.5)] bg-[rgba(var(--crt-accent-rgb),0.08)] px-4 py-2 max-[480px]:px-3 max-[480px]:py-1.5 text-[0.85rem] max-[480px]:text-[0.75rem] uppercase tracking-[0.25em] max-[480px]:tracking-[0.2em] text-[var(--crt-accent-light)] shadow-[0_0_14px_rgba(var(--crt-accent-rgb),0.25)] transition-all hover:bg-[rgba(var(--crt-accent-rgb),0.18)] hover:text-[var(--crt-accent)] hover:shadow-[0_0_20px_rgba(var(--crt-accent-rgb),0.35)]"
        >
          {isExpanded ? 'show less' : 'show more'}
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
