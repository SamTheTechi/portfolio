import BootSequence from './components/BootSequence';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ScanlineRipples from './components/ScanlineRipples';
import FunSection from './components/FunSection';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ScanlineRipples count={6} speed={8} duration={12} />
      <div className="crt relative min-h-screen">
        <BootSequence />
        <div id="main-content" className="opacity-0 animate-[boot-fade-in_0.5s_4s_forwards]">
          <main
            className="relative pt-8 pb-12 max-[720px]:pt-6 max-[720px]:pb-10 animate-[crt-jitter_12s_steps(1,end)_infinite]"
            aria-label="Content"
          >
            <div className="terminal-frame relative max-w-3xl mx-auto py-16 px-8 max-[720px]:py-10 max-[720px]:px-5 max-[480px]:py-8 max-[480px]:px-4 border border-[rgba(0,255,65,0.35)] rounded-[18px] bg-[rgba(0,255,65,0.05)] max-[640px]:bg-[rgba(0,255,65,0.025)] shadow-[0_0_40px_rgba(0,255,65,0.15),inset_0_0_30px_rgba(0,0,0,0.8)] overflow-hidden transform-gpu">
              <Header />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <FunSection />
              <ContactSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
