import { useEffect, useState } from 'react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  imageOnRight?: boolean;
};

const getPreviewSrc = (project: Project) => {
  if (project.image) {
    return project.image;
  }

  if (!project.link) {
    return null;
  }

  return `https://image.thum.io/get/width/1000/noanimate/${project.link}`;
};

const mediaClassName =
  'projects-card overflow-hidden border border-[rgba(var(--crt-accent-rgb),0.5)] rounded-[14px] bg-[#020302] aspect-[4/3] max-[640px]:w-[42%] max-[640px]:shrink-0 max-[480px]:w-[40%]';

const ProjectCard = ({ project, imageOnRight = false }: ProjectCardProps) => {
  const previewSrc = getPreviewSrc(project);
  const [mediaFailed, setMediaFailed] = useState(false);

  useEffect(() => {
    setMediaFailed(false);
  }, [previewSrc]);

  const media = previewSrc && !mediaFailed ? (
    <img
      src={previewSrc}
      alt={`${project.title} preview`}
      loading="lazy"
      className="block h-full w-full object-cover saturate-[0.9]"
      onError={() => setMediaFailed(true)}
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center px-4 text-center text-[0.95rem] text-[rgba(var(--crt-accent-light-rgb),0.68)]">
      {project.title}
    </div>
  );

  return (
    <article
      className={`flex flex-col gap-3.5 [text-shadow:0_0_8px_rgba(var(--crt-accent-rgb),0.25)] max-[640px]:items-start max-[640px]:gap-3 ${imageOnRight ? 'max-[640px]:flex-row-reverse' : 'max-[640px]:flex-row'
        }`}
    >
      {project.link ? (
        <a
          className={`${mediaClassName} block`}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
        >
          {media}
        </a>
      ) : (
        <div className={mediaClassName}>{media}</div>
      )}
      <div className="projects-meta flex flex-col gap-2 max-[640px]:flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="m-0 text-[1.1rem] max-[480px]:text-[1rem] text-[var(--crt-accent-light)]">
            {project.title}
          </h4>
          <a
            className="shrink-0 text-[1rem] max-[480px]:text-[0.95rem] lowercase text-[var(--crt-accent-light)] hover:bg-[var(--crt-accent)] hover:text-black px-1"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </div>
        <p className="m-0 text-[1rem] max-[640px]:text-[0.95rem] max-[480px]:text-[0.9rem] text-[rgba(var(--crt-accent-light-rgb),0.8)]">
          {project.description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
