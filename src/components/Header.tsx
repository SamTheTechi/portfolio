import { useSecretThemeToggle } from './Theme'

export default function Header() {
  const secretRef = useSecretThemeToggle<HTMLHeadingElement>();
  return (
    <header ref={secretRef} className='no-select'>

      <h1 className="inline-block text-4xl max-[640px]:text-3xl max-[420px]:text-[1.75rem] overflow-hidden whitespace-nowrap w-0 text-[var(--crt-accent-strong)] [text-shadow:0_0_12px_rgba(var(--crt-accent-strong-rgb),0.7),0_0_24px_rgba(var(--crt-accent-rgb),0.45)] border-r-[0.1em] border-r-[var(--crt-accent-strong)] animate-[typing_2s_steps(14,end)_4.5s_forwards,blink-caret_.75s_step-end_4.5s_infinite]">
        &gt; Sameer Gupta
      </h1>
    </header>
  );
}



