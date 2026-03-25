import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: '01',
    title: 'Profile your expertise',
    description:
      'Tell Onix who you are and what makes your perspective distinct. Your speciality, your frameworks, your clinical philosophy.',
  },
  {
    number: '02',
    title: 'Train your onix',
    description:
      'Upload your work — papers, transcripts, lectures, protocols. Refine the output until it sounds exactly like you.',
  },
  {
    number: '03',
    title: 'Submit for review',
    description:
      'Onix evaluates your model for accuracy and fidelity before going live. Your credibility is ours to protect.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-onix-bg border-t border-onix-border py-32 md:py-44 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          className="text-onix-accent text-xs tracking-[0.3em] uppercase font-sans mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How it works
        </motion.p>

        <div className="flex flex-col md:flex-row gap-0 relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-[3.25rem] left-0 right-0 h-px bg-onix-border z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative flex-1 flex flex-col md:pr-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Step number + connector node */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 border border-onix-border bg-onix-bg flex items-center justify-center flex-shrink-0 group-hover:border-onix-accent transition-colors">
                  <span className="font-serif text-2xl font-bold text-onix-accent">{step.number}</span>
                </div>
                {/* Mobile vertical connector */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-7 top-14 w-px h-12 bg-onix-border" />
                )}
              </div>

              <h3 className="font-serif text-2xl font-semibold text-onix-text mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-onix-muted leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* No technical skills badge */}
        <motion.div
          className="mt-16 inline-flex items-center gap-3 border border-onix-border px-6 py-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-onix-accent animate-pulse" />
          <span className="font-sans text-sm text-onix-muted tracking-wide">
            No technical skills needed
          </span>
        </motion.div>
      </div>

      {/* Second CTA block */}
      <div className="max-w-3xl mx-auto mt-32 text-center">
        <motion.h2
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-onix-text mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Your expertise is worth more than your billable hours.
        </motion.h2>
        <motion.p
          className="font-sans text-lg text-onix-muted mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          Your onix earns in every time zone, every language, around the clock.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button size="lg">Start building your onix</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
