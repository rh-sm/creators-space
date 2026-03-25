import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ClosingCTA() {
  return (
    <section className="relative bg-onix-surface border-t border-onix-border overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="closingOrb" cx="50%" cy="0%" r="60%">
              <stop offset="0%" stopColor="#C97D3A" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C97D3A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#closingOrb)" />
        </svg>
      </div>

      {/* Primary CTA */}
      <div className="relative max-w-4xl mx-auto text-center px-6 pt-32 pb-32 md:pt-44 md:pb-44">
        <motion.p
          className="text-onix-accent text-xs tracking-[0.3em] uppercase font-sans mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Start today
        </motion.p>

        <motion.h2
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-onix-text mb-8 leading-[1.05] text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Bring your genius to those who need it most.
        </motion.h2>

        <motion.p
          className="font-sans text-lg text-onix-muted mb-14 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          We're launching with health and wellness. Start building your onix today. It's free.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
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

      {/* Secondary section — waitlist */}
      <div className="relative border-t border-onix-border">
        <div className="max-w-4xl mx-auto text-center px-6 py-20">
          <motion.p
            className="font-sans text-xs text-onix-muted tracking-[0.2em] uppercase mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Not in health and wellness?
          </motion.p>

          <motion.p
            className="font-sans text-base text-onix-muted max-w-xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            We're expanding into personal finance, relationships, legal guidance, and lifestyle.
            Build your onix now — when your vertical opens, approved experts launch first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" size="default">
                Join the waitlist
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
