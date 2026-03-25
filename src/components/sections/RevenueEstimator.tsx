import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Slider } from '@/components/ui/slider'

const PRICE_PER_USER = 29
const CONVERSION_RATE = 0.005

function useAnimatedNumber(target: number, duration = 600) {
  const [display, setDisplay] = useState(target)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const fromRef = useRef(target)

  useEffect(() => {
    const from = fromRef.current
    const to = target
    if (from === to) return

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    startRef.current = null

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(from + (to - from) * eased))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        fromRef.current = to
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration])

  return display
}

const fields = [
  { id: 'social', label: 'Social following', max: 1000000, step: 1000, defaultValue: 50000, unit: '' },
  { id: 'newsletter', label: 'Newsletter subscribers', max: 500000, step: 500, defaultValue: 10000, unit: '' },
  { id: 'podcast', label: 'Podcast monthly downloads', max: 500000, step: 1000, defaultValue: 20000, unit: '' },
  { id: 'books', label: 'Book sales (copies)', max: 100000, step: 100, defaultValue: 5000, unit: '' },
]

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(0) + 'k'
  return n.toString()
}

export default function RevenueEstimator() {
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(fields.map((f) => [f.id, f.defaultValue]))
  )

  const total = Object.values(values).reduce((sum, v) => sum + v, 0)
  const revenue = Math.round(total * CONVERSION_RATE * PRICE_PER_USER)
  const animatedRevenue = useAnimatedNumber(revenue)

  return (
    <section className="relative bg-onix-surface border-t border-onix-border py-32 md:py-44 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          className="text-onix-accent text-xs tracking-[0.3em] uppercase font-sans mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Revenue estimator
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-onix-text mb-4 leading-tight">
              How much could your onix earn?
            </h2>
            <p className="font-sans text-sm text-onix-muted mb-12 leading-relaxed">
              Adjust your existing audience to see your estimated monthly earnings.
            </p>

            <div className="space-y-10">
              {fields.map((field) => (
                <div key={field.id}>
                  <div className="flex justify-between items-baseline mb-4">
                    <label className="font-sans text-xs text-onix-muted tracking-wide uppercase">
                      {field.label}
                    </label>
                    <span className="font-serif text-lg font-semibold text-onix-text">
                      {formatNumber(values[field.id])}
                    </span>
                  </div>
                  <Slider
                    min={0}
                    max={field.max}
                    step={field.step}
                    value={[values[field.id]]}
                    onValueChange={([val]) => setValues((prev) => ({ ...prev, [field.id]: val }))}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: output */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="border border-onix-border p-10 md:p-14">
              <p className="font-sans text-xs text-onix-muted tracking-[0.25em] uppercase mb-4">
                Estimated monthly revenue
              </p>
              <div className="font-serif font-bold text-onix-accent leading-none mb-2">
                <span className="text-3xl align-top mt-3 inline-block">$</span>
                <span className="text-6xl sm:text-7xl md:text-8xl">
                  {animatedRevenue.toLocaleString()}
                </span>
              </div>
              <p className="font-sans text-xs text-onix-muted mt-6 leading-relaxed">
                Estimate based on real audience conversion data.
                <br />
                Formula: total audience × 0.5% conversion × $29/user
              </p>

              <div className="mt-10 pt-8 border-t border-onix-border">
                <p className="font-sans text-xs text-onix-muted mb-2">At 1% conversion</p>
                <p className="font-serif text-2xl font-semibold text-onix-text">
                  ${Math.round(total * 0.01 * PRICE_PER_USER).toLocaleString()}
                  <span className="text-sm text-onix-muted font-sans font-normal ml-2">/ mo</span>
                </p>
              </div>
            </div>

            <p className="font-sans text-xs text-onix-muted mt-4 text-center">
              You keep 70% of every transaction
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
