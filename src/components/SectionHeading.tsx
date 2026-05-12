import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({ label, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="relative">
          <span className="section-label relative z-10">{label}</span>
          <motion.div
            className="absolute inset-0 bg-teal-400/10 blur-md rounded-full -z-10"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="h-px bg-gradient-to-r from-teal-500/40 to-transparent" 
        />
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text)] tracking-tight"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className={word.toLowerCase().includes('.') ? 'text-gradient' : ''}>
            {word}{' '}
          </span>
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-[var(--color-text-muted)] text-lg md:text-xl max-w-3xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
