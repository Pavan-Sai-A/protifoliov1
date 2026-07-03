'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconChevronDown } from '@tabler/icons-react'

const JOBS = [
  {
    role: 'Software Engineer',
    company: 'Futureview Systems',
    location: 'Hyderabad',
    period: 'May 2025 – Present',
    current: true,
    stack: ['React.js', 'TypeScript', 'Redux', 'Bootstrap', 'SCSS', 'Webpack', 'Vitest', 'Office JS API', 'AI/LLMs'],
    bullets: [
      'Architected the front-end of BEZ, an AI-driven finance SaaS serving AP and bookkeeping teams across transaction categorisation, reconciliation, and reporting.',
      'Delivered AI-powered bookkeeping automation cutting manual processing time by 30% through intelligent categorisation pipelines.',
      'Engineered a custom Excel Add-in (Office JS API) surfacing live ERP data and AI insights inside spreadsheets, eliminating tool-switching for finance users.',
      'Integrated LLM-based agents for AP invoice processing and MD&A drafting with streaming UI, graceful degradation, and reusable prompt templates.',
      'Shipped a conversational AI chatbot for natural-language QuickBooks Online queries, reducing analyst dependency.',
      'Authored unit and integration tests with Vitest achieving full coverage across core financial workflow modules.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Brainvire Infotech',
    location: 'Ahmedabad',
    period: 'Jan 2023 – Jan 2025',
    current: false,
    stack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Redux', 'RxDB', 'TanStack Query', 'Zustand', 'Webpack', 'Vercel', 'Azure'],
    bullets: [
      'Reduced initial bundle size by ~40% via code splitting and lazy loading, cutting first-contentful-paint time and improving user retention.',
      'Designed Redux state architecture and RESTful API integration for a multi-tenant dashboard with offline-first sync via RxDB.',
      'Architected a 20-level gamified EdTech platform with enterprise RBAC — 4 user roles with scoped route guards and permission-aware components.',
      'Shipped features across 3 production products in 2 years, collaborating with product, backend, and QA teams in Agile sprints.',
    ],
  },
  {
    role: 'Apprentice Developer',
    company: 'NxtWave',
    location: 'Remote',
    period: 'May 2022 – Dec 2022',
    current: false,
    stack: ['React.js', 'Bootstrap', 'Node.js', 'Python', 'REST APIs', 'SQL'],
    bullets: [
      'Built reusable React and Bootstrap component libraries across 5+ internal projects, reducing feature development time by ~25%.',
      'Completed full-stack training in Node.js, Python, REST APIs, and SQL — underpinning a self-directed transition into production front-end development.',
    ],
  },
]

function JobCard({ job, index }: { job: typeof JOBS[0]; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="tl-wrap"
    >
      <div className="tl-dot" />
      <div className="card" style={{ overflow: 'hidden' }}>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: '100%', textAlign: 'left', padding: '20px 24px',
            display: 'flex', alignItems: 'flex-start',
            justifyContent: 'space-between', gap: 16,
            background: 'none', border: 'none', cursor: 'pointer',
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 5 }}>
              <h3 style={{ fontSize: '0.97rem', fontWeight: 600, color: '#0f172a' }}>{job.role}</h3>
              {job.current && (
                <span style={{
                  fontSize: '0.62rem', fontWeight: 700,
                  padding: '2px 9px', borderRadius: 5,
                  background: 'rgba(13,148,136,0.08)', color: '#0f766e',
                  border: '1px solid rgba(13,148,136,0.2)',
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                }}>
                  Current
                </span>
              )}
            </div>
            <p style={{ fontSize: '0.84rem', color: '#64748b' }}>
              {job.company} · {job.location} · {job.period}
            </p>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0, marginTop: 2 }}>
            <IconChevronDown size={16} stroke={1.5} style={{ color: '#94a3b8' }} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '0 24px 24px', borderTop: '1px solid #e2e8f0' }}>
                <ul style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none' }}>
                  {job.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, fontSize: '0.875rem', lineHeight: 1.75, color: '#475569' }}>
                      <span style={{ color: '#0d9488', flexShrink: 0, marginTop: 5, fontSize: '0.45rem' }}>●</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                  {job.stack.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: 820 }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Career</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-sub">3.4 years across fintech and EdTech products.</p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div className="tl-line" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {JOBS.map((job, i) => <JobCard key={job.company} job={job} index={i} />)}
          </div>
        </div>

      </div>
    </section>
  )
}
