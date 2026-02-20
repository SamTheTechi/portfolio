import { funGroups } from '../data/fun';

const FunSection = () => (
  <section aria-label="Fun">
    <div className="flex flex-wrap items-center gap-4 gap-y-2 mt-10 mb-6 max-[640px]:mt-8 max-[640px]:mb-5">
      <span className="text-[rgba(0,255,65,0.7)] text-[1.1rem] max-[480px]:text-[1rem]">Mio@K-ON:</span>
      <span className="text-[1.4rem] max-[480px]:text-[1.2rem] lowercase text-[#00ff41] [text-shadow:0_0_10px_rgba(0,255,65,0.5)]">
        fun
      </span>
      <span
        className="flex-1 h-px bg-[linear-gradient(90deg,rgba(0,255,65,0.6),rgba(0,255,65,0))]"
        aria-hidden="true"
      />
    </div>
    <div
      className="border border-[rgba(0,255,65,0.4)] rounded-[16px] px-6 py-5 max-[600px]:px-4 max-[600px]:py-4 bg-[rgba(0,0,0,0.72)] shadow-[inset_0_0_18px_rgba(0,255,65,0.08)]"
      style={{ fontFamily: "'VT323', 'Courier New', monospace" }}
    >
      <div className="flex items-center justify-between text-[0.85rem] tracking-[0.12em] uppercase text-[rgba(144,238,144,0.65)]">
        <span>terminal log</span>
        <span>fun.exe</span>
      </div>
      <div className="mt-4 grid gap-6">
        {funGroups.map((group, index) => (
          <div
            key={group.label}
            className={index === 0 ? '' : 'border-t border-[rgba(0,255,65,0.25)] pt-5'}
          >
            <div className="flex items-center gap-2 text-[1rem] text-[#90ee90]">
              <span className="text-[#00ff41]">$</span>
              <span className="lowercase">fun --{group.label}</span>
            </div>
            <ul className="list-none pl-6 m-0 mt-3 grid gap-2">
              {group.items.map((item) => (
                <li key={`${group.label}-${item.label}`} className="grid gap-1">
                  {item.href ? (
                    <a
                      className="block py-1.5 transition hover:text-[#00ff41]"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="grid grid-cols-[14px_1fr] gap-x-2 gap-y-1">
                        <span className="text-[#00ff41]">&gt;</span>
                        <div className="flex flex-wrap items-baseline gap-2 text-[1.05rem] max-[480px]:text-[1rem]">
                          <span className="text-[rgba(144,238,144,0.85)] lowercase">
                            {item.label}:
                          </span>
                          <span className="text-[rgba(144,238,144,0.85)]">{item.value}</span>
                        </div>
                        {item.note ? (
                          <div className="col-start-2 text-[0.95rem] text-[rgba(144,238,144,0.65)]">
                            # {item.note}
                          </div>
                        ) : null}
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="grid grid-cols-[14px_1fr] gap-x-2 gap-y-1">
                        <span className="text-[#00ff41]">&gt;</span>
                        <div className="flex flex-wrap items-baseline gap-2 text-[1.05rem] max-[480px]:text-[1rem]">
                          <span className="text-[rgba(144,238,144,0.85)] lowercase">
                            {item.label}:
                          </span>
                          <span className="text-[rgba(144,238,144,0.85)]">{item.value}</span>
                        </div>
                        {item.note ? (
                          <div className="col-start-2 text-[0.95rem] text-[rgba(144,238,144,0.65)]">
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
  </section>
);

export default FunSection;
