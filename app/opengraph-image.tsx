import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { config } from '@/config/professional'

export const runtime = 'nodejs'
export const alt = config.meta.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Satori reads woff, not woff2. The v1 Google Fonts API returns woff.
async function loadFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css?family=${family.replace(/ /g, '+')}:${weight}`,
      { signal: AbortSignal.timeout(6000) }
    ).then((r) => r.text())
    const url = css.match(/src:\s*url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1]
    if (!url) return null
    return await fetch(url, { signal: AbortSignal.timeout(6000) }).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function OgImage() {
  const { hero, nav } = config

  const [display, body, photo] = await Promise.all([
    loadFont('Zilla Slab', 700),
    loadFont('Public Sans', 600),
    readFile(join(process.cwd(), 'public', hero.image.src)).catch(() => null),
  ])

  const photoSrc = photo ? `data:image/jpeg;base64,${photo.toString('base64')}` : null
  const heading = display ? 'Zilla Slab' : 'Georgia'
  const sans = body ? 'Public Sans' : 'system-ui'

  const fonts = [
    ...(display ? [{ name: 'Zilla Slab', data: display, weight: 700 as const, style: 'normal' as const }] : []),
    ...(body ? [{ name: 'Public Sans', data: body, weight: 600 as const, style: 'normal' as const }] : []),
  ]

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          backgroundColor: '#F2F2EE',
          color: '#1B1D1A',
          fontFamily: sans,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            padding: '56px 56px 52px 64px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '30px' }}>
            <span style={{ fontFamily: heading, fontWeight: 700 }}>{nav.wordmark}</span>
            <span style={{ marginLeft: '16px', fontSize: '24px', color: '#4A4E48' }}>{nav.descriptor}</span>
          </div>

          <div
            style={{
              display: 'flex',
              fontFamily: heading,
              fontWeight: 700,
              fontSize: '60px',
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
            }}
          >
            {hero.headline}
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                backgroundColor: '#17402F',
                color: '#FFFFFF',
                fontSize: '26px',
                padding: '16px 28px',
                borderRadius: '6px',
              }}
            >
              {hero.cta.label}
            </div>
          </div>
        </div>

        {photoSrc && (
          <div style={{ display: 'flex', width: '380px', height: '630px', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoSrc}
              width={380}
              height={630}
              alt=""
              style={{ width: '380px', height: '630px', objectFit: 'cover', objectPosition: '50% 35%' }}
            />
          </div>
        )}
      </div>
    ),
    { ...size, fonts }
  )
}
