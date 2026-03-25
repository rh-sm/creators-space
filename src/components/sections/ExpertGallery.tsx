import { motion } from 'framer-motion'

const experts = [
  {
    initials: 'JB',
    name: 'Dr. Jeffrey Bland',
    title: 'Father of Functional Medicine',
    quote:
      '"The science of personalised medicine has always been about meeting the individual where they are. Onix makes that possible at a scale I couldn\'t have imagined."',
  },
  {
    initials: 'WL',
    name: 'Dr. William Li',
    title: 'Food as Medicine Pioneer',
    quote:
      '"Every day people make food choices with real health consequences and they\'re flying blind. An onix lets my research actually reach them."',
  },
  {
    initials: 'EE',
    name: 'Dr. Elissa Epel',
    title: 'Redefining How We Age',
    quote:
      '"Stress biology and longevity isn\'t simple. But Onix captures the nuance of my work in a way that actually serves the people asking the hard questions."',
  },
]

export default function ExpertGallery() {
  return (
    <section className="relative bg-onix-bg border-t border-onix-border py-32 md:py-44 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          className="text-onix-accent text-xs tracking-[0.3em] uppercase font-sans mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Expert voices
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-onix-text mb-20 leading-tight max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Built for the world's most credible minds.
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experts.map((expert, i) => (
            <motion.div
              key={i}
              className="border border-onix-border p-8 flex flex-col gap-6 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: '#C97D3A', transition: { duration: 0.25 } }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-onix-border flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-lg font-bold text-onix-muted">
                    {expert.initials}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-onix-text">{expert.name}</p>
                  <p className="font-sans text-xs text-onix-accent mt-0.5">{expert.title}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-base text-onix-muted leading-relaxed italic border-t border-onix-border pt-6">
                {expert.quote}
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
