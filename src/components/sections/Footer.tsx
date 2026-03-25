import { motion } from 'framer-motion'

const links = ['Privacy', 'Terms', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-onix-bg border-t border-onix-border px-6 py-10">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Left: wordmark + tagline */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-serif text-lg font-bold text-onix-text tracking-tight">onix</span>
          <span className="font-sans text-xs text-onix-muted">
            Multiply your impact, not your hours.
          </span>
        </div>

        {/* Right: nav links */}
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link}
              className="font-sans text-xs text-onix-muted hover:text-onix-text transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </nav>
      </motion.div>
    </footer>
  )
}
