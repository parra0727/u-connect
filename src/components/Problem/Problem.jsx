import { useEffect } from 'react'
import { LayoutGrid, Radio, UserX, BarChart2 } from 'lucide-react'
import './Problem.css'

const problems = [
  {
    icon: <LayoutGrid size={20} />,
    title: 'La vida universitaria está fragmentada',
    desc: 'Eventos, fiestas, congresos y networking ocurren cada semana pero no existe una infraestructura que los organice, estructure y conecte digitalmente con lo que ocurre físicamente.',
  },
  {
    icon: <Radio size={20} />,
    title: 'Nadie ha integrado el ecosistema',
    desc: 'Las redes sociales muestran contenido. Las boleterías venden entradas. Los eventos reúnen personas. Pero nadie ha unificado todo eso en un sistema que genere valor real.',
  },
  {
    icon: <UserX size={20} />,
    title: 'El networking sigue siendo aleatorio',
    desc: 'Conectar con las personas correctas en un evento depende del azar. No hay sistema que optimice quién conoces, cuándo y en qué contexto.',
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'Cero inteligencia de audiencia',
    desc: 'Organizadores y marcas no conocen realmente a su audiencia, no segmentan por intereses y no tienen forma de medir fidelización ni impacto real.',
  },
]

export default function Problem() {
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
    <section className="section problem" id="problema">
      <div className="container">

        <div className="fade-up">
          <span className="section-tag">El Problema</span>
          <h2 className="section-title">
            La vida universitaria ocurre.<br />
            <span className="text-gradient">Nadie la está organizando.</span>
          </h2>
          <p className="section-sub">
            Millones de interacciones físicas cada semana sin infraestructura
            que las capture, estructure y convierta en valor real.
          </p>
        </div>

        <div className="problem__grid">
          {problems.map((p, i) => (
            <div key={i} className={`card problem__card fade-up delay-${i + 1}`}>
              <div className="problem__icon">{p.icon}</div>
              <h3 className="problem__title">{p.title}</h3>
              <p className="problem__desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="fade-up delay-3 problem__quote">
          <p>
            "Las redes sociales muestran contenido. Las boleterías venden entradas.
            Los eventos reúnen personas. <strong>Nadie ha integrado todo eso en un sistema unificado. U-Connect sí.</strong>"
          </p>
        </div>

      </div>
    </section>
  )
}