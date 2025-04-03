import { Outlet } from "react-router";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Contact from '../components/Contact';

export function meta() {
  return [
    { title: "Subhajit Kar - Portfolio" },
    { name: "description", content: "Personal portfolio website of Subhajit Kar - IAM Specialist, Security Enthusiast, and Test Automation Expert" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Subhajit Kar. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/subhajit-kar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:karsubhajit2018@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
