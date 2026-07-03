'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setScrolled(scrollTop > 40)
      for (const id of [...NAV.map(n => n.toLowerCase())].reverse()) {
        const el = document.getElementById(id)
        if (el && scrollTop >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          display: 'flex', justifyContent: 'center', padding: '14px 20px',
        }}
      >
        <div className={`nav-pill${scrolled ? ' scrolled' : ''}`}>
          <a
            href="#about"
            onClick={() => { setActive('about'); setMenuOpen(false) }}
            style={{
              marginRight: 8, padding: '5px 12px', borderRadius: 8,
              fontWeight: 800, fontSize: '0.9rem', letterSpacing: '-0.02em',
              color: '#0f172a', textDecoration: 'none',
            }}
          >
            PS
          </a>

          <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV.map(label => {
              const id = label.toLowerCase()
              const isActive = active === id
              return (
                <a
                  key={label}
                  href={`#${id}`}
                  onClick={() => { setActive(id); setMenuOpen(false) }}
                  className={`nav-link${isActive ? ' active' : ''}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      style={{
                        position: 'absolute', inset: 0, borderRadius: 8,
                        background: '#f1f5f9', zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                  {label}
                </a>
              )
            })}
          </div>

          <a
            href="mailto:pavansai0810@gmail.com"
            className="btn-primary"
            style={{ marginLeft: 8, padding: '7px 18px', fontSize: '0.8rem' }}
          >
            Hire Me
          </a>

          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {menuOpen ? (
                <>
                  <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className="nav-mobile-menu"
          >
            {NAV.map(label => {
              const id = label.toLowerCase()
              return (
                <a
                  key={label}
                  href={`#${id}`}
                  onClick={() => { setActive(id); setMenuOpen(false) }}
                  className={`nav-mobile-link${active === id ? ' active' : ''}`}
                >
                  {label}
                </a>
              )
            })}
            <div style={{ height: 1, background: '#e2e8f0', margin: '6px 0' }} />
            <a
              href="mailto:pavansai0810@gmail.com"
              className="btn-primary"
              style={{ justifyContent: 'center', marginTop: 2 }}
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
