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
    stack: ['React.js','TypeScript','Redux','Bootstrap','SCSS','Webpack','Vitest','Office JS API','AI/LLMs'],
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
    stack: ['React.js','Next.js','TypeScript','Tailwind CSS','Material UI','Redux','RxDB','TanStack Query','Zustand','Webpack','Vercel','Azure'],
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
    stack: ['React.js','Bootstrap','Node.js','Python','REST APIs','SQL'],
    bullets: [
      'Built reusable React and Bootstrap component libraries across 5+ internal projects, reducing feature development time by ~25%.',
      'Completed full-stack training in Node.js, Python, REST APIs, and SQL — underpinning a self-directed transition into production front-end development.',
    ],
  },
]

const T: React.CSSProperties = {
  display: 'inline-flex', padding: '3px 9px', borderRadius: 5,
  fontSize: '0.69rem', fontWeight: 500,
  background: '#161619', border: '1px solid #2e2e38',
  color: '#4a5568', whiteSpace: 'nowrap',
}

function JobCard({ job, index }: { job: typeof JOBS[0]; index: number }) {
  const [open, setOpen] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{ position: 'relative', paddingLeft: 22 }}
    >
      <div className="tl-dot" />

      <div className="card" style={{ overflow: 'hidden' }}>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: '100%', textAlign: 'left', padding: '18px 20px',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12,
            background: 'none', border: 'none', cursor: 'pointer',
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <h3 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#eef2ff' }}>{job.role}</h3>
              {job.current && (
                <span style={{
                  fontSize: '0.6rem', fontWeight: 600, padding: '2px 7px', borderRadius: 4,
                  background: 'rgba(99,102,241,0.1)', color: '#a5b4fc',
                  border: '1px solid rgba(99,102,241,0.18)',
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                }}>
                  Current
                </span>
              )}
            </div>
            <p style={{ fontSize: '0.8rem', color: '#4a5568' }}>
              {job.company} · {job.location} · {job.period}
            </p>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <IconChevronDown size={14} stroke={1.5} style={{ color: '#2e2e38', marginTop: 3 }} />
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
              <div style={{ padding: '0 20px 20px', borderTop: '1px solid #222228' }}>
                <ul style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none' }}>
                  {job.bullets.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: '0.83rem', lineHeight: 1.65, color: '#5a6478' }}>
                      <span style={{ color: '#6366f1', flexShrink: 0, marginTop: 1, fontSize: '0.7rem' }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 14 }}>
                  {job.stack.map(s => <span key={s} style={T}>{s}</span>)}
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
    <section id="experience" style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.45 }}
        style={{ marginBottom: 40 }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#eef2ff', marginBottom: 6 }}>
          Work Experience
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#4a5568' }}>3.4 years across fintech and EdTech.</p>
      </motion.div>

      <div style={{ position: 'relative' }}>
        <div className="tl-line" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {JOBS.map((job, i) => <JobCard key={job.company} job={job} index={i} />)}
        </div>
      </div>
    </section>
  )
}
