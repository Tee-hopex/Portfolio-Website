import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ExternalLink, Github, 
  Layers, Cpu, Zap, Shield, 
  Users, Globe, Code2 
} from 'lucide-react';
import { projects } from '@/data/portfolio';
import Magnetic from '@/components/Magnetic';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id)) || projects[0];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-[var(--color-nav-bg)] backdrop-blur-xl border-b border-[var(--color-card-border)]">
        <div className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-teal-400 transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-mono tracking-widest uppercase">Back to Portfolio</span>
          </Link>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              <Github size={20} />
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-teal-400 transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">{project.category}</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 leading-[1.1] text-[var(--color-text)]">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl text-[var(--color-text-muted)] max-w-3xl leading-relaxed mb-8 sm:mb-10">
              {project.longDescription}
            </p>
            
            {/* Quick Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 py-6 sm:py-8 border-y border-[var(--color-card-border)]">
              <div>
                <h4 className="text-xs font-mono text-teal-400/70 uppercase tracking-widest mb-2">Role</h4>
                <p className="text-sm font-medium text-[var(--color-text)]">Lead Developer</p>
              </div>
              <div>
                <h4 className="text-xs font-mono text-teal-400/70 uppercase tracking-widest mb-2">Timeline</h4>
                <p className="text-sm font-medium text-[var(--color-text)]">{project.timeline || '2023 — 2024'}</p>
              </div>
              <div>
                <h4 className="text-xs font-mono text-teal-400/70 uppercase tracking-widest mb-2">Client</h4>
                <p className="text-sm font-medium text-[var(--color-text)]">{project.client || 'Internal Project'}</p>
              </div>
              <div>
                <h4 className="text-xs font-mono text-teal-400/70 uppercase tracking-widest mb-2">Service</h4>
                <p className="text-sm font-medium text-[var(--color-text)]">{project.service || project.category}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column — Details */}
            <div className="lg:col-span-8 space-y-20">
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                    <Zap size={22} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">The Challenge</h2>
                </div>
                <div className="space-y-4 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
                  <p>{project.challenge || "Building a scalable, high-performance system that meets strict industry standards while maintaining a seamless user experience."}</p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Cpu size={22} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">The Solution</h2>
                </div>
                <div className="space-y-4 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
                  <p>{project.solution || "Leveraging modern tech stacks like React, Node.js, and TypeScript to create a robust, modular architecture that ensures both security and speed."}</p>
                </div>
              </div>

              {/* Key Features Bento */}
              <div>
                <h2 className="text-3xl font-bold mb-10 text-[var(--color-text)]">Key Implementations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(project.features || [
                    { title: 'Full Stack Architecture', desc: 'Robust end-to-end development with modern security standards.' },
                    { title: 'Responsive UI', desc: 'Seamless experience across all devices with high-performance animations.' },
                    { title: 'Performance First', desc: 'Optimized delivery and bundle sizes for fast load times.' },
                    { title: 'Clean Code', desc: 'Maintainable, documented, and production-ready codebase.' }
                  ]).map((feat, i) => {
                    const icons = [Shield, Globe, Users, Code2];
                    const Icon = icons[i % icons.length];
                    return (
                      <div key={feat.title} className="card p-6 border border-[var(--color-card-border)] hover:border-teal-500/30 transition-colors group">
                        <Icon className="text-teal-400 mb-4 group-hover:scale-110 transition-transform" size={24} />
                        <h3 className="text-xl font-bold mb-2 text-[var(--color-text)]">{feat.title}</h3>
                        <p className="text-[var(--color-text-muted)] text-sm">{feat.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column — Sidebar Meta */}
            <aside className="lg:col-span-4 space-y-10">
              <div className="card p-8 border border-[var(--color-card-border)] sticky top-32">
                <h3 className="text-sm font-mono text-teal-400 uppercase tracking-widest mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                  <span className="badge">Socket.io</span>
                  <span className="badge">AWS S3</span>
                  <span className="badge">PostgreSQL</span>
                </div>

                <div className="space-y-6">
                  <Magnetic strength={0.3}>
                    <a href={project.live || '#'} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                      <ExternalLink size={18} />
                      Visit Live Site
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.3}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
                      <Github size={18} />
                      View Source Code
                    </a>
                  </Magnetic>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <section className="py-20 border-t border-[var(--color-card-border)]">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-text-muted)] text-sm mb-6 uppercase tracking-[0.2em] font-mono opacity-60">Next Project</p>
          <Link 
            to={`/project/${(project.id % projects.length) + 1}`}
            className="text-4xl md:text-6xl font-black text-[var(--color-text)] hover:text-teal-400 transition-colors"
          >
            {projects.find(p => p.id === (project.id % projects.length) + 1)?.title || projects[0].title}
          </Link>
        </div>
      </section>
    </div>
  );
}
