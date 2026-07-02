'use client'
import { motion } from 'framer-motion'

const GROUPS = [
  { label: 'Languages',    items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS'] },
  { label: 'Frameworks',   items: ['React.js', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Zustand', 'RxDB'] },
  { label: 'Styling',      items: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Responsive Design'] },
  { label: 'AI & LLMs',   items: ['Prompt Engineering', 'Streaming UI', 'LLM Agent Integration'] },
  { label: 'APIs',         items: ['REST', 'GraphQL', 'Office JS API', 'QuickBooks Online API'] },
  { label: 'Performance',  items: ['Code Splitting', 'Lazy Loading', 'Tree Shaking', 'Core Web Vitals'] },
  { label: 'Testing',      items: ['Vitest', 'Unit Testing', 'Integration Testing'] },
  { label: 'Tooling',      items: ['Webpack', 'Git', 'Vercel', 'Azure', 'Jira', 'ClickUp'] },
  { label: 'Practices',    items: ['Agile / Scrum', 'RBAC', 'Offline-First', 'WCAG Accessibility'] },
]

const T: React.CSSProperties = {
  display: 'inline-flex', padding: '4px 10px', borderRadius: 5,
  fontSize: '0.72rem', fontWeight: 500,
  background: '#161619', border: '1px solid #2e2e38',
  color: '#4a5568', whiteSpace: 'nowrap',
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>

      <motion.div
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.45 }}
        style={{ marginBottom: 40 }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#eef2ff', marginBottom: 6 }}>
          Technical Skills
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#4a5568' }}>
          Technologies I work with day-to-day.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
        {GROUPS.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.04 }}
            style={{
              padding: '20px 22px',
              borderTop: '1px solid #222228',
              borderLeft: i % 3 !== 0 ? '1px solid #222228' : 'none',
            }}
          >
            <p style={{
              fontSize: '0.68rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#6366f1', marginBottom: 12,
            }}>
              {g.label}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {g.items.map(item => <span key={item} style={T}>{item}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
