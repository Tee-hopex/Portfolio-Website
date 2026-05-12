import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, BookOpen, Coffee, Award, Sparkles, Globe } from 'lucide-react';
import { about, personalInfo } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// about me"
          title="Building with purpose."
          subtitle="A blend of engineering excellence, design intuition, and a drive to solve real-world problems."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-4 h-auto"
        >
          {/* Main Bio Card - Large */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                  <Code2 size={24} />
                </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text)]">{about.headline}</h3>
              </div>
              <div className="space-y-4">
                {about.bio.map((para, i) => (
                  <p key={i} className="text-[var(--color-text-muted)] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2 text-[var(--color-text-muted)] text-sm">
              <Globe size={14} className="text-teal-500/60" />
              <span>Based in {personalInfo.location} · Working Worldwide</span>
            </div>
          </motion.div>

          {/* Stats Card - Vertical */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 card p-6 flex flex-col justify-around text-center"
          >
            {[
              { value: '3+', label: 'Years Experience', icon: <Award size={20} /> },
              { value: '100+', label: 'Devs Mentored', icon: <BookOpen size={20} /> },
              { value: '10+', label: 'Projects Shipped', icon: <Sparkles size={20} /> },
            ].map((stat, i) => (
              <div key={stat.label} className={i !== 2 ? 'border-b border-[var(--color-card-border)] pb-4' : ''}>
                <div className="flex justify-center text-teal-400/40 mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-gradient">{stat.value}</div>
                <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Image/Avatar Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 relative group overflow-hidden rounded-2xl bg-[var(--color-card-bg)]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Profile Image */}
              <img 
                src="/me.jpg" 
                alt={personalInfo.name}
                className={`absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  setImageLoaded(false);
                }}
              />
              
              {/* Fallback Initials (Visible if image fails/missing) */}
              {!imageLoaded && (
                <div className="relative z-10 text-9xl font-black text-gradient opacity-30 select-none font-mono group-hover:scale-110 transition-transform duration-700">
                  TH
                </div>
              )}

              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-500/10 opacity-50 pointer-events-none" />
            </div>
            <div className="absolute inset-0 border border-[var(--color-card-border)] group-hover:border-teal-500/30 transition-colors duration-500" />
            
            {/* Status badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border border-[var(--color-card-border)]">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-xs font-medium text-[var(--color-text-muted)]">Available for hire</span>
              </div>
            </div>
          </motion.div>

          {/* Fun Facts - Horizontal Grid */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 lg:col-span-4 card p-6"
          >
            <h4 className="text-sm font-mono text-[var(--color-text-muted)] opacity-50 mb-4 uppercase tracking-widest">// some fun facts</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {about.funFacts.map((fact, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-teal-500/20 transition-all group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{fact.icon}</span>
                  <span className="text-sm text-[var(--color-text-muted)] leading-tight">{fact.text}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] hover:border-teal-500/20 transition-all group">
                <span className="text-2xl group-hover:scale-110 transition-transform"><Coffee size={24} className="text-amber-500/60" /></span>
                <span className="text-sm text-[var(--color-text-muted)] leading-tight">Powered by Caffeine</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
