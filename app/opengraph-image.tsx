import { ImageResponse } from 'next/og'
import { config } from '@/config/professional'

// Node.js runtime — more reliable for font fetching with timeouts
export const runtime = 'nodejs'
export const alt = config.meta.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Load a Google Font as an ArrayBuffer for use in ImageResponse.
 * Fetches the CSS first (to resolve the versioned CDN URL), then the font bytes.
 * Returns null on any failure so the image still renders with system fonts.
 */
async function loadFont(
  family: string,
  weight: 400 | 600 | 700 | 800
): Promise<ArrayBuffer | null> {
  try {
    // Use the v1 API — it returns woff format which Satori supports.
    // The v2 API returns woff2 (unsupported by Satori) when sent a modern UA.
    const cssUrl = `https://fonts.googleapis.com/css?family=${family.replace(/ /g, '+')}:${weight}`

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 6000)

    const css = await fetch(cssUrl, { signal: controller.signal }).then((r) => r.text())
    clearTimeout(timer)

    // v1 API response contains: src: url(...) format('woff')
    const match = css.match(/src:\s*url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)
    if (!match?.[1]) return null

    const fontController = new AbortController()
    const fontTimer = setTimeout(() => fontController.abort(), 6000)
    const buffer = await fetch(match[1], { signal: fontController.signal }).then((r) =>
      r.arrayBuffer()
    )
    clearTimeout(fontTimer)
    return buffer
  } catch {
    return null // falls back to system serif/sans
  }
}

export default async function OgImage() {
  // Load both fonts in parallel — fall back to system serif/sans if either fails
  const [playfairData, interData] = await Promise.all([
    loadFont('Playfair Display', 700),
    loadFont('Inter', 600),
  ])

  const { hero, nav, meta, about } = config
  const [line1, line2] = hero.headline.split('\n')
  const stats = Object.values(hero.socialProof)

  const fontStack = {
    heading: playfairData ? 'Playfair Display' : 'Georgia',
    body: interData ? 'Inter' : 'system-ui',
  }

  // Only pass fonts that successfully loaded
  type FontDef = {
    name: string
    data: ArrayBuffer
    weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    style: 'normal' | 'italic'
  }
  const fonts: FontDef[] = [
    ...(playfairData
      ? [{ name: 'Playfair Display', data: playfairData, weight: 700 as const, style: 'normal' as const }]
      : []),
    ...(interData
      ? [{ name: 'Inter', data: interData, weight: 600 as const, style: 'normal' as const }]
      : []),
  ]

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0F172A',
          padding: '56px 72px',
          fontFamily: fontStack.body,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Ambient glows ─────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            backgroundImage:
              'radial-gradient(circle, rgba(180,83,9,0.22) 0%, transparent 68%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-140px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundImage:
              'radial-gradient(circle, rgba(180,83,9,0.09) 0%, transparent 68%)',
          }}
        />

        {/* ── Top bar: logo + eyebrow pill ──────────────── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '42px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0px' }}>
            <span
              style={{
                fontFamily: fontStack.heading,
                fontSize: '26px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.01em',
              }}
            >
              {nav.logo}
            </span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#B45309',
                marginLeft: '8px',
                letterSpacing: '0.03em',
              }}
            >
              {nav.logoSuffix}
            </span>
          </div>

          {/* Eyebrow pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              padding: '9px 22px',
              border: '1px solid rgba(180,83,9,0.45)',
              borderRadius: '100px',
              backgroundColor: 'rgba(180,83,9,0.12)',
            }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#F59E0B',
              }}
            />
            <span
              style={{
                color: '#FCD34D',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.16em',
              }}
            >
              {hero.eyebrow.toUpperCase()}
            </span>
          </div>
        </div>

        {/* ── Main row: headline + stats ────────────────── */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            gap: '56px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Left column — Headline / Sub / CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              minWidth: 0,
            }}
          >
            {/* Two-line headline */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: fontStack.heading,
                fontWeight: 700,
                lineHeight: 1.07,
                marginBottom: '22px',
              }}
            >
              <span style={{ fontSize: '54px', color: '#FFFFFF' }}>{line1}</span>
              <span style={{ fontSize: '54px', color: '#FCD34D' }}>{line2}</span>
            </div>

            {/* Subheadline */}
            <span
              style={{
                fontSize: '16px',
                color: '#94A3B8',
                lineHeight: 1.65,
                maxWidth: '530px',
              }}
            >
              {hero.subheadline}
            </span>

            {/* CTA button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '30px',
                padding: '13px 28px',
                backgroundColor: '#B45309',
                borderRadius: '12px',
                alignSelf: 'flex-start',
                gap: '8px',
              }}
            >
              <span
                style={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '15px',
                  letterSpacing: '0.01em',
                }}
              >
                {hero.primaryCta.label}
              </span>
              <span style={{ color: '#FDE68A', fontSize: '16px' }}>→</span>
            </div>
          </div>

          {/* Right column — Stat stack */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
              width: '254px',
              flexShrink: 0,
            }}
          >
            {stats.map((stat, i) => {
              const isMiddle = i === 1
              const isFirst = i === 0
              const isLast = i === stats.length - 1
              return (
                <div
                  key={stat.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '22px 28px',
                    backgroundColor: isMiddle
                      ? 'rgba(180,83,9,0.20)'
                      : 'rgba(255,255,255,0.045)',
                    borderRadius: isFirst
                      ? '14px 14px 0 0'
                      : isLast
                      ? '0 0 14px 14px'
                      : '0',
                    borderLeft: `3px solid ${isMiddle ? '#B45309' : 'transparent'}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fontStack.heading,
                      fontSize: '38px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#64748B',
                      marginTop: '5px',
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Bottom bar: domain + credentials ─────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '30px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span style={{ color: '#475569', fontSize: '13px' }}>
            {meta.url.replace(/^https?:\/\//, '')}
          </span>

          <div style={{ display: 'flex', gap: '28px' }}>
            {about.credentials.slice(0, 2).map((cred) => (
              <span key={cred.label} style={{ color: '#475569', fontSize: '12px' }}>
                {cred.label} · {cred.sublabel}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  )
}
