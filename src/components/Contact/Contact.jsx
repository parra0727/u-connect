import { useState, useEffect } from 'react'
import { Mail, Instagram, Linkedin, Send } from 'lucide-react'
import './Contact.css'

const universities = [
  'EIA', 'EAFIT', 'UPB',
  'Universidad de Antioquia',
  'Universidad Nacional — Medellín',
  'Otra',
]

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', university: '', role: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await fetch('https://formspree.io/f/TU_ID_AQUI', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
    })
    setLoading(false)
    setSubmitted(true)
    }

  return (
    <section className="section contact" id="contacto">
      <div className="contact__glow" />
      <div className="container">
        <div className="contact__inner">

          <div className="contact__left fade-up">
            <span className="section-tag">Únete</span>
            <h2 className="section-title">
              ¿Quieres ser parte<br />
              <span className="text-gradient">de U-Connect?</span>
            </h2>
            <p className="section-sub">
              Buscamos estudiantes early adopters, organizadores de eventos,
              aliados universitarios e inversores que crean en el potencial
              de la infraestructura social universitaria.
            </p>

            <div className="contact__socials">
              <a href="mailto:hola@u-connect.co" className="contact__social">
                <Mail size={17} /> hola@u-connect.co
              </a>
              <a href="#" className="contact__social">
                <Instagram size={17} /> @uconnect.co
              </a>
              <a href="#" className="contact__social">
                <Linkedin size={17} /> U-Connect
              </a>
            </div>
          </div>

          <div className="contact__right fade-up delay-2">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">🎉</div>
                <h3>¡Ya estás dentro!</h3>
                <p>Te contactaremos cuando U-Connect llegue a tu campus.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Únete a la lista de espera</h3>
                <p className="contact__form-sub">Sé de los primeros en vivir el ecosistema.</p>

                <div className="contact__field">
                  <label className="contact__label">Nombre completo</label>
                  <input type="text" name="name" placeholder="Tu nombre"
                    className="contact__input" value={form.name}
                    onChange={handleChange} required />
                </div>

                <div className="contact__field">
                  <label className="contact__label">Correo universitario</label>
                  <input type="email" name="email" placeholder="nombre@universidad.edu.co"
                    className="contact__input" value={form.email}
                    onChange={handleChange} required />
                </div>

                <div className="contact__field">
                  <label className="contact__label">Universidad</label>
                  <select name="university" className="contact__input contact__select"
                    value={form.university} onChange={handleChange} required>
                    <option value="">Selecciona tu universidad</option>
                    {universities.map((u) => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>

                <div className="contact__field">
                  <label className="contact__label">Soy...</label>
                  <select name="role" className="contact__input contact__select"
                    value={form.role} onChange={handleChange} required>
                    <option value="">Selecciona tu rol</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="organizador">Organizador de eventos</option>
                    <option value="inversor">Inversionista</option>
                    <option value="universidad">Representante universitario</option>
                  </select>
                </div>

                <button type="submit"
                  className={`btn-primary contact__submit ${loading ? 'contact__submit--loading' : ''}`}
                  disabled={loading}>
                  {loading ? 'Enviando...' : <> Quiero unirme <Send size={15} /></>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}