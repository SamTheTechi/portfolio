import { skillGroups } from '../data/profile';

const SkillsSection = () => (
  <section id="skills" aria-labelledby="skills-heading">
    <div className="flex flex-wrap items-center gap-4 gap-y-2 mt-10 mb-6 max-[640px]:mt-8 max-[640px]:mb-5">
      <span className="text-[rgba(var(--crt-accent-rgb),0.7)] text-[1.1rem] max-[480px]:text-[1rem]">Lucy@Cyberpunk:</span>
      <h2
        id="skills-heading"
        className="text-[1.4rem] max-[480px]:text-[1.2rem] lowercase text-[var(--crt-accent)] [text-shadow:0_0_10px_rgba(var(--crt-accent-rgb),0.5)]"
      >
        skills
      </h2>
      <span
        className="flex-1 h-px bg-[linear-gradient(90deg,rgba(var(--crt-accent-rgb),0.6),rgba(var(--crt-accent-rgb),0))]"
        aria-hidden="true"
      />
    </div>
    <div className="grid gap-[0.95rem] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
      {skillGroups.map((group) => (
        <article
          key={group.label}
          className="border border-[rgba(var(--crt-accent-rgb),0.35)] rounded-[12px] px-[0.95rem] py-[0.72rem] max-[480px]:px-[0.85rem] max-[480px]:py-[0.62rem] bg-[rgba(0,0,0,0.55)]"
        >
          <div className="flex items-center gap-2 mb-[0.45rem] text-[0.9rem] max-[480px]:text-[0.85rem] lowercase text-[var(--crt-accent-light)]">
            <span className="text-[var(--crt-accent)]">■</span>
            <span>{group.label}</span>
          </div>
          <div className="text-[1rem] max-[480px]:text-[0.95rem] text-[rgba(var(--crt-accent-light-rgb),0.85)] leading-relaxed">
            {group.items.join(' · ')}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SkillsSection;
