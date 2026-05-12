import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail, Github, Linkedin, MapPin, Send, CheckCircle,
  Copy, Check, MessageSquare, ExternalLink,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(4, 'Subject must be at least 4 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socials = [
    { icon: Github, label: 'GitHub', href: personalInfo.github, handle: '@HopeTolu' },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, handle: 'Afolayan Tolu Hope' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        <SectionHeading
          label="// contact"
          title="Let's work together."
          subtitle="Whether it's a project, a job offer, or just a chat — my inbox is always open."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left panel — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability card */}
            <div className="card border border-teal-500/15 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
                </span>
                <span className="text-teal-400 font-medium text-sm">{personalInfo.availability}</span>
              </div>
              <p className="text-[var(--color-text-muted)] text-sm">
                Currently open to full-time roles, freelance contracts, and interesting collaborations.
              </p>
            </div>

            {/* Email */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={16} className="text-teal-400" />
                <span className="text-sm font-medium text-[var(--color-text-muted)]">Email me directly</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-[var(--color-text)] hover:text-teal-400 transition-colors font-mono truncate"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="shrink-0 p-1.5 rounded-lg text-[var(--color-text-muted)] opacity-40 hover:opacity-100 hover:text-teal-400 hover:bg-teal-500/10 transition-all"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={14} className="text-teal-400" /> : <Copy size={14} />}
                </button>
              </div>
              {copiedEmail && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-teal-400 mt-2"
                >
                  ✓ Copied to clipboard!
                </motion.p>
              )}
            </div>

            {/* Location */}
            <div className="card p-5">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-teal-400" />
                <div>
                  <div className="text-sm font-medium text-[var(--color-text)]">{personalInfo.location}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5">WAT (UTC+1) timezone</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-4 flex items-center justify-between group hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[var(--color-bg)] group-hover:bg-teal-500/10 transition-colors">
                      <Icon size={16} className="text-[var(--color-text-muted)] group-hover:text-teal-400 transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--color-text)]">{label}</div>
                      <div className="text-xs text-[var(--color-text-muted)] opacity-60">{handle}</div>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-[var(--color-text-muted)] opacity-30 group-hover:opacity-80 group-hover:text-teal-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card border border-teal-500/20 p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-5"
                >
                  <CheckCircle size={32} className="text-teal-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Message sent!</h3>
                <p className="text-[var(--color-text-muted)] mb-6">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline text-sm">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="card border border-[var(--color-card-border)] p-6 space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={16} className="text-teal-400" />
                  <span className="text-sm font-mono text-teal-400">Send a message</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Your Name *</label>
                    <input
                      {...register('name')}
                      placeholder="John Doe"
                      className="input-field"
                      id="contact-name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Email Address *</label>
                    <input
                      {...register('email')}
                      placeholder="john@example.com"
                      type="email"
                      className="input-field"
                      id="contact-email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Subject *</label>
                  <input
                    {...register('subject')}
                    placeholder="Project collaboration / Job opportunity / ..."
                    className="input-field"
                    id="contact-subject"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-[var(--color-text-muted)] mb-1.5">Message *</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell me about your project, opportunity, or what you'd like to discuss..."
                    className="input-field resize-none"
                    id="contact-message"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-navy-950/30 border-t-navy-950 rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
