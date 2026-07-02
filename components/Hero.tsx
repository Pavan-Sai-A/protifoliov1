'use client'
import { motion } from 'framer-motion'
import { IconArrowRight, IconBrandLinkedin, IconMail, IconMapPin } from '@tabler/icons-react'

const ease: [number,number,number,number] = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '96px 24px 80px',
    }}>
      <div style={{ maxWidth: 640, width: '100%' }}>

        {/* Location line */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: '0.8rem', color: '#4a5568', marginBottom: 24,
          }}
        >
          <IconMapPin size={13} stroke={1.5} style={{ color: '#6366f1' }} />
          Hyderabad, India
          <span style={{ color: '#222228', margin: '0 4px' }}>·</span>
          <span style={{ color: '#22c55e', fontWeight: 500 }}>Available for hire</span>
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease }}
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', color: '#eef2ff',
            marginBottom: 16,
          }}
        >
          Pavan Sai Ande
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease }}
          style={{
            fontSize: '1.1rem', fontWeight: 500,
            color: '#6366f1', marginBottom: 20,
            letterSpacing: '-0.01em',
          }}
        >
          Front-End Engineer · React · Next.js · TypeScript · AI/LLMs
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease }}
          style={{
            fontSize: '0.95rem', lineHeight: 1.8,
            color: '#5a6478', maxWidth: 520, marginBottom: 36,
          }}
        >
          3.4 years building production web apps with React, Next.js and TypeScript.
          I focus on AI/LLM integration, performance, and scalable UI architecture —
          across fintech and EdTech products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32, ease }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
        >
          <a href="#projects" className="btn-fill">
            View Projects <IconArrowRight size={14} stroke={2} />
          </a>
          <a href="mailto:pavansai0810@gmail.com" className="btn-outline">
            <IconMail size={14} stroke={1.5} /> Email Me
          </a>
          <a href="https://linkedin.com/in/pavan-sai-ande" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <IconBrandLinkedin size={14} stroke={1.5} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
