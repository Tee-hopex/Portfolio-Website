import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, X, Star, Layers, ArrowRight } from 'lucide-react';
import { projects } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';
import Magnetic from '@/components/Magnetic';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string | null;
  featured: boolean;
  image: string;
  highlights: string[];
  challenge?: string;
  solution?: string;
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group cursor-pointer card border border-[var(--color-card-border)] hover:border-teal-500/30 transition-colors duration-500 flex flex-col relative perspective-1000 overflow-hidden"
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(circle at ${((x as number) + 0.5) * 100}% ${((y as number) + 0.5) * 100}%, rgba(45, 212, 191, 0.12), transparent 80%)`
          ),
        }}
      />

      {/* Image area */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-5 bg-[var(--color-bg)]">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-500/5 flex items-center justify-center">
          <div className="text-6xl font-black text-gradient opacity-20 font-mono select-none">
            {project.id.toString().padStart(2, '0')}
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="badge text-xs">{project.category}</span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs">
              <Star size={10} fill="currentColor" /> Featured
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-teal-500/10 flex items-center justify-center backdrop-blur-sm"
        >
          <span className="text-[var(--color-text)] text-sm font-medium px-4 py-2 bg-[var(--color-nav-bg)] rounded-lg border border-teal-500/30">
            View Details
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[var(--color-text)] group-hover:text-teal-400 transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs bg-[var(--color-bg)] border border-[var(--color-card-border)] rounded text-[var(--color-text-muted)]">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-[var(--color-text-muted)] opacity-60">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--color-card-border)]">
          <Link
            to={`/project/${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors group"
          >
            Read Case Study <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label="View Code"
            >
              <Github size={16} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[var(--color-text-muted)] hover:text-teal-400 transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
      style={{ backgroundColor: 'var(--color-modal-overlay)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-[var(--color-card-border)]"
        style={{ backgroundColor: 'var(--color-modal-bg)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="h-48 bg-[var(--color-bg)] relative overflow-hidden rounded-t-2xl border-b border-[var(--color-card-border)]">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/15 to-cyan-500/5 flex items-center justify-center">
            <span className="text-8xl font-black text-gradient opacity-15 font-mono">
              {project.id.toString().padStart(2, '0')}
            </span>
          </div>
          <div className="absolute bottom-4 left-6">
            <span className="badge">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-[var(--color-card-bg)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-all border border-[var(--color-card-border)]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-[var(--color-modal-bg)]">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">{project.title}</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{project.longDescription}</p>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="text-sm font-mono text-teal-400 mb-3 flex items-center gap-2">
              <Layers size={14} /> Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-6">
            <h4 className="text-sm font-mono text-teal-400 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[var(--color-card-border)]">
            <Link
              to={`/project/${project.id}`}
              onClick={onClose}
              className="btn-primary flex-1 justify-center text-sm py-2.5 order-1 sm:order-2"
            >
              <ArrowRight size={16} /> Read Full Case Study
            </Link>
            <div className="flex flex-1 gap-3 order-2 sm:order-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 justify-center text-sm py-2.5"
              >
                <Github size={16} /> Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 justify-center text-sm py-2.5"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filtered = filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// projects"
          title="Things I've built."
          subtitle="A collection of projects spanning logistics, healthcare, edtech, and developer tools."
        />

        {/* Filter tabs */}
        <div className="flex gap-2 mb-10">
          {(['all', 'featured'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                filter === tab
                  ? 'bg-teal-500/15 text-teal-400 border border-teal-500/30'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-teal-500/5 border border-transparent'
              }`}
            >
              {tab} {tab === 'all' ? `(${projects.length})` : `(${projects.filter(p => p.featured).length})`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
