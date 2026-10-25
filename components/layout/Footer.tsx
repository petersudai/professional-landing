import { config } from '@/config/professional'

export function Footer() {
  const { footer, nav } = config

  return (
    <footer className="border-t border-rule bg-paper">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="font-display text-xl font-semibold">{nav.wordmark}</p>
          {footer.links.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-graphite underline underline-offset-4 decoration-rule transition-colors hover:text-ink hover:decoration-ink"
                    {...(link.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="mt-8 border-t border-rule pt-6 text-sm text-graphite">{footer.copyright}</p>
      </div>
    </footer>
  )
}
