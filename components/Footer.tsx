'use client'
import { motion } from 'framer-motion'
import { IconMail, IconPhone, IconBrandLinkedin, IconWorld, IconArrowUpRight } from '@tabler/icons-react'

const AWARDS = [
  {
    title: 'Team Player of the Quarter',
    org: 'Futureview Systems · Q3 2025',
    desc: 'Recognised for coordinating front-end, back-end, and finance teams on the BEZ AI feature launch.',
  },
  {
    title: 'Rising Star of the Quarter',
    org: 'Futureview Systems · Q2 2025',
    desc: 'Awarded for independently owning the Excel Add-in and LLM agent integration within 3 months of joining.',
  },
]

const CONTACTS = [
  { Icon: IconMail,          label: 'pavansai0810@gmail.com',         href: 'mailto:pavansai0810@gmail.com' },
  { Icon: IconPhone,         label: '+91-7702266004',                  href: 'tel:+917702266004' },
  { Icon: IconBrandLinkedin, label: 'linkedin.com/in/pavan-sai-ande', href: 'https://linkedin.com/in/pavan-sai-ande' },
  { Icon: IconWorld,         label: 'developer-pavan.vercel.app',      href: 'https://developer-pavan.vercel.app' },
]

export default function Footer() {
  return (
    <>
      <div className="divider" />

      {/* Accomplishments */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            <p className="eyebrow">Recognition</p>
            <h2 className="section-title">Accomplishments</h2>
            <p className="section-sub">Awards and education background.</p>
          </motion.div>

          <div className="awards-grid">
            {AWARDS.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }}
                className="card"
                style={{ padding: '24px' }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 9,
                  background: 'rgba(13,148,136,0.07)',
                  border: '1px solid rgba(13,148,136,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: 5 }}>{a.title}</h3>
                <p style={{ fontSize: '0.78rem', color: '#0d9488', marginBottom: 10, fontWeight: 500 }}>{a.org}</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#64748b' }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.35 }}
            className="card"
            style={{ padding: '24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 9, flexShrink: 0,
              background: '#f8fafc', border: '1px solid #e2e8f0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: 5 }}>
                B.Tech — Electronics & Communication Engineering
              </h3>
              <p style={{ fontSize: '0.78rem', color: '#0d9488', marginBottom: 8, fontWeight: 500 }}>Education</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#64748b' }}>
                Andhra Loyola College · 2017–2021 · Transitioned via NxtWave full-stack bootcamp (2022)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* Contact */}
      <section id="contact" className="section" style={{ background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-sub">
              Open to full-time roles, freelance, and interesting collaborations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {CONTACTS.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="contact-row"
                >
                  <span className="contact-icon-box">
                    <c.Icon size={16} stroke={1.5} style={{ color: '#0d9488' }} />
                  </span>
                  <span style={{ flex: 1, fontSize: '0.9rem' }}>{c.label}</span>
                  <IconArrowUpRight size={14} stroke={1.5} style={{ color: '#cbd5e1' }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer bar */}
      <div style={{
        borderTop: '1px solid #e2e8f0', padding: '20px 24px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
        background: '#fff',
      }}>
        <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
          © {new Date().getFullYear()} Pavan Sai Ande
        </span>
        <span style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
          Front-End Engineer · React · TypeScript
        </span>
      </div>
    </>
  )
}
