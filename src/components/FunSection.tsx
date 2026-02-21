import { useState } from 'react';
import { funGroups } from '../data/fun';

const FunSection = () => {
  const [showMiku, setShowMiku] = useState(false);
  const [mikuKey, setMikuKey] = useState(0);

  const triggerMikuPeek = () => {
    setShowMiku(true);
    setMikuKey((prev) => prev + 1);
  };

  return (
    <section aria-label="Fun">
      <div className="flex flex-wrap items-center gap-4 gap-y-2 mt-10 mb-6 max-[640px]:mt-8 max-[640px]:mb-5">
        <span className="text-[rgba(var(--crt-accent-rgb),0.7)] text-[1.1rem] max-[480px]:text-[1rem]">Mio@K-ON:</span>
        <span className="text-[1.4rem] max-[480px]:text-[1.2rem] lowercase text-[var(--crt-accent)] [text-shadow:0_0_10px_rgba(var(--crt-accent-rgb),0.5)]">
          fun
        </span>
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
          <span>terminal log</span>
          <button
            type="button"
            onClick={triggerMikuPeek}
            className="cursor-pointer select-none transition hover:text-[var(--crt-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--crt-accent)]"
            aria-label="Run fun.exe"
          >
            fun.exe
          </button>
        </div>
        <div className="mt-4 grid gap-6">
          {funGroups.map((group, index) => (
            <div
              key={group.label}
              className={index === 0 ? '' : 'border-t border-[rgba(var(--crt-accent-rgb),0.25)] pt-5'}
            >
              <div className="flex items-center gap-2 text-[1rem] text-[var(--crt-accent-light)]">
                <span className="text-[var(--crt-accent)]">$</span>
                <span className="lowercase">fun --{group.label}</span>
              </div>
              <ul className="list-none pl-6 m-0 mt-3 grid gap-2">
                {group.items.map((item) => (
                  <li key={`${group.label}-${item.label}`} className="grid gap-1">
                    {item.href ? (
                      <a
                        className="block py-1.5 transition hover:text-[var(--crt-accent)]"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="grid grid-cols-[14px_1fr] gap-x-2 gap-y-1">
                          <span className="text-[var(--crt-accent)]">&gt;</span>
                          <div className="flex flex-wrap items-baseline gap-2 text-[1.05rem] max-[480px]:text-[1rem]">
                            <span className="text-[rgba(var(--crt-accent-light-rgb),0.85)] lowercase">
                              {item.label}:
                            </span>
                            <span className="text-[rgba(var(--crt-accent-light-rgb),0.85)]">{item.value}</span>
                          </div>
                          {item.note ? (
                            <div className="col-start-2 text-[0.95rem] text-[rgba(var(--crt-accent-light-rgb),0.65)]">
                              # {item.note}
                            </div>
                          ) : null}
                        </div>
                      </a>
                    ) : (
                      <>
                        <div className="grid grid-cols-[14px_1fr] gap-x-2 gap-y-1">
                          <span className="text-[var(--crt-accent)]">&gt;</span>
                          <div className="flex flex-wrap items-baseline gap-2 text-[1.05rem] max-[480px]:text-[1rem]">
                            <span className="text-[rgba(var(--crt-accent-light-rgb),0.85)] lowercase">
                              {item.label}:
                            </span>
                            <span className="text-[rgba(var(--crt-accent-light-rgb),0.85)]">{item.value}</span>
                          </div>
                          {item.note ? (
                            <div className="col-start-2 text-[0.95rem] text-[rgba(var(--crt-accent-light-rgb),0.65)]">
                              # {item.note}
                            </div>
                          ) : null}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {showMiku ? (
        <div
          key={mikuKey}
          className="miku-peek fixed right-[-32px] bottom-6 z-[10001]"
          onAnimationEnd={() => setShowMiku(false)}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 120 160"
            className="block w-[90px] max-[600px]:w-[70px]"
            role="img"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="miku-hair" x1="0" x2="1">
                <stop offset="0%" stopColor="rgba(var(--crt-accent-rgb),0.15)" />
                <stop offset="100%" stopColor="rgba(var(--crt-accent-rgb),0.55)" />
              </linearGradient>
            </defs>
            <rect x="12" y="18" width="96" height="110" rx="22" fill="rgba(0,0,0,0.55)" stroke="rgba(var(--crt-accent-rgb),0.35)" />
            <rect x="6" y="12" width="18" height="120" rx="8" fill="url(#miku-hair)" />
            <rect x="96" y="12" width="18" height="120" rx="8" fill="url(#miku-hair)" />
            <circle cx="60" cy="60" r="26" fill="rgba(0,0,0,0.7)" stroke="rgba(var(--crt-accent-rgb),0.4)" />
            <circle cx="50" cy="58" r="4" fill="rgba(var(--crt-accent-rgb),0.7)" />
            <circle cx="70" cy="58" r="4" fill="rgba(var(--crt-accent-rgb),0.7)" />
            <path d="M48 72 Q60 80 72 72" stroke="rgba(var(--crt-accent-light-rgb),0.8)" strokeWidth="3" fill="none" />
          </svg>
        </div>
      ) : null}
    </section>
  );
};

export default FunSection;
