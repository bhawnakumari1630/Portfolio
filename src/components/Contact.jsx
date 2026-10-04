import { socialLinks, site } from '../data/site'
import Footer from './Footer'

function Contact() {
  return (
    <section className="px-5 pb-8 pt-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-slate-950 px-6 py-12 text-white sm:px-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          04 / Contact
        </p>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="max-w-lg font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.contactTitle}
            </h2>
            <p className="mt-5 max-w-md text-slate-400">{site.contactCopy}</p>
          </div>
          <div className="lg:text-right">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-lg font-medium hover:bg-white/5"
            >
              {site.email}
              <span aria-hidden="true">↗</span>
            </a>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400 lg:justify-end">
              {socialLinks.map((link) => {
                const isExternal = link.href.startsWith('http')
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-white"
                    {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Contact
