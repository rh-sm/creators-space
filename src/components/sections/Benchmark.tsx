import { motion } from 'framer-motion'

const differentiators = [
  {
    title: 'Grounded in your truth',
    description: 'Never hallucinates outside your work. Every answer is traceable to something you actually wrote, said, or published.',
  },
  {
    title: 'Your voice, not a beige summary',
    description: 'Preserves conviction and directness. Your onix argues your positions — it doesn\'t hedge them into oblivion.',
  },
  {
    title: 'Powered by private knowledge',
    description: 'Built on dark data, not just your public content. The unpublished, unindexed insights that define your real edge.',
  },
]

const benchmarks = [
  { label: 'Onix', score: 1772, highlight: true },
  { label: 'GPT-4o', score: 1558, highlight: false },
  { label: 'Claude 3.5', score: 1491, highlight: false },
  { label: 'Gemini Pro', score: 1403, highlight: false },
]

const maxScore = Math.max(...benchmarks.map((b) => b.score))

export default function Benchmark() {
  return (
    <section className="relative bg-onix-surface border-t border-onix-border py-32 md:py-44 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          className="text-onix-accent text-xs tracking-[0.3em] uppercase font-sans mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Expert fidelity
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-onix-text mb-20 leading-tight max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          We put Onix side by side with every major AI platform.
        </motion.h2>

        {/* Differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-onix-border mb-20">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              className="bg-onix-surface p-10 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="w-1.5 h-6 bg-onix-accent mb-6" />
              <h3 className="font-serif text-lg font-semibold text-onix-text mb-4 leading-snug">
                {d.title}
              </h3>
              <p className="font-sans text-sm text-onix-muted leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="max-w-2xl">
          <p className="font-sans text-xs text-onix-muted tracking-[0.2em] uppercase mb-8">
            Expert Fidelity Score (EFS)
          </p>
          <div className="space-y-5">
            {benchmarks.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div className="w-24 flex-shrink-0 text-right">
                  <span
                    className={`font-sans text-xs ${
                      item.highlight ? 'text-onix-accent font-semibold' : 'text-onix-muted'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                <div className="flex-1 h-8 bg-onix-bg relative overflow-hidden">
                  <motion.div
                    className={`absolute left-0 top-0 h-full ${
                      item.highlight ? 'bg-onix-accent' : 'bg-onix-border'
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.score / maxScore) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <span
                    className={`absolute right-3 top-1/2 -translate-y-1/2 font-sans text-xs font-semibold ${
                      item.highlight ? 'text-onix-bg' : 'text-onix-muted'
                    }`}
                    style={{
                      mixBlendMode: item.highlight ? 'normal' : 'normal',
                    }}
                  >
                    {item.score.toLocaleString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="font-sans text-xs text-onix-muted mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="underline underline-offset-4 hover:text-onix-accent transition-colors duration-200">
              Read the full Expert Fidelity Methodology
            </button>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
