import { projectCategories } from '../data/projects';

const ProjectsSection = () => (
  <section aria-label="Projects">
    <div className="flex items-center gap-4 mt-10 mb-6">
      <span className="text-[rgba(0,255,65,0.7)] text-[1.1rem]">user@host:</span>
      <span className="text-[1.4rem] lowercase text-[#00ff41] [text-shadow:0_0_10px_rgba(0,255,65,0.5)]">
        projects
      </span>
      <span
        className="flex-1 h-px bg-[linear-gradient(90deg,rgba(0,255,65,0.6),rgba(0,255,65,0))]"
        aria-hidden="true"
      />
    </div>
    <div className="grid grid-cols-3 gap-8 max-[1100px]:grid-cols-1">
      {projectCategories.map((category, index) => (
        <div
          key={category.label}
          className={`px-5 ${index === 0 ? '' : 'border-l border-[rgba(0,255,65,0.35)] max-[1100px]:border-l-0 max-[1100px]:border-t max-[1100px]:pt-6'} max-[1100px]:px-0`}
        >
          <h3 className="m-0 mb-4 text-[1.35rem] lowercase text-[#00ff41]">{category.label}</h3>
          <div className="flex flex-col gap-5">
            {category.projects.map((project) => (
              <article key={project.title} className="flex flex-col gap-3.5 [text-shadow:0_0_8px_rgba(0,255,65,0.25)]">
                <div className="border border-[rgba(0,255,65,0.5)] rounded-[14px] overflow-hidden bg-[#020302]">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full block h-auto saturate-[0.9]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="m-0 text-[1.1rem] text-[#90ee90]">{project.title}</h4>
                    <a
                      className="text-[1rem] lowercase text-[#90ee90] hover:bg-[#00ff41] hover:text-black px-1"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </div>
                  <p className="m-0 text-[1rem] text-[rgba(144,238,144,0.8)]">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
