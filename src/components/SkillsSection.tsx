import { skillGroups } from '../data/profile';

const SkillsSection = () => (
  <section aria-label="Skills">
    <div className="flex flex-wrap items-center gap-4 gap-y-2 mt-10 mb-6 max-[640px]:mt-8 max-[640px]:mb-5">
      <span className="text-[rgba(0,255,65,0.7)] text-[1.1rem] max-[480px]:text-[1rem]">Lucy@Cyberpunk:</span>
      <span className="text-[1.4rem] max-[480px]:text-[1.2rem] lowercase text-[#00ff41] [text-shadow:0_0_10px_rgba(0,255,65,0.5)]">
        skills
      </span>
      <span
        className="flex-1 h-px bg-[linear-gradient(90deg,rgba(0,255,65,0.6),rgba(0,255,65,0))]"
        aria-hidden="true"
      />
    </div>
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
      {skillGroups.map((group) => (
        <article
          key={group.label}
          className="border border-[rgba(0,255,65,0.35)] rounded-[12px] px-4 py-3 max-[480px]:px-3 max-[480px]:py-2.5 bg-[rgba(0,0,0,0.55)]"
        >
          <div className="flex items-center gap-2 mb-2 text-[0.95rem] max-[480px]:text-[0.9rem] lowercase text-[#90ee90]">
            <span className="text-[#00ff41]">■</span>
            <span>{group.label}</span>
          </div>
          <div className="text-[1.05rem] max-[480px]:text-[1rem] text-[rgba(144,238,144,0.85)] leading-relaxed">
            {group.items.join(' · ')}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SkillsSection;
