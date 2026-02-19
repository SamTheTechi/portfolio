import { useMemo } from 'react';

type ScanlineSeed = {
  thickness: number;
  alpha: number;
  glow: number;
  localSpeed: number;
  delay: number;
};

type ScanlineRipplesProps = {
  count?: number;
  speed?: number;
  duration?: number;
  className?: string;
};

const ScanlineRipples = ({
  count = 1,
  speed = 9,
  duration = 9,
  className = '',
}: ScanlineRipplesProps) => {
  if (count < 1 || speed <= 0 || duration <= 0) {
    return null;
  }

  const seeds = useMemo<ScanlineSeed[]>(() => {
    const spread = Math.max(1, Math.min(duration, speed));

    return Array.from({ length: count }).map(() => {
      const thickness = 1 + Math.random() * 1.6;
      const alpha = 0.25 + Math.random() * 0.35;
      const glow = 0.12 + Math.random() * 0.25;
      const localSpeed = speed * (0.85 + Math.random() * 0.5);
      const delay = -Math.random() * spread;
      return { thickness, alpha, glow, localSpeed, delay };
    });
  }, [count, duration, speed]);

  return (
    <>
      {seeds.map((seed, index) => (
        <span
          key={index}
          className={`scanline-ripple fixed left-0 top-[-15vh] w-screen mix-blend-screen pointer-events-none z-[9999] [animation-name:scanline-ripple] [animation-timing-function:linear] [animation-iteration-count:infinite] ${className}`}
          style={{
            height: `${seed.thickness}px`,
            animationDuration: `${seed.localSpeed}s`,
            animationDelay: `${seed.delay}s`,
            '--scanline-alpha': `${seed.alpha}`,
            '--scanline-glow': `${seed.glow}`,
          } as React.CSSProperties & { [key: string]: string}}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

export default ScanlineRipples;
