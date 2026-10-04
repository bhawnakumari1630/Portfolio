import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-slate-900 dark:text-white">
        Page not found
      </h1>
      <Link to="/" className="mt-8 inline-block rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
        Back home
      </Link>
    </section>
  )
}

export default NotFoundPage
