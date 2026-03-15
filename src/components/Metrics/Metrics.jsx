import { useEffect, useState } from 'react'
import { X, Check } from 'lucide-react'
import './Metrics.css'

const investment = [
  {
    pct: '40%',
    label: 'Desarrollo y Producto',
    color: '#2563eb',
    items: [
      'Optimización del MVP',
      'Mejora de UX/UI profesional',
      'Seguridad y protección de datos',
      'Escalabilidad técnica',
      'Infraestructura en la nube',
    ],
  },
  {
    pct: '30%',
    label: 'Adquisición y Crecimiento',
    color: '#3b82f6',
    items: [
      'Embajadores universitarios',
      'Activaciones presenciales',
      'Estrategia de lanzamiento por campus',
      'Marketing inicial',
    ],
  },
  {
    pct: '10%',
    label: 'Legal y Datos',
    color: '#1d4ed8',
    items: [
      'Cumplimiento normativo',
      'Contratos con organizadores',
      'Estructura societaria',
    ],
  },
  {
    pct: '20%',
    label: 'Operación y Runway',
    color: '#60a5fa',
    items: [
      'Costos operativos iniciales',
      'Herramientas tecnológicas',
      'Sostenibilidad de 12 meses',
    ],
  },
]

const goals = [
  'Consolidar 3–5 universidades en Medellín',
  'Ser herramienta activa en eventos universitarios',
  'Validar monetización con organizadores',
  'Iniciar expansión a segunda ciudad',
  'Activar primeras alianzas con discotecas estratégicas',
]

const offers = [
  'Entrada temprana en infraestructura social universitaria',
  'Modelo escalable por ecosistemas',
  'Múltiples fuentes de ingreso',
  'Potencial regional en LATAM',
  'Efectos de red locales replicables',
]

const allies = [
  'Desarrollo tecnológico y escalabilidad',
  'Estrategia de crecimiento',
  'Conexiones con universidades y organizadores',
  'Estructuración legal y manejo de datos',
]

export default function Metrics() {
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
    <section className="section metrics" id="inversion">
      <div className="metrics__bg" />
      <div className="container">

        {/* Header */}
        <div className="fade-up">
          <span className="section-tag">Inversión</span>
          <h2 className="section-title">
            Capital semilla<br />
            <span className="text-gradient">USD $30,000 – $50,000</span>
          </h2>
          <p className="section-sub">
            Etapa temprana en LATAM. Producto desarrollado internamente,
            equipo constructor y modelo de ingresos diversificado.
          </p>
        </div>

        {/* Uso del capital */}
        <h3 className="metrics__subtitle fade-up">¿Para qué lo usamos?</h3>
        <div className="metrics__grid">
          {investment.map((m, i) => (
            <div
              key={i}
              className={`metrics__card fade-up delay-${i + 1}`}
              onClick={() => setSelected(m)}
            >
              <div className="metrics__pct" style={{ color: m.color }}>{m.pct}</div>
              <div className="metrics__bar">
                <div className="metrics__bar-fill" style={{ width: m.pct, background: m.color }} />
              </div>
              <div className="metrics__label">{m.label}</div>
              <span className="metrics__hint">Ver detalle →</span>
            </div>
          ))}
        </div>

        {/* Metas + Ofertas */}
        <div className="metrics__bottom">
          <div className="fade-up delay-1 metrics__block">
            <h3 className="metrics__block-title">Meta en 12–18 meses</h3>
            <ul className="metrics__list">
              {goals.map((g, i) => (
                <li key={i} className="metrics__list-item">
                  <span className="metrics__check"><Check size={13} /></span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up delay-2 metrics__block">
            <h3 className="metrics__block-title">Qué ofrecemos al inversionista</h3>
            <ul className="metrics__list">
              {offers.map((o, i) => (
                <li key={i} className="metrics__list-item">
                  <span className="metrics__check"><Check size={13} /></span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Más que capital */}
        <div className="fade-up delay-2 metrics__allies">
          <h3 className="metrics__block-title">Más que capital</h3>
          <p className="metrics__allies-text">
            Además del capital, buscamos aliados estratégicos y mentores
            que nos apoyen en:
          </p>
          <div className="metrics__allies-grid">
            {allies.map((item, i) => (
              <div key={i} className="metrics__ally">
                <span className="metrics__check"><Check size={13} /></span>
                {item}
              </div>
            ))}
          </div>
          <p className="metrics__allies-closing">
            No buscamos solo financiación, sino{' '}
            <strong>acompañamiento para construir y escalar U-Connect</strong>{' '}
            de manera sólida y sostenible.
          </p>
        </div>

      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box metrics__modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <X size={16} />
            </button>
            <div className="metrics__modal-pct" style={{ color: selected.color }}>
              {selected.pct}
            </div>
            <h3 className="metrics__modal-title">{selected.label}</h3>
            <ul className="metrics__modal-list">
              {selected.items.map((item, i) => (
                <li key={i}>
                  <span
                    className="metrics__check"
                    style={{ background: `${selected.color}20`, color: selected.color }}
                  >
                    <Check size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}