import { motion } from 'framer-motion'
import { Crosshair, Mic2, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: Crosshair,
    title: 'Built on your methods',
    description:
      'Your frameworks, your protocols, your clinical reasoning — structured precisely as you think, not as a generic AI was trained to approximate.',
  },
  {
    icon: Mic2,
    title: 'In your voice',
    description:
      'Your conviction, your directness, your way of explaining a complex idea simply. Not a beige summary. Not hedged to mediocrity.',
  },
  {
    icon: ShieldCheck,
    title: 'Powered by your private knowledge',
    description:
      'The unpublished insights. The clinical notes. The lectures no one else has. Your onix runs on the dark data that defines your real expertise.',
  },
]

export default function SolutionReveal() {
  return (
    <section className="relative bg-onix-surface border-t border-onix-border py-32 md:py-44 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          className="text-onix-accent text-xs tracking-[0.3em] uppercase font-sans mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The solution
        </motion.p>

        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <motion.h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-onix-text leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Meet{' '}
            <span className="text-onix-accent italic">your onix.</span>
          </motion.h2>
        </div>

        <motion.p
          className="font-sans text-lg text-onix-muted text-center max-w-2xl mx-auto mb-24 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          A personalised AI model trained exclusively on your body of work. Not a chatbot.
          Not a search engine. Your intellectual presence — available to anyone who needs it, any time.
        </motion.p>

        {/* Benefit columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-onix-border">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={i}
                className="bg-onix-surface p-10 md:p-12 flex flex-col gap-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ backgroundColor: '#1e1e1e' }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-onix-bg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-onix-text leading-snug">
                  {benefit.title}
                </h3>
                <p className="font-sans text-sm text-onix-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
