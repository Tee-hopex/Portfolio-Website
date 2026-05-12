import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];
const socials = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-[var(--color-card-border)] py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-mono font-bold text-xl mb-1">
              <span className="text-teal-400">&lt;</span>
              <span className="text-[var(--color-text)]">Tolu</span>
              <span className="text-teal-400">/&gt;</span>
            </div>
            <p className="text-[var(--color-text-muted)] opacity-50 text-xs">
              Full Stack Developer · Benin City, Nigeria
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-[var(--color-text-muted)] hover:text-teal-400 transition-colors cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Socials + back to top */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-[var(--color-text-muted)] opacity-50 hover:opacity-100 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
            <div className="w-px h-5 bg-[var(--color-card-border)] mx-1" />
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-[var(--color-text-muted)] opacity-50 hover:opacity-100 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-200"
              whileHover={{ y: -2 }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-[var(--color-card-border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-text-muted)] opacity-40">
          <p>
            © {new Date().getFullYear()} Afolayan Tolu Hope. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed & built with <Heart size={11} className="text-teal-500 fill-teal-500 mx-0.5" /> by Tolu
          </p>
        </div>
      </div>
    </footer>
  );
}
