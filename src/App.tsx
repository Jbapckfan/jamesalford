import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import './App.css'

const VENTURES = [
  {
    num: '01',
    name: 'Reputation Built',
    desc: 'Websites & AI for local businesses — plumbers, roofers, landscapers, and every trade doing great work',
    url: 'https://reputationbuilt.vercel.app',
  },
  {
    num: '02',
    name: 'Steady Hand Practice',
    desc: 'Websites & AI for healthcare — physicians, dentists, PTs, and every practice that earns patient trust',
    url: 'https://steadyhandpractice.vercel.app',
  },
]

function App() {
  const [curtainOpen, setCurtainOpen] = useState(false)
  const [activeVenture, setActiveVenture] = useState(-1)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const ventureRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const t = setTimeout(() => setCurtainOpen(true), 600)

    // Observe scroll sections for fade-in
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 },
    )
    sectionsRef.current.forEach((el) => { if (el) sectionObserver.observe(el) })

    // Observe venture panels — when one fills the viewport, highlight it
    const ventureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-idx'))
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActiveVenture(idx)
          }
        })
      },
      { threshold: [0.6] },
    )
    ventureRefs.current.forEach((el) => { if (el) ventureObserver.observe(el) })

    return () => {
      clearTimeout(t)
      sectionObserver.disconnect()
      ventureObserver.disconnect()
    }
  }, [])

  const addRef = (i: number) => (el: HTMLDivElement | null) => {
    sectionsRef.current[i] = el
  }

  const addVentureRef = (i: number) => (el: HTMLElement | null) => {
    ventureRefs.current[i] = el
  }

  return (
    <>
      {/* Loading Curtain */}
      <div className={`curtain ${curtainOpen ? 'open' : ''}`}>
        <div className="curtain-panel curtain-panel--left" />
        <div className="curtain-panel curtain-panel--right" />
        <div className="curtain-seam" />
        <span className="curtain-text">JA</span>
      </div>

      {/* Bottom-Anchored UI */}
      <div className="ui-bar">
        <a href="#top" className="ui-logo">
          James<br />Alford
        </a>

        <nav className="ui-nav">
          <a href="#work">
            <span className="nav-num">01</span> Work
          </a>
          <a href="#about">
            <span className="nav-num">02</span> About
          </a>
          <a href="#contact">
            <span className="nav-num">03</span> Contact
          </a>
        </nav>

        <a href="mailto:james@reputationbuilt.com" className="ui-contact">
          Available for<br />new projects
        </a>
      </div>

      {/* Hero — 3D Stage */}
      <div className="stage" id="top">
        <div className="stage-planes" aria-hidden="true">
          <div className="stage-plane stage-plane--forest">
            <span>REPUTATION BUILT • REPUTATION BUILT • REPUTATION BUILT • REPUTATION BUILT •</span>
          </div>
          <div className="stage-plane stage-plane--navy">
            <span>STEADY HAND PRACTICE • STEADY HAND PRACTICE • STEADY HAND PRACTICE •</span>
          </div>
        </div>
        <div className="stage-content">
          <h1 className="anim-slide">
            <span className="hero-name delay-1">James</span>
          </h1>
          <h1 className="anim-slide">
            <span className="hero-name delay-2">Alford</span>
          </h1>

          <div className="anim-fade delay-3">
            <p className="hero-subtitle">
              Physician&ensp;/&ensp;AI Builder&ensp;/&ensp;Web Designer
            </p>
          </div>

          <div className="anim-fade delay-5">
            <p className="scroll-hint">Scroll to explore</p>
          </div>
        </div>
      </div>

      <div className="proof-strip" aria-label="Founder proof">
        <div className="proof-strip__marquee">
          <div className="proof-strip__track">
            {Array.from({ length: 2 }).map((_, row) => (
              <div className="proof-strip__line" key={row}>
                {[
                  'ER PHYSICIAN',
                  'AI BUILDER',
                  'KANSAS CITY',
                  '2 INDUSTRY BRANDS',
                ].map((item, index) => (
                  <span
                    key={`${row}-${item}-${index}`}
                    className={`proof-strip__item ${index % 2 === 1 ? 'proof-strip__item--outline' : ''}`}
                  >
                    {item}
                    <b>•</b>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Venture Panels — each is near-full-viewport */}
      <div id="work">
        <aside className="venture-rail" aria-label="Project navigation">
          {VENTURES.map((venture, i) => (
            <a
              key={venture.num}
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`venture-rail__item ${activeVenture === i ? 'venture-rail__item--active' : ''}`}
            >
              <span className="venture-rail__num">{venture.num}</span>
              <span className="venture-rail__label">{venture.name.toUpperCase()}</span>
            </a>
          ))}
        </aside>
        {VENTURES.map((v, i) => (
          <a
            key={v.num}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`venture-panel ${activeVenture === i ? 'active' : ''}`}
            ref={addVentureRef(i)}
            data-idx={i}
          >
            <div className="venture-panel-inner">
              <span className="venture-num">{v.num}</span>
              <h2 className="venture-name">{v.name}</h2>
              <p className="venture-desc">{v.desc}</p>
              <span className="venture-cta">
                View site <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* About */}
      <div className="scroll-section" ref={addRef(0)} id="about">
        <h2>About</h2>
        <div className="about-editorial">
          <div className="quote-block">
            <span className="quote-kicker">Operating principle</span>
            <p>I don't sell websites. I build revenue machines.</p>
          </div>

          <div className="about-sidebar">
            <div className="about-stat">
              <span className="about-stat__value">ER Physician</span>
              <span className="about-stat__label">Decisions, triage, trust under pressure.</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">Kansas City</span>
              <span className="about-stat__label">Building for local businesses and regional practices.</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">2 Vertical Brands</span>
              <span className="about-stat__label">Reputation Built for trades. Steady Hand for healthcare.</span>
            </div>
          </div>
        </div>

        <p>
          I'm an emergency physician in Kansas City. ER medicine trains you
          to read a room in seconds, make decisive calls under pressure, and
          build trust with someone you just met. Those same instincts drive
          everything I build. First impressions matter, speed matters, and
          every detail either earns confidence or loses it.
        </p>
        <p>
          Most web agencies don't know the difference between a P-trap and a
          prior auth. I do. That combination of medicine, AI, and design means
          I understand your business from the inside, whether you're a plumber
          answering calls at midnight or a dentist trying to fill your schedule.
        </p>

        <div className="what-grid">
          <div className="what-item">
            <h3>Emergency Medicine</h3>
            <p>
              Rapid decision-making, pattern recognition, and the ability to
              earn trust in seconds — applied to every project I touch.
            </p>
          </div>
          <div className="what-item">
            <h3>AI &amp; Automation</h3>
            <p>
              Autonomous systems that handle lead generation, patient
              communication, and business operations — so you don't have to.
            </p>
          </div>
          <div className="what-item">
            <h3>Web Design</h3>
            <p>
              Clean, fast websites that turn your reputation into revenue.
              No templates. No BS. Just sites that work.
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="contact-section" id="contact">
        <h2>Let's work together</h2>
        <a href="mailto:james@reputationbuilt.com" className="contact-email">
          <span>james@</span>
          <span>reputation</span>
          <span>built.com</span>
        </a>
        <div className="contact-links">
          <a
            href="https://reputationbuilt.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Reputation Built <ArrowUpRight size={12} />
          </a>
          <a
            href="https://steadyhandpractice.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Steady Hand Practice <ArrowUpRight size={12} />
          </a>
          <a
            href="https://github.com/Jbapckfan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <p>&copy; 2026 James Alford. Kansas City, MO.</p>
      </footer>
    </>
  )
}

export default App
