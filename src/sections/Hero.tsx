import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import Magnetic from '@/components/Magnetic';

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'IoT Systems Builder',
  'Tech Educator',
];

function TypewriterText() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < role.length) {
          setDisplayText(role.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(role.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRole]);

  return (
    <span className="text-gradient font-mono">
      {displayText}
      <span className="animate-pulse text-teal-400">|</span>
    </span>
  );
}

function FloatingOrb({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-10 animate-float pointer-events-none ${className}`}
    />
  );
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-bg)] pt-24 sm:pt-0"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-teal-500/8 via-transparent to-transparent pointer-events-none" />

      {/* Floating orbs */}
      <FloatingOrb className="w-96 h-96 bg-teal-400 -top-20 -right-20" />
      <FloatingOrb className="w-72 h-72 bg-cyan-400 bottom-20 -left-20" />
      <FloatingOrb className="w-48 h-48 bg-teal-300 top-1/3 right-1/4" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-teal-500/30 bg-teal-500/5 text-xs sm:text-sm text-teal-500 mb-6 sm:mb-8 max-w-[90vw] text-center"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
          </span>
          {personalInfo.availability} · {personalInfo.location}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.0] sm:leading-[0.95] tracking-tight mb-5 sm:mb-6"
        >
          <span className="block text-[var(--color-text)]">Hi, I'm</span>
          <span className="block text-gradient mt-2">
            {personalInfo.name.split(' ')[0]}{' '}
            <span className="text-[var(--color-text)]">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-5 sm:mb-6 min-h-[40px] sm:min-h-[48px]"
        >
          <Terminal size={24} className="text-teal-400/60" />
          <TypewriterText />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[var(--color-text-muted)] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
        >
          {personalInfo.shortBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={18} />
            View My Work
          </motion.button>
          <motion.a
            href={personalInfo.resumeUrl}
            download
            className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden sm:flex items-center justify-center gap-3"
        >
          {[
            { href: personalInfo.github, icon: Github, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[var(--color-text-muted)] hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300 block"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] opacity-50 hover:opacity-100 hover:text-teal-400 transition-all cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
