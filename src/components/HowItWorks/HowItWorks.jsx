import { useEffect } from 'react'
import { UserPlus, Compass, Bluetooth, Trophy } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    num: '01',
    icon: <UserPlus size={22} />,
    title: 'Crea tu perfil',
    desc: 'Regístrate con tu correo universitario. Define tus intereses, carrera y lo que buscas. En 3 minutos ya eres parte del ecosistema.',
  },
  {
    num: '02',
    icon: <Compass size={22} />,
    title: 'Descubre eventos',
    desc: 'El algoritmo te muestra eventos relevantes según tus intereses. Ve quién asiste, invita contactos y activa la expectativa.',
  },
  {
    num: '03',
    icon: <Bluetooth size={22} />,
    title: 'Conéctate en el evento',
    desc: 'Durante el evento, Bluetooth detecta perfiles compatibles cerca de ti. El networking deja de ser aleatorio y se vuelve optimizado.',
  },
  {
    num: '04',
    icon: <Trophy size={22} />,
    title: 'Acumula y crece',
    desc: 'Después del evento ganas puntos, recibes reportes de tus conexiones y construyes una red profesional real desde la universidad.',
  },
]

export default function HowItWorks() {
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

  return (
    <section className="section how" id="como-funciona">
      <div className="container">

        <div className="fade-up">
          <span className="section-tag">¿Cómo funciona?</span>
          <h2 className="section-title">
            De estudiante a red profesional<br />
            <span className="text-gradient">en 4 pasos</span>
          </h2>
          <p className="section-sub">
            Simple, intuitivo y diseñado para el ritmo de vida universitario.
          </p>
        </div>

        <div className="how__steps">
          {steps.map((s, i) => (
            <div key={i} className={`how__step fade-up delay-${i + 1}`}>
              <div className="how__left">
                <div className="how__num">{s.num}</div>
                {i < steps.length - 1 && <div className="how__line" />}
              </div>
              <div className="how__content card">
                <div className="how__icon">{s.icon}</div>
                <div>
                  <h3 className="how__title">{s.title}</h3>
                  <p className="how__desc">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}