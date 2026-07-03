'use client'
import { motion } from 'framer-motion'
import { IconArrowUpRight } from '@tabler/icons-react'

const PROJECTS = [
  {
    name: 'BEZ – AI-Powered Bookkeeping & Finance Platform',
    company: 'Futureview Systems',
    year: '2025',
    desc: 'AI-driven finance SaaS for AP and bookkeeping teams. Built LLM-powered chatbot for natural-language QuickBooks queries, email summarisation from financial attachments, and custom Office JS functions pulling live KPIs into Excel.',
    stack: ['React.js', 'TypeScript', 'Bootstrap', 'SCSS', 'Webpack', 'Office JS API', 'AI/LLMs'],
  },
  {
    name: 'Pidilite Contractor Management Platform',
    company: 'Brainvire Infotech',
    year: '2024',
    desc: 'Contractor management dashboard with offline-first sync via RxDB — zero data loss across 100+ field agents in low-connectivity environments. Integrated geolocation and QR scanning to automate dealer loyalty check-ins.',
    stack: ['React.js', 'TypeScript', 'RxDB', 'TanStack Query', 'Zustand', 'Material UI', 'Redux'],
  },
  {
    name: 'Sing in Chinese – Gamified Language Learning',
    company: 'Brainvire Infotech',
    year: '2023',
    desc: '20-level gamified language learning app with enterprise RBAC across 4 user roles — scoped dashboards, permission-aware components, and a full admin panel covering subscriptions, progress tracking, and seasonal content.',
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: '#fff' }}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
        >
          <p className="eyebrow">Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">Selected production work from the last 3 years.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card"
              style={{ display: 'flex', overflow: 'hidden' }}
            >
              {/* Teal left bar */}
              <div style={{ width: 3, background: '#0d9488', flexShrink: 0 }} />

              <div style={{ padding: '24px 28px', flex: 1 }}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start',
                  justifyContent: 'space-between', gap: 16, marginBottom: 12,
                }}>
                  <div>
                    {/* Index number */}
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700,
                      color: '#cbd5e1', letterSpacing: '0.05em',
                      display: 'block', marginBottom: 6,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{
                      fontSize: '1rem', fontWeight: 600,
                      color: '#0f172a', marginBottom: 6, lineHeight: 1.4,
                    }}>
                      {p.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.84rem', color: '#64748b' }}>{p.company}</span>
                      <span className="tag tag-teal">{p.year}</span>
                    </div>
                  </div>
                  <IconArrowUpRight size={16} stroke={1.5} style={{ color: '#cbd5e1', flexShrink: 0, marginTop: 20 }} />
                </div>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#64748b', marginBottom: 16 }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
