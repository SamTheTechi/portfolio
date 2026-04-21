import { experienceItems } from '../data/experience';

const ExperienceSection = () => (
  <section id="experience" aria-labelledby="experience-heading">
    <div className="flex flex-wrap items-center gap-4 gap-y-2 mt-10 mb-6 max-[640px]:mt-8 max-[640px]:mb-5">
      <span className="text-[rgba(var(--crt-accent-rgb),0.7)] text-[1.1rem] max-[480px]:text-[1rem]">Rin@Index:</span>
      <h2
        id="experience-heading"
        className="text-[1.4rem] max-[480px]:text-[1.2rem] lowercase text-[var(--crt-accent)] [text-shadow:0_0_10px_rgba(var(--crt-accent-rgb),0.5)]"
      >
        experience
      </h2>
      <span
        className="flex-1 h-px bg-[linear-gradient(90deg,rgba(var(--crt-accent-rgb),0.6),rgba(var(--crt-accent-rgb),0))]"
        aria-hidden="true"
      />
    </div>
    <div
      className="relative border border-[rgba(var(--crt-accent-rgb),0.4)] rounded-[16px] px-6 py-5 max-[600px]:px-4 max-[600px]:py-4 bg-[rgba(0,0,0,0.72)] shadow-[inset_0_0_18px_rgba(var(--crt-accent-rgb),0.08)] overflow-hidden"
      style={{ fontFamily: "'VT323', 'Courier New', monospace" }}
    >
      <div className="flex items-center justify-between text-[0.85rem] tracking-[0.12em] uppercase text-[rgba(var(--crt-accent-light-rgb),0.65)]">
        <span>career log</span>
        <span>exp --list</span>
      </div>
      <div className="mt-4 grid gap-6">
        {experienceItems.map((item, index) => (
          <div
            key={`${item.company}-${item.role}-${item.dates}`}
            className={index === 0 ? '' : 'border-t border-[rgba(var(--crt-accent-rgb),0.25)] pt-5'}
          >
            <div className="flex items-center gap-2 text-[1rem] text-[var(--crt-accent-light)]">
              <span className="text-[var(--crt-accent)]">$</span>
              {item.link ? (
                <a
                  className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[1.1rem] no-underline hover:text-[var(--crt-accent)] hover:no-underline"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="lowercase text-[var(--crt-accent-light)]">{item.company}</span>
                  <span className="text-[rgba(var(--crt-accent-rgb),0.6)]">--</span>
                  <span className="lowercase text-[rgba(var(--crt-accent-light-rgb),0.85)]">{item.role}</span>
                  <span className="text-[rgba(var(--crt-accent-rgb),0.6)]">--</span>
                  <span className="text-[rgba(var(--crt-accent-light-rgb),0.68)]">{item.dates}</span>
                </a>
              ) : (
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[1.1rem]">
                  <span className="lowercase">{item.company}</span>
                  <span className="text-[rgba(var(--crt-accent-rgb),0.6)]">--</span>
                  <span className="lowercase text-[rgba(var(--crt-accent-light-rgb),0.85)]">{item.role}</span>
                  <span className="text-[rgba(var(--crt-accent-rgb),0.6)]">--</span>
                  <span className="text-[rgba(var(--crt-accent-light-rgb),0.68)]">{item.dates}</span>
                </div>
              )}
            </div>
            <ul className="list-none pl-6 m-0 mt-3 grid gap-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="grid grid-cols-[14px_1fr] gap-x-2 gap-y-1">
                  <span className="text-[0.9rem] text-[var(--crt-accent)]">&gt;</span>
                  <span className="text-[0.95rem] max-[480px]:text-[0.9rem] text-[rgba(var(--crt-accent-light-rgb),0.85)]">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
