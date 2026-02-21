import { aboutLines } from '../data/profile';

const AboutSection = () => (
  <section aria-label="About">
    <div className="flex flex-wrap items-center gap-4 gap-y-2 mt-10 mb-6 max-[640px]:mt-8 max-[640px]:mb-5">
      <span className="text-[rgba(var(--crt-accent-rgb),0.7)] text-[1.1rem] max-[480px]:text-[1rem]">Asuna@Sao:</span>
      <span className="text-[1.4rem] max-[480px]:text-[1.2rem] lowercase text-[var(--crt-accent)] [text-shadow:0_0_10px_rgba(var(--crt-accent-rgb),0.5)]">
        about
      </span>
      <span
        className="flex-1 h-px bg-[linear-gradient(90deg,rgba(var(--crt-accent-rgb),0.6),rgba(var(--crt-accent-rgb),0))]"
        aria-hidden="true"
      />
    </div>
    <div className="border border-[rgba(var(--crt-accent-rgb),0.4)] rounded-[16px] p-6 bg-[rgba(0,0,0,0.65)] shadow-[inset_0_0_18px_rgba(var(--crt-accent-rgb),0.08)]">
      {aboutLines.map((line) => (
        <p
          key={line}
          className="m-0 text-[1.15rem] max-[480px]:text-[1.05rem] text-[rgba(var(--crt-accent-light-rgb),0.85)]"
        >
          {line}
        </p>
      ))}
    </div>
  </section>
);

export default AboutSection;
