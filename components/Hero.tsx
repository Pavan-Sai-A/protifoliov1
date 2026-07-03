'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconArrowRight, IconBrandLinkedin, IconMail, IconMapPin } from '@tabler/icons-react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const ROLES = [
  'Front-End Engineer',
  'AI/LLM Integrator',
  'TypeScript Specialist',
  'Next.js Developer',
]

const STATS = [
  { value: '3.4+', label: 'Years Exp.' },
  { value: '3',   label: 'Products Shipped' },
  { value: '40%', label: 'Bundle Reduction' },
  { value: '30%', label: 'AI Time Saved' },
]

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((index + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, words])

  return (
    <span>
      {displayed}
      <span style={{
        display: 'inline-block', width: 2, height: '1em',
        background: '#0d9488', marginLeft: 2, verticalAlign: 'middle',
        borderRadius: 1, animation: 'pulse-dot 0.8s step-end infinite',
      }} />
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="about"
      className="dot-grid"
      style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '100px 24px 80px',
        position: 'relative',
      }}
    >
      {/* Fade overlay so dot grid fades at edges */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, #ffffff 100%)',
      }} />

      <div style={{ maxWidth: 700, width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Status + location */}
        <motion.div
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36, flexWrap: 'wrap' }}
        >
          <span className="status-badge">
            <span className="status-dot" />
            Available for hire
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.82rem', color: '#94a3b8' }}>
            <IconMapPin size={13} stroke={1.5} style={{ color: '#0d9488' }} />
            Hyderabad, India
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease }}
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 4rem)',
            fontWeight: 800, lineHeight: 1.08,
            letterSpacing: '-0.035em', color: '#0f172a',
            marginBottom: 14,
          }}
        >
          Pavan Sai Ande
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease }}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 600, color: '#0d9488',
            marginBottom: 22, letterSpacing: '-0.01em',
            minHeight: '1.6em',
          }}
        >
          <Typewriter words={ROLES} />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease }}
          style={{
            fontSize: '1rem', lineHeight: 1.8,
            color: '#64748b', maxWidth: 540, marginBottom: 40,
          }}
        >
          3.4 years building production web apps with React, Next.js and TypeScript.
          Focused on AI/LLM integration, performance, and scalable UI architecture
          across fintech and EdTech products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32, ease }}
          className="cta-row"
          style={{ marginBottom: 56 }}
        >
          <a href="#projects" className="btn-primary">
            View Projects <IconArrowRight size={15} stroke={2} />
          </a>
          <a href="mailto:pavansai0810@gmail.com" className="btn-secondary">
            <IconMail size={15} stroke={1.5} /> Email Me
          </a>
          <a href="https://linkedin.com/in/pavan-sai-ande" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <IconBrandLinkedin size={15} stroke={1.5} /> LinkedIn
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.42, ease }}
          className="stats-grid"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: '20px 16px', textAlign: 'center',
                background: '#fff',
                borderLeft: i > 0 ? '1px solid #e2e8f0' : 'none',
              }}
            >
              <p style={{
                fontSize: '1.6rem', fontWeight: 700,
                color: '#0f172a', letterSpacing: '-0.03em', marginBottom: 4,
              }}>
                {s.value}
              </p>
              <p style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 500 }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
