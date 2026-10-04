import { NavLink } from 'react-router-dom'
import { navLinks, site } from '../data/site'

function Footer() {
  return (
    <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      <nav className="flex flex-wrap gap-5">
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} className="hover:text-white">
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Footer
