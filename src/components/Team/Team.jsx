import { useEffect, useState } from 'react'
import { Linkedin, X, Briefcase, Code, TrendingUp } from 'lucide-react'
import './Team.css'

const members = [
  {
    initials: 'S',
    name: 'Sebastián Martinez',
    role: 'Co-Founder & CEO',
    uni: 'Ing. Administrativo · EIA',
    icon: <TrendingUp size={16} />,
    color: '#2563eb',
    bio: 'Perfil enfocado en estructurar ecosistemas, diseñar modelos escalables y construir relaciones institucionales.',
    responsibilities: [
      'Visión estratégica y posicionamiento',
      'Modelo de negocio y monetización',
      'Alianzas con universidades y organizadores',
      'Estrategia de crecimiento por fases',
      'Relación con inversionistas y aceleradoras',
    ],
    links: { linkedin: '#' },
  },
  {
    initials: 'CTO',
    name: ' Abraham Parra',
    role: 'CTO',
    uni: 'Ing. de Sistemas · EIA',
    icon: <Code size={16} />,
    color: '#1d4ed8',
    bio: 'Enfocado en construir una infraestructura robusta y preparada para escalar ciudad por ciudad.',
    responsibilities: [
      'Arquitectura del producto',
      'Desarrollo backend',
      'Escalabilidad y seguridad',
      'Integración de proximidad (Bluetooth)',
      'Protección de datos',
    ],
    links: { linkedin: '#' },
  },
  {
    initials: 'LD',
    name: 'Braulio Narváez',
    role: 'Lead Developer & Product',
    uni: 'Ing. de Sistemas · EIA',
    icon: <Briefcase size={16} />,
    color: '#3b82f6',
    bio: 'Enfocado en hacer que la tecnología sea intuitiva y usable en entornos reales.',
    responsibilities: [
      'Desarrollo frontend',
      'Experiencia de usuario',
      'Iteración rápida del MVP',
      'Integración de funciones sociales',
      'Optimización del flujo antes-durante-después',
    ],
    links: { linkedin: '#' },
  },
]

const strengths = [
  'Producto desarrollado internamente',
  'Visión clara por fases',
  'Modelo de ingresos diversificado',
  'Entendimiento directo del mercado universitario',
  'Capacidad de ejecución sin depender de terceros',
]

export default function Team() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.fade-up, .fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="section team" id="equipo">
      <div className="container">

        <div className="fade-up">
          <span className="section-tag">El Equipo</span>
          <h2 className="section-title">
            No somos solo idea.<br />
            <span className="text-gradient">Somos equipo constructor.</span>
          </h2>
          <p className="section-sub">
            Un equipo complementario con enfoque estratégico
            y capacidad técnica interna. Los tres de EIA.
          </p>
        </div>

        <div className="team__grid">
          {members.map((m, i) => (
            <div
              key={i}
              className={`team__card fade-up delay-${i + 1}`}
              onClick={() => setSelected(m)}
            >
              <div className="team__avatar-wrap">
                <div className="team__avatar" style={{ background: m.color }}>
                  {m.initials}
                </div>
                <div className="team__avatar-ring" style={{ borderColor: m.color }} />
              </div>

              <div className="team__info">
                <div className="team__name">{m.name}</div>
                <div className="team__role">{m.role}</div>
                <div className="team__uni">{m.uni}</div>
              </div>

              <p className="team__bio">{m.bio}</p>

              <div className="team__links">
                {m.links.linkedin && (
                  <a href={m.links.linkedin} className="team__link" onClick={(e) => e.stopPropagation()}>
                    <Linkedin size={15} />
                  </a>
                )}
              </div>

              <span className="team__hint">Ver responsabilidades →</span>
            </div>
          ))}
        </div>

        {/* Fortaleza del equipo */}
        <div className="fade-up delay-2 team__strengths">
          <h3 className="team__strengths-title">Fortaleza del equipo</h3>
          <div className="team__strengths-grid">
            {strengths.map((s, i) => (
              <div key={i} className="team__strength">
                <span className="team__strength-dot" />
                {s}
              </div>
            ))}
          </div>
        </div>

      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box team__modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <X size={16} />
            </button>

            <div className="team__modal-header">
              <div className="team__avatar team__avatar--lg" style={{ background: selected.color }}>
                {selected.initials}
              </div>
              <div>
                <div className="team__modal-name">{selected.name}</div>
                <div className="team__role">{selected.role}</div>
                <div className="team__uni">{selected.uni}</div>
              </div>
            </div>

            <p className="team__modal-bio">{selected.bio}</p>

            <h4 className="team__modal-label">Responsabilidades</h4>
            <ul className="team__modal-list">
              {selected.responsibilities.map((r, i) => (
                <li key={i}>
                  <span className="team__strength-dot" style={{ background: selected.color }} />
                  {r}
                </li>
              ))}
            </ul>

            <div className="team__links" style={{ marginTop: 20 }}>
              {selected.links.linkedin && (
                <a href={selected.links.linkedin} className="team__link">
                  <Linkedin size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}