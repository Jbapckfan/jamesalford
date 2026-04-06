import { useEffect, useRef } from 'react'
import { Stethoscope, Bot, Globe, ArrowUpRight, Mail } from 'lucide-react'
import './App.css'

function App() {
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addRef = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">James Alford</h1>
          <p className="hero-subtitle">Emergency Physician. AI Builder. Web Designer.</p>
          <p className="hero-bio">
            I'm an ER doc in Kansas City who builds AI systems and websites for businesses
            that earn their customers through great work. Two companies, one mission: help
            real businesses get found online.
          </p>
          <div className="hero-ctas">
            <a
              href="https://reputationbuilt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-primary"
            >
              Reputation Built — For Local Businesses
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://steadyhandpractice.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-secondary"
            >
              Steady Hand Practice — For Healthcare
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="section" ref={addRef}>
        <div className="container fade-in">
          <h2 className="section-heading">What I Do</h2>
          <div className="columns">
            <div className="column">
              <div className="column-icon">
                <Stethoscope size={28} strokeWidth={1.5} />
              </div>
              <h3>Emergency Medicine</h3>
              <p>
                15-hour shifts, life-or-death decisions, and a deep understanding
                of what healthcare providers actually need.
              </p>
            </div>
            <div className="column">
              <div className="column-icon">
                <Bot size={28} strokeWidth={1.5} />
              </div>
              <h3>AI &amp; Automation</h3>
              <p>
                I build autonomous systems that handle lead generation, patient
                communication, and business operations — so you don't have to.
              </p>
            </div>
            <div className="column">
              <div className="column-icon">
                <Globe size={28} strokeWidth={1.5} />
              </div>
              <h3>Web Design</h3>
              <p>
                Clean, fast websites that turn your reputation into revenue. No
                templates. No BS. Just sites that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Two Brands */}
      <section className="section section-light" ref={addRef}>
        <div className="container fade-in">
          <h2 className="section-heading">The Two Brands</h2>
          <div className="brand-cards">
            <a
              href="https://reputationbuilt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card"
            >
              <div className="brand-accent" style={{ background: 'var(--forest)' }} />
              <div className="brand-body">
                <h3 className="brand-name">Reputation Built</h3>
                <p className="brand-tagline">Built on your reputation</p>
                <p className="brand-desc">
                  Websites and AI tools for plumbers, roofers, landscapers, and
                  every local business doing great work.
                </p>
                <span className="brand-link">
                  Visit site <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
            <a
              href="https://steadyhandpractice.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card"
            >
              <div className="brand-accent" style={{ background: 'var(--navy)' }} />
              <div className="brand-body">
                <h3 className="brand-name">Steady Hand Practice</h3>
                <p className="brand-tagline">The online presence your practice deserves</p>
                <p className="brand-desc">
                  Websites and AI tools for physicians, dentists, PTs, and every
                  healthcare practice that earns patient trust.
                </p>
                <span className="brand-link">
                  Visit site <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* How I'm Different */}
      <section className="section" ref={addRef}>
        <div className="container container-narrow fade-in">
          <h2 className="section-heading">How I'm Different</h2>
          <p className="different-text">
            Most web agencies don't know the difference between a P-trap and a
            prior auth. I do. I've spent years in emergency medicine and years
            building AI systems. That combination means I understand your business
            from the inside — whether you're a plumber answering calls at midnight
            or a dentist trying to fill your schedule. I don't sell websites. I
            build revenue machines.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section section-dark" ref={addRef}>
        <div className="container fade-in contact">
          <h2 className="section-heading section-heading-light">Want to work together?</h2>
          <a href="mailto:james@reputationbuilt.com" className="contact-email">
            <Mail size={20} strokeWidth={1.5} />
            james@reputationbuilt.com
          </a>
          <div className="contact-links">
            <a
              href="https://reputationbuilt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reputation Built <ArrowUpRight size={14} />
            </a>
            <span className="contact-divider">/</span>
            <a
              href="https://steadyhandpractice.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steady Hand Practice <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 James Alford. Kansas City, MO.</p>
      </footer>
    </>
  )
}

export default App
