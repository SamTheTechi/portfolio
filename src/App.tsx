import BootSequence from './components/BootSequence';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import TextGlitch from './components/TextGlitch';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="crt relative min-h-screen animate-[crt-jitter_12s_steps(1,end)_infinite]">
      <span
        className="fixed left-0 top-[-15vh] h-[2px] w-screen bg-[linear-gradient(90deg,transparent,rgba(0,255,65,0.45),transparent)] opacity-[0.35] mix-blend-screen pointer-events-none z-[9999] animate-[scanline-ripple_9s_linear_infinite]"
        aria-hidden="true"
      />
      <BootSequence />
      <TextGlitch />
      <div id="main-content" className="opacity-0 animate-[boot-fade-in_0.5s_4s_forwards]">
        <main className="relative pt-8 pb-12" aria-label="Content">
          <div className="terminal-frame relative max-w-3xl mx-auto py-16 px-8 border border-[rgba(0,255,65,0.35)] rounded-[18px] bg-[radial-gradient(circle_at_top,rgba(0,255,65,0.08),rgba(0,0,0,0.95))] shadow-[0_0_40px_rgba(0,255,65,0.12),inset_0_0_30px_rgba(0,0,0,0.8)] overflow-hidden transform-gpu">
            <Header />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
}
