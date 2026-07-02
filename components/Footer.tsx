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
      <div className="hr" />

      {/* Accomplishments */}
      <section style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.45 }}
          style={{ marginBottom: 32 }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#eef2ff', marginBottom: 6 }}>
            Accomplishments
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12, marginBottom: 12 }}>
          {AWARDS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }}
              className="card" style={{ padding: '20px 22px' }}
            >
              <h3 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#eef2ff', marginBottom: 3 }}>{a.title}</h3>
              <p style={{ fontSize: '0.72rem', color: '#6366f1', marginBottom: 8, fontWeight: 500 }}>{a.org}</p>
              <p style={{ fontSize: '0.81rem', lineHeight: 1.65, color: '#4a5568' }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.35 }}
          className="card" style={{ padding: '20px 22px' }}
        >
          <h3 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#eef2ff', marginBottom: 3 }}>
            B.Tech — Electronics & Communication Engineering
          </h3>
          <p style={{ fontSize: '0.72rem', color: '#6366f1', marginBottom: 6, fontWeight: 500 }}>Education</p>
          <p style={{ fontSize: '0.81rem', lineHeight: 1.65, color: '#4a5568' }}>
            Andhra Loyola College · 2017–2021 · Transitioned via NxtWave full-stack bootcamp (2022)
          </p>
        </motion.div>
      </section>

      <div className="hr" />

      {/* Contact */}
      <section id="contact" style={{ padding: '80px 24px', maxWidth: 560, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.45 }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#eef2ff', marginBottom: 6 }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#4a5568', marginBottom: 28 }}>
            Open to full-time roles, freelance, and interesting collaborations.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {CONTACTS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 0', textDecoration: 'none',
                  borderBottom: '1px solid #222228',
                  color: '#5a6478',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#eef2ff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#5a6478')}
              >
                <c.Icon size={15} stroke={1.5} style={{ color: '#6366f1', flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: '0.84rem', fontWeight: 400 }}>{c.label}</span>
                <IconArrowUpRight size={13} stroke={1.5} style={{ color: '#2e2e38' }} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <div style={{
        borderTop: '1px solid #1a1a22', padding: '16px 24px',
        textAlign: 'center', fontSize: '0.72rem', color: '#252530',
      }}>
        © {new Date().getFullYear()} Pavan Sai Ande
      </div>
    </>
  )
}
