import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen">
            <ThemeToggle />
            <Hero />
            <About />
            <Experience />
            <Certifications />
            <Education />
            <Contact />
        </div>
    );
}

export default App; 