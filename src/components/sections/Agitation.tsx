import { motion } from 'framer-motion'

const lines = [
  { text: 'Big AI scraped your work.', emphasis: false },
  { text: 'They use it daily.', emphasis: false },
  { text: 'You get nothing.', emphasis: true },
]

function AnimatedLine({
  text,
  emphasis,
  delay,
}: {
  text: string
  emphasis: boolean
  delay: number
}) {
  return (
    <motion.p
      className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight ${
        emphasis
          ? 'text-onix-accent font-bold italic'
          : 'text-onix-text font-medium'
      }`}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.p>
  )
}

export default function Agitation() {
  return (
    <section className="relative bg-onix-bg py-32 md:py-44 px-6">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-onix-border to-transparent" />

      <div className="max-w-2xl mx-auto">
        {/* Section label */}
        <motion.p
          className="text-onix-accent text-xs tracking-[0.3em] uppercase font-sans mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The problem
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-onix-text mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Your genius.{' '}
          <span className="italic text-onix-accent">Stolen.</span>
        </motion.h2>

        {/* Punchy lines with visual breathing room */}
        <div className="space-y-8 md:space-y-10 border-l border-onix-border pl-8">
          {lines.map((line, i) => (
            <AnimatedLine
              key={i}
              text={line.text}
              emphasis={line.emphasis}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Supporting copy */}
        <motion.p
          className="font-sans text-base text-onix-muted leading-relaxed mt-16 max-w-lg"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Every paper you've published. Every framework you've developed. Every insight you've
          hard-won. It's all in there — powering products you'll never see a cent from.
        </motion.p>
      </div>
    </section>
  )
}
