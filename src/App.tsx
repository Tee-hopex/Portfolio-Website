import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import CustomCursor from '@/components/CustomCursor';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import CaseStudy from '@/sections/CaseStudy';
import ScrollToTop from '@/components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <ScrollToTop />
        <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-teal-500/30 selection:text-teal-400 transition-colors duration-300">
          {/* Grain Overlay */}
          <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] noise-overlay" />
          
          <CustomCursor />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<CaseStudy />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}
