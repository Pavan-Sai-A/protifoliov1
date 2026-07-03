'use client'
import { motion } from 'framer-motion'

const GROUPS = [
  { label: 'Languages',   items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS'] },
  { label: 'Frameworks',  items: ['React.js', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Zustand', 'RxDB'] },
  { label: 'Styling',     items: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Responsive Design'] },
  { label: 'AI & LLMs',  items: ['Prompt Engineering', 'Streaming UI', 'LLM Agent Integration'] },
  { label: 'APIs',        items: ['REST', 'GraphQL', 'Office JS API', 'QuickBooks Online API'] },
  { label: 'Performance', items: ['Code Splitting', 'Lazy Loading', 'Tree Shaking', 'Core Web Vitals'] },
  { label: 'Testing',     items: ['Vitest', 'Unit Testing', 'Integration Testing'] },
  { label: 'Tooling',     items: ['Webpack', 'Git', 'Vercel', 'Azure', 'Jira', 'ClickUp'] },
  { label: 'Practices',   items: ['Agile / Scrum', 'RBAC', 'Offline-First', 'WCAG Accessibility'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: '#f8fafc' }}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-sub">Technologies I work with across production projects.</p>
        </motion.div>

        <div className="skills-grid">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}
              style={{ background: '#fff', padding: '22px 24px' }}
            >
              <p style={{
                fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#0d9488', marginBottom: 14,
              }}>
                {g.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
