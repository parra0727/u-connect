import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const links = [
  { label: 'Problema',      href: '#problema' },
  { label: 'Solución',      href: '#solucion' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Inversión',     href: '#inversion' },
  { label: 'Equipo',        href: '#equipo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        <a href="#" className="navbar__logo">
          <img src={logo} alt="U-Connect" className="navbar__logo-img" />
          <span>U-Connect</span>
        </a>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className="btn-primary navbar__cta">
          Quiero unirme
        </a>

        <button className="navbar__burger" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="navbar__mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" onClick={() => setOpen(false)}>
            Quiero unirme
          </a>
        </div>
      )}
    </nav>
  )
}