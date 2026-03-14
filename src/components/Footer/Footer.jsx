import { Zap, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import './Footer.css'
import logo from '../../assets/logo.png'
const navLinks = [
  { label: 'Problema',      href: '#problema' },
  { label: 'Solución',      href: '#solucion' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Métricas',      href: '#metricas' },
  { label: 'Equipo',        href: '#equipo' },
  { label: 'Contacto',      href: '#contacto' },
]

const socials = [
  { icon: <Instagram size={17} />, href: '#', label: 'Instagram' },
  { icon: <Linkedin size={17} />,  href: '#', label: 'LinkedIn' },
  { icon: <Twitter size={17} />,   href: '#', label: 'Twitter' },
  { icon: <Github size={17} />,    href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__top">

          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <img src={logo} alt="U-Connect" className="footer__logo-img" />
              Uconnet
            </a>
            <p className="footer__tagline">
              Conectando el talento universitario de Colombia.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="footer__social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__nav">
            <span className="footer__nav-title">Navegación</span>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer__nav-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__nav">
            <span className="footer__nav-title">Universidades</span>
            <ul>
              {['EAFIT', 'EIA', 'UPB', 'U de Antioquia', 'U Nacional'].map((u) => (
                <li key={u}>
                  <span className="footer__nav-link footer__nav-link--muted">{u}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__nav">
            <span className="footer__nav-title">Contacto</span>
            <ul>
              <li><a href="mailto:uconnect.info.team@gmail.com" className="footer__nav-link">uconnect.info.team@gmail.com</a></li>
              <li><span className="footer__nav-link footer__nav-link--muted">Medellín, Colombia</span></li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} Uconnet. Todos los derechos reservados.
          </span>
          <span className="footer__made">
            Hecho con ♥ en Medellín 🇨🇴
          </span>
        </div>

      </div>
    </footer>
  )
}