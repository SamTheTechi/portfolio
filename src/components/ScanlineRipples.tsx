import type { CSSProperties } from 'react';
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

function seededValue(index: number, salt: number, speed: number, duration: number, count: number) {
  const seed = Math.sin((index + 1) * 97.13 + salt * 31.7 + speed * 11.1 + duration * 7.3 + count * 3.1);
  return seed - Math.floor(seed);
}

const ScanlineRipples = ({
  count = 1,
  speed = 9,
  duration = 9,
  className = '',
}: ScanlineRipplesProps) => {
  const seeds = useMemo<ScanlineSeed[]>(() => {
    if (count < 1 || speed <= 0 || duration <= 0) {
      return [];
    }

    const spread = Math.max(1, Math.min(duration, speed));

    return Array.from({ length: count }, (_, index) => {
      const thickness = 1 + seededValue(index, 1, speed, duration, count) * 1.6;
      const alpha = 0.25 + seededValue(index, 2, speed, duration, count) * 0.35;
      const glow = 0.12 + seededValue(index, 3, speed, duration, count) * 0.25;
      const localSpeed = speed * (0.85 + seededValue(index, 4, speed, duration, count) * 0.5);
      const delay = -seededValue(index, 5, speed, duration, count) * spread;

      return { thickness, alpha, glow, localSpeed, delay };
    });
  }, [count, duration, speed]);

  if (seeds.length === 0) {
    return null;
  }

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
          } as CSSProperties & { [key: string]: string }}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

export default ScanlineRipples;
