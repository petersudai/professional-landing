import { config } from '@/config/professional'

// The signature: each job is shown as a duplicate-docket style job record,
// the same sheet the consultant hands the owner at the end of the work.
export function Results() {
  const { results } = config

  return (
    <section id="results" className="border-b border-rule">
      <div className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {results.heading}
          </h2>
          <p className="mt-3 text-lg text-graphite">{results.sub}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {results.jobs.map((job) => (
            <article key={job.ref} className="flex flex-col border border-ink bg-white">
              <header className="flex items-baseline justify-between border-b border-dashed border-ink/40 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-graphite">
                <span>Job record</span>
                <span className="tabular-nums">{job.ref}</span>
              </header>

              <div className="px-5 pt-5">
                <h3 className="font-display text-xl font-semibold leading-snug">{job.client}</h3>
                <p className="mt-2 text-[0.9375rem] leading-snug text-graphite">{job.problem}</p>
              </div>

              <table className="mx-5 mt-5 w-[calc(100%-2.5rem)] border-collapse text-[0.9375rem] tabular-nums">
                <caption className="sr-only">Measures for {job.client}, before and after</caption>
                <thead>
                  <tr className="border-b border-ink text-xs uppercase tracking-wider text-graphite">
                    <th scope="col" className="py-2 pr-2 text-left font-semibold">
                      Measure
                    </th>
                    <th scope="col" className="px-2 py-2 text-right font-semibold">
                      Before
                    </th>
                    <th scope="col" className="py-2 pl-2 text-right font-semibold">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {job.measures.map((m) => (
                    <tr key={m.label} className="border-b border-rule align-baseline">
                      <th scope="row" className="py-3 pr-2 text-left font-normal leading-snug">
                        {m.label}
                      </th>
                      <td className="whitespace-nowrap px-2 py-3 text-right text-graphite">{m.before}</td>
                      <td className="whitespace-nowrap py-3 pl-2 text-right font-semibold text-stamp">{m.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="px-5 pb-5 pt-3 text-xs text-graphite">{job.duration}</p>

              <figure className="mt-auto border-t border-dashed border-ink/40 px-5 py-5">
                <blockquote className="text-[0.9375rem] leading-relaxed">{job.quote}</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-graphite">{job.by}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
