'use client'
import { motion } from 'framer-motion'
import { IconArrowUpRight } from '@tabler/icons-react'

const T: React.CSSProperties = {
  display: 'inline-flex', padding: '3px 9px', borderRadius: 5,
  fontSize: '0.69rem', fontWeight: 500,
  background: '#161619', border: '1px solid #2e2e38',
  color: '#4a5568', whiteSpace: 'nowrap',
}

const PROJECTS = [
  {
    name: 'BEZ – AI-Powered Bookkeeping & Finance Platform',
    company: 'Futureview Systems',
    year: '2025',
    desc: 'AI-driven finance SaaS for AP and bookkeeping teams. Built LLM-powered chatbot for natural-language QuickBooks queries, email summarisation from financial attachments, and custom Office JS functions pulling live KPIs into Excel.',
    stack: ['React.js','TypeScript','Bootstrap','SCSS','Webpack','Office JS API','AI/LLMs'],
  },
  {
    name: 'Pidilite Contractor Management Platform',
    company: 'Brainvire Infotech',
    year: '2024',
    desc: 'Contractor management dashboard with offline-first sync via RxDB — zero data loss across 100+ field agents in low-connectivity environments. Integrated geolocation and QR scanning to automate dealer loyalty check-ins.',
    stack: ['React.js','TypeScript','RxDB','TanStack Query','Zustand','Material UI','Redux'],
  },
  {
    name: 'Sing in Chinese – Gamified Language Learning',
    company: 'Brainvire Infotech',
    year: '2023',
    desc: '20-level gamified language learning app with enterprise RBAC across 4 user roles — scoped dashboards, permission-aware components, and a full admin panel covering subscriptions, progress tracking, and seasonal content.',
    stack: ['React.js','TypeScript','Tailwind CSS','REST APIs'],
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.45 }}
        style={{ marginBottom: 40 }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#eef2ff', marginBottom: 6 }}>
          Featured Projects
        </h2>
        <p style={{ fontSize: '0.88rem', color: '#4a5568' }}>
          Selected work from the last 3 years.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card"
            style={{ padding: '22px 24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 10 }}>
              <div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#eef2ff', marginBottom: 3 }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.76rem', color: '#4a5568' }}>
                  {p.company} · {p.year}
                </p>
              </div>
              <IconArrowUpRight size={14} stroke={1.5} style={{ color: '#2e2e38', flexShrink: 0, marginTop: 2 }} />
            </div>

            <p style={{ fontSize: '0.84rem', lineHeight: 1.7, color: '#5a6478', marginBottom: 14 }}>
              {p.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {p.stack.map(s => <span key={s} style={T}>{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
