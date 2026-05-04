import { config } from '@/config/professional'

export function Footer() {
  const { footer, nav, meta } = config

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-serif font-bold text-white text-lg">{nav.logo}</p>
            <p className="text-slate-400 text-sm mt-1.5 max-w-xs leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">{footer.copyright}</p>
          <p className="text-xs text-slate-600">
            Built with{' '}
            <span className="text-brand-600">♥</span>
            {' '}for professionals who close premium deals
          </p>
        </div>
      </div>
    </footer>
  )
}
