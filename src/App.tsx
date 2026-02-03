import './Style.css';
import BootSequence from './components/BootSequence';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <BootSequence />
      <div id="main-content" className="opacity-0">
        <main className="page-content" aria-label="Content">
          <div className="max-w-3xl mx-auto py-16 px-8">
            <Header />
            <ul className="list-none pl-8">
              <About />
              <Skills />
              <Projects />
              <Contact />
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

