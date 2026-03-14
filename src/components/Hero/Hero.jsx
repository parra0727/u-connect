import { useEffect } from 'react'
import { ArrowRight, Users, Calendar, Bluetooth } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll('.hero__animate')
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('hero__animate--in'), i * 130)
    })
  }, [])

  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-bg" />
      <div className="hero__glow" />

      <div className="container hero__inner">

        <div className="hero__animate hero__badge">
          <span className="hero__badge-dot" />
          Lanzando en Medellín · 2025
        </div>

        <h1 className="hero__animate hero__title">
          La infraestructura que<br />
          <span className="text-gradient">organiza la vida social</span><br />
          universitaria
        </h1>

        <p className="hero__animate hero__desc">
          U-Connect conecta personas, eventos, organizadores y marcas
          en un solo flujo continuo — antes, durante y después
          de cada experiencia universitaria.
        </p>

        <div className="hero__animate hero__pills">
          <span className="hero__pill"><Users size={13} /> Networking real</span>
          <span className="hero__pill"><Calendar size={13} /> Eventos inteligentes</span>
          <span className="hero__pill"><Bluetooth size={13} /> Conexión por proximidad</span>
        </div>

        <div className="hero__animate hero__actions">
          <a href="#contacto" className="btn-primary">
            Quiero unirme <ArrowRight size={16} />
          </a>
          <a href="#solucion" className="btn-outline">
            Ver el ecosistema
          </a>
        </div>

        <div className="hero__animate hero__mockup">
          <div className="mockup__bar">
            <span /><span /><span />
          </div>
          <div className="mockup__body">
            <div className="mockup__profile">
              <div className="mockup__avatar" style={{ background: '#2563eb' }}>SR</div>
              <div>
                <div className="mockup__name">Sebastián R.</div>
                <div className="mockup__uni">EIA · Ing. Administrativo</div>
              </div>
              <button className="mockup__btn">Conectar</button>
            </div>
            <div className="mockup__profile">
              <div className="mockup__avatar" style={{ background: '#1d4ed8' }}>MG</div>
              <div>
                <div className="mockup__name">María G.</div>
                <div className="mockup__uni">EAFIT · Ing. de Sistemas</div>
              </div>
              <button className="mockup__btn">Conectar</button>
            </div>
            <div className="mockup__event">
              <Calendar size={13} style={{ color: '#3b82f6' }} />
              <span>Hackathon EIA — <strong>Mañana 9am</strong></span>
              <span className="mockup__tag">48 asistentes</span>
            </div>
            <div className="mockup__bluetooth">
              <Bluetooth size={13} style={{ color: '#3b82f6' }} />
              <span>3 perfiles compatibles cerca de ti</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}