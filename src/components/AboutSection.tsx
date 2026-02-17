import { aboutLines } from '../data/profile';

const AboutSection = () => (
  <section aria-label="About">
    <div className="flex items-center gap-4 mt-10 mb-6">
      <span className="text-[rgba(0,255,65,0.7)] text-[1.1rem]">user@host:</span>
      <span className="text-[1.4rem] lowercase text-[#00ff41] [text-shadow:0_0_10px_rgba(0,255,65,0.5)]">
        about
      </span>
      <span
        className="flex-1 h-px bg-[linear-gradient(90deg,rgba(0,255,65,0.6),rgba(0,255,65,0))]"
        aria-hidden="true"
      />
    </div>
    <div className="border border-[rgba(0,255,65,0.4)] rounded-[16px] p-6 bg-[rgba(0,0,0,0.65)] shadow-[inset_0_0_18px_rgba(0,255,65,0.08)]">
      {aboutLines.map((line) => (
        <p key={line} className="m-0 text-[1.1rem] text-[rgba(144,238,144,0.85)]">
          {line}
        </p>
      ))}
    </div>
  </section>
);

export default AboutSection;
