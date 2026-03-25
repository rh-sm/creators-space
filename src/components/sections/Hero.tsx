import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const gradientOrbs = [
  { cx: '20%', cy: '30%', r: '35%', color: '#C97D3A', opacity: 0.06 },
  { cx: '80%', cy: '70%', r: '40%', color: '#C97D3A', opacity: 0.04 },
  { cx: '50%', cy: '50%', r: '50%', color: '#1a0f05', opacity: 0.3 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-onix-bg px-6">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="orb1" cx="20%" cy="30%" r="35%">
              <stop offset="0%" stopColor="#C97D3A" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#C97D3A" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="orb2" cx="80%" cy="70%" r="40%">
              <stop offset="0%" stopColor="#C97D3A" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#C97D3A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <motion.rect
            width="100%" height="100%" fill="url(#orb1)"
            animate={{ x: [-20, 20, -20], y: [-10, 15, -10] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.rect
            width="100%" height="100%" fill="url(#orb2)"
            animate={{ x: [20, -20, 20], y: [10, -15, 10] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      {/* Thin horizontal rule top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-onix-border"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Nav wordmark */}
      <motion.div
        className="absolute top-8 left-6 md:left-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="font-serif text-xl font-bold tracking-tight text-onix-text">
          onix
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.p
          className="text-onix-accent text-xs tracking-[0.3em] uppercase mb-10 font-sans"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Your expertise, multiplied
        </motion.p>

        {/* Main headline — word by word */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-onix-text mb-8 text-balance">
          {['You', 'set', 'out', 'to', 'change', 'lives.'].map((word, i) => (
            <motion.span
              key={`line1-${i}`}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          {['But', 'there\'s', 'only', 'one', 'of', 'you.'].map((word, i) => (
            <motion.span
              key={`line2-${i}`}
              className="inline-block mr-[0.25em] text-onix-accent italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Sub-copy */}
        <motion.p
          className="font-sans text-lg md:text-xl text-onix-muted max-w-2xl mx-auto leading-relaxed mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          There are people right now who need what you know. Struggling with challenges you can solve.
          Asking questions you've already answered.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button size="lg" className="text-sm">
              Start building your onix — it's free
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <span className="text-onix-muted text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-onix-muted to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
