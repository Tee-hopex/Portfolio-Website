import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/2 to-transparent pointer-events-none" />

      <div className="container-custom">
        <SectionHeading
          label="// testimonials"
          title="What people say."
          subtitle="Kind words from colleagues, clients, and students I've worked with."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Big quote decoration */}
          <div className="absolute -top-6 -left-4 text-teal-500/10 pointer-events-none">
            <Quote size={80} />
          </div>

          {/* Testimonial card */}
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="card border border-[var(--color-card-border)] p-8 md:p-12"
            >
              <p className="text-[var(--color-text-muted)] text-lg md:text-xl leading-relaxed italic mb-8">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar initials */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {testimonials[current].name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text)]">{testimonials[current].name}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-teal-400'
                      : 'w-2 h-2 bg-[var(--color-text-muted)] opacity-30 hover:opacity-60'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-[var(--color-card-border)] text-[var(--color-text-muted)] hover:text-teal-400 hover:border-teal-500/30 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-[var(--color-card-border)] text-[var(--color-text-muted)] hover:text-teal-400 hover:border-teal-500/30 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
