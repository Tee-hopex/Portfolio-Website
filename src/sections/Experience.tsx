import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        <SectionHeading
          label="// experience"
          title="Where I've built my craft."
          subtitle="Professional roles that shaped who I am as a developer and educator."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/40 via-teal-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-8 hidden md:flex">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                    className="w-6 h-6 rounded-full bg-[var(--color-bg)] border-2 border-teal-500 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="card-hover group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-teal-400" />
                        <span className="text-teal-400 text-sm font-mono">{job.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:text-teal-400 transition-colors duration-300">
                        {job.role}
                      </h3>
                      <p className="text-[var(--color-text-muted)] font-medium mt-0.5">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-[var(--color-text-muted)] opacity-60 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        <span className="font-mono">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-5">{job.description}</p>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-6">
                    {job.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]"
                      >
                        <ChevronRight size={14} className="text-teal-400 mt-0.5 shrink-0" />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <span key={tech} className="badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
