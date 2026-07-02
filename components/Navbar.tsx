'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const NAV = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40)
      for (const id of [...NAV.map(n => n.toLowerCase())].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', justifyContent: 'center', padding: '14px 24px',
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: 2,
        padding: '5px 6px', borderRadius: 10,
        background: scrolled ? 'rgba(15,15,19,0.95)' : 'rgba(15,15,19,0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid #222228',
        transition: 'background 0.25s',
      }}>
        <a href="#about" style={{
          marginRight: 8, padding: '5px 11px', borderRadius: 6,
          fontWeight: 700, fontSize: '0.82rem',
          color: '#6366f1', textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}>
          PS
        </a>

        {NAV.map(label => {
          const id = label.toLowerCase()
          const isActive = active === id
          return (
            <a key={label} href={`#${id}`} style={{ position: 'relative', textDecoration: 'none' }}>
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  style={{
                    position: 'absolute', inset: 0, borderRadius: 6,
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.18)',
                  }}
                  transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                />
              )}
              <span style={{
                position: 'relative', zIndex: 1,
                display: 'block', padding: '5px 12px',
                fontSize: '0.79rem', fontWeight: isActive ? 500 : 400,
                color: isActive ? '#c7d2fe' : '#4a5568',
                transition: 'color 0.15s',
              }}>
                {label}
              </span>
            </a>
          )
        })}

        <a href="mailto:pavansai0810@gmail.com" className="btn-fill"
          style={{ marginLeft: 8, padding: '6px 15px', fontSize: '0.77rem' }}>
          Hire Me
        </a>
      </div>
    </motion.nav>
  )
}
