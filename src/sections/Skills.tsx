import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">{name}</span>
        <span className="text-xs font-mono text-teal-400/60">{level}%</span>
      </div>
      <div className="h-1.5 bg-[var(--color-bg)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.06, ease: 'easeOut' as const }}
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="// skills"
          title="My technical toolkit."
          subtitle="Technologies and tools I use to bring ideas to life — from pixel-perfect UIs to robust backend systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="card-hover"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-text)]">{category.category}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.items.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--color-text-muted)] opacity-50 text-sm mb-5 font-mono">// also comfortable with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Jest', 'Vitest', 'Cypress', 'Socket.io', 'Prisma', 'Sequelize',
              'Nginx', 'PM2', 'Vercel', 'Netlify', 'Cloudinary', 'Stripe',
            ].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05, borderColor: 'rgba(45,212,191,0.4)' }}
                className="px-3 py-1.5 text-xs text-[var(--color-text-muted)] border border-[var(--color-card-border)] rounded-full hover:text-[var(--color-text)] transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
