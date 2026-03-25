import { motion } from 'framer-motion'
import {
  DollarSign,
  Zap,
  Unlock,
  LogOut,
  SlidersHorizontal,
  FileText,
} from 'lucide-react'

const commitments = [
  {
    icon: DollarSign,
    title: 'You set your price. You keep 70%.',
    description: 'Every dollar your expertise earns, 70 cents goes to you. Simple.',
  },
  {
    icon: Zap,
    title: 'Free to build. No setup fees.',
    description: 'No usage charges. No seat licences. Start building your onix at zero cost.',
  },
  {
    icon: Unlock,
    title: 'No exclusivity.',
    description: 'Keep selling your books, courses, and consultations. Onix adds income — it doesn\'t compete with it.',
  },
  {
    icon: LogOut,
    title: 'Leave anytime.',
    description: 'We delete your model and all source material. No lock-in. No residual data.',
  },
  {
    icon: SlidersHorizontal,
    title: 'You set the guardrails.',
    description: 'Define what your onix will and won\'t engage with. Your limits are respected absolutely.',
  },
  {
    icon: FileText,
    title: 'Your IP stays yours.',
    description: 'We are a training layer, not a rights holder. Your work remains yours, always.',
  },
]

export default function TermsOfTrust() {
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
          Terms of trust
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-onix-text mb-20 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Your knowledge.{' '}
          <span className="italic text-onix-accent">Your terms.</span>
        </motion.h2>

        {/* 2x3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-onix-border">
          {commitments.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                className="bg-onix-bg p-10 flex flex-col gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} className="text-onix-accent flex-shrink-0" />
                  <h3 className="font-sans text-sm font-semibold text-onix-text leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-onix-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
