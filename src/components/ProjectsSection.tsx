import { projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="projects-section">
      <div className="flex flex-wrap items-center gap-4 gap-y-2 mt-10 mb-6 max-[640px]:mt-8 max-[640px]:mb-5">
        <span className="text-[rgba(var(--crt-accent-rgb),0.7)] text-[1.1rem] max-[480px]:text-[1rem]">Sayu@Higehiro:</span>
        <h2
          id="projects-heading"
          className="text-[1.4rem] max-[480px]:text-[1.2rem] lowercase text-[var(--crt-accent)] [text-shadow:0_0_10px_rgba(var(--crt-accent-rgb),0.5)]"
        >
          projects
        </h2>
        <span
          className="flex-1 h-px bg-[linear-gradient(90deg,rgba(var(--crt-accent-rgb),0.6),rgba(var(--crt-accent-rgb),0))]"
          aria-hidden="true"
        />
      </div>
      <div className="projects-grid grid grid-cols-3 gap-8 max-[640px]:grid-cols-1">
        {projectCategories.map((category, index) => {
          const projects = category.projects.slice(0, 2);

          return (
            <div
              key={category.label}
              className={`px-5 ${index === 0 ? '' : 'border-l border-[rgba(var(--crt-accent-rgb),0.35)] max-[640px]:border-l-0 max-[640px]:border-t max-[640px]:pt-6'} max-[640px]:px-0`}
            >
              <h3 className="m-0 mb-4 text-[1.35rem] max-[480px]:text-[1.2rem] lowercase text-[var(--crt-accent)]">
                {category.label}
              </h3>
              <div className="flex flex-col gap-5">
                {projects.map((project, projectIndex) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    imageOnRight={projectIndex % 2 === 1}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
