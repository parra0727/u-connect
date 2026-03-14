import { useEffect, useState } from 'react'
import { Compass, Bluetooth, BarChart2, X } from 'lucide-react'
import './Solution.css'

const phases = [
  {
    icon: <Compass size={28} />,
    tag: 'Antes del evento',
    title: 'Descubrimiento y expectativa',
    summary: 'Encuentra eventos relevantes, ve quién asiste y genera viralidad orgánica antes de que empiece.',
    details: [
      'Descubrimiento inteligente de eventos por intereses.',
      'Ver qué eventos interesan o asistirán tus contactos.',
      'Invitar personas directamente desde la app.',
      'Segmentación estratégica para organizadores.',
      'Activación de marcas antes del evento.',
    ],
    color: '#2563eb',
  },
  {
    icon: <Bluetooth size={28} />,
    tag: 'Durante el evento',
    title: 'Conexión por proximidad',
    summary: 'El networking deja de ser aleatorio. Bluetooth identifica perfiles compatibles cerca de ti en tiempo real.',
    details: [
      'Conexión por proximidad mediante Bluetooth.',
      'Descubrimiento de perfiles compatibles cercanos.',
      'Solicitudes de conexión directas.',
      'Retos y dinámicas dentro del evento.',
      'Activaciones patrocinadas en tiempo real.',
    ],
    color: '#1d4ed8',
  },
  {
    icon: <BarChart2 size={28} />,
    tag: 'Después del evento',
    title: 'Fidelización y datos',
    summary: 'El evento se convierte en un activo medible. Puntos, reportes y seguimiento de conexiones.',
    details: [
      'Encuestas rápidas de 3 preguntas.',
      'Seguimiento de conexiones realizadas.',
      'Puntos por participación y engagement.',
      'Reportes estadísticos agregados para organizadores.',
      'Fidelización hacia el próximo evento.',
    ],
    color: '#3b82f6',
  },
]

export default function Solution() {
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
    <section className="section solution" id="solucion">
      <div className="solution__bg" />
      <div className="container">

        <div className="fade-up">
          <span className="section-tag">El Ecosistema</span>
          <h2 className="section-title">
            Un flujo continuo<br />
            <span className="text-gradient">antes, durante y después</span>
          </h2>
          <p className="section-sub">
            No somos una red social tradicional. Somos infraestructura social
            que conecta personas, eventos, organizadores y marcas.
          </p>
        </div>

        <div className="solution__grid">
          {phases.map((p, i) => (
            <div
              key={i}
              className={`solution__card fade-up delay-${i + 1}`}
              onClick={() => setSelected(p)}
            >
              <div className="solution__icon" style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}10` }}>
                {p.icon}
              </div>
              <span className="solution__tag">{p.tag}</span>
              <h3 className="solution__title">{p.title}</h3>
              <p className="solution__desc">{p.summary}</p>
              <span className="solution__hint">Ver detalle →</span>
            </div>
          ))}
        </div>

        <div className="fade-up delay-2 solution__banner">
          <p>
            Mientras otros compiten por atención digital,<br />
            <strong>nosotros organizamos interacción real.</strong>
          </p>
        </div>

      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box solution__modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <X size={16} />
            </button>
            <div className="solution__modal-icon" style={{ color: selected.color, borderColor: `${selected.color}40`, background: `${selected.color}10` }}>
              {selected.icon}
            </div>
            <span className="solution__tag">{selected.tag}</span>
            <h3 className="solution__modal-title">{selected.title}</h3>
            <ul className="solution__modal-list">
              {selected.details.map((d, i) => (
                <li key={i}>
                  <span className="solution__modal-dot" style={{ background: selected.color }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}