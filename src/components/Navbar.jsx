import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import ThemeToggle from './ThemeToggle'

const linkClass = ({ isActive }) =>
  [
    'text-sm font-medium transition',
    isActive
      ? 'text-slate-900 dark:text-white'
      : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200',
  ].join(' ')

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
            {site.initials}
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <NavLink
            to="/contact"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Let&apos;s Talk
          </NavLink>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 md:hidden dark:border-slate-700"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-4 bg-slate-800 dark:bg-slate-200" />
            <span className="block h-0.5 w-4 bg-slate-800 dark:bg-slate-200" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 px-5 py-4 md:hidden dark:border-slate-800">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <ThemeToggle />
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
            >
              Let&apos;s Talk
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
