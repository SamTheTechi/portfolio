const BootSequence = () => (
  <div
    id="boot-sequence"
    className="fixed top-0 left-0 w-screen h-screen bg-black z-[9999] flex items-center justify-center p-6 animate-[finish-boot_4s_forwards]"
  >
    <div className="terminal-frame relative w-[min(760px,92vw)] px-8 py-6 rounded-[14px] border border-[rgba(0,255,65,0.4)] bg-[rgba(0,0,0,0.88)] shadow-[inset_0_0_20px_rgba(0,255,65,0.08)] overflow-hidden">
      <div className="flex justify-between text-[1.05rem] tracking-[0.02em] mb-[1.15rem] text-[rgba(144,238,144,0.85)]">
        <span>AKTU BIOS v2.3</span>
        <span>(C) 1999 AKTU Corp.</span>
      </div>
      <div className="grid gap-2.5">
        <p className="m-0 text-[#00ff41] opacity-0 whitespace-pre animate-[boot-fade-in_0.5s_0.5s_forwards]">
          Detecting IDE drives... OK
        </p>
        <p className="m-0 text-[#00ff41] opacity-0 whitespace-pre animate-[boot-fade-in_0.5s_1.2s_forwards]">
          Memory Test: 65536K OK
        </p>
        <p className="m-0 text-[#00ff41] opacity-0 whitespace-pre animate-[boot-fade-in_0.5s_2s_forwards]">
          Initializing portfolio.sys
        </p>
        <p className="m-0 text-[#00ff41] opacity-0 whitespace-pre animate-[boot-fade-in_0.5s_2.8s_forwards]">
          Booting from Hard Disk...
        </p>
      </div>
    </div>
  </div>
);

export default BootSequence;
