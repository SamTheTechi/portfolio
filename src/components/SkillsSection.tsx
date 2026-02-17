import { skillGroups } from '../data/profile';

const SkillsSection = () => (
  <section aria-label="Skills">
    <div className="flex items-center gap-4 mt-10 mb-6">
      <span className="text-[rgba(0,255,65,0.7)] text-[1.1rem]">user@host:</span>
      <span className="text-[1.4rem] lowercase text-[#00ff41] [text-shadow:0_0_10px_rgba(0,255,65,0.5)]">
        skills
      </span>
      <span
        className="flex-1 h-px bg-[linear-gradient(90deg,rgba(0,255,65,0.6),rgba(0,255,65,0))]"
        aria-hidden="true"
      />
    </div>
    <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
      {skillGroups.map((group) => (
        <article
          key={group.label}
          className="border border-[rgba(0,255,65,0.35)] rounded-[14px] px-[1.1rem] py-4 bg-[rgba(0,0,0,0.7)] shadow-[inset_0_0_14px_rgba(0,255,65,0.08)]"
        >
          <h3 className="m-0 mb-3 text-[1.05rem] lowercase text-[#90ee90]">
            {group.label}
          </h3>
          <ul className="list-none p-0 m-0 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="px-[0.6rem] py-[0.35rem] border border-[rgba(0,255,65,0.4)] rounded-full text-[0.95rem] text-[rgba(0,255,65,0.85)] bg-[rgba(0,255,65,0.05)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default SkillsSection;
