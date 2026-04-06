import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import './App.css'

function App() {
  const [curtainOpen, setCurtainOpen] = useState(false)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Open curtain after mount
    const t = setTimeout(() => setCurtainOpen(true), 600)

    // Observe scroll sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 },
    )

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      clearTimeout(t)
      observer.disconnect()
    }
  }, [])

  const addRef = (i: number) => (el: HTMLDivElement | null) => {
    sectionsRef.current[i] = el
  }

  return (
    <>
      {/* Loading Curtain */}
      <div className={`curtain ${curtainOpen ? 'open' : ''}`}>
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

          {/* Ventures List */}
          <div className="ventures anim-fade delay-5" id="work">
            <a
              href="https://reputationbuilt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="venture"
            >
              <span className="venture-num">01</span>
              <span className="venture-name">Reputation Built</span>
              <span className="venture-desc">
                Websites &amp; AI for local businesses — plumbers, roofers, landscapers, and every trade doing great work
              </span>
            </a>

            <a
              href="https://steadyhandpractice.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="venture"
            >
              <span className="venture-num">02</span>
              <span className="venture-name">Steady Hand Practice</span>
              <span className="venture-desc">
                Websites &amp; AI for healthcare — physicians, dentists, PTs, and every practice that earns patient trust
              </span>
            </a>

            <a
              href="https://github.com/Jbapckfan/tars"
              target="_blank"
              rel="noopener noreferrer"
              className="venture"
            >
              <span className="venture-num">03</span>
              <span className="venture-name">TARS</span>
              <span className="venture-desc">
                Autonomous AI agent gateway — orchestrates tasks, generates content, and runs businesses while I sleep
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="scroll-section" ref={addRef(0)} id="about">
        <h2>About</h2>
        <p>
          I'm an emergency physician in Kansas City. Fifteen-hour shifts,
          life-or-death decisions, and a deep understanding of what it means
          to do work that matters. I've spent years on the other side too —
          building AI systems that run autonomously, generate leads, answer
          phones, and handle the work that keeps small businesses up at night.
        </p>
        <p>
          Most web agencies don't know the difference between a P-trap and a
          prior auth. I do. That combination — medicine, AI, design — means
          I understand your business from the inside, whether you're a plumber
          answering calls at midnight or a dentist trying to fill your schedule.
        </p>

        <div className="quote-block">
          <p>I don't sell websites. I build revenue machines.</p>
        </div>

        <div className="what-grid">
          <div className="what-item">
            <h3>Emergency Medicine</h3>
            <p>
              15-hour shifts and a deep understanding of what healthcare
              providers actually need from their online presence.
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
          james@reputationbuilt.com
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
