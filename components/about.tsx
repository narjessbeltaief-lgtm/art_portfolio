'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const softwareTools = [
  {
    name: 'Procreate',
    candidates: [
      '/logos/procreate.jpeg',
    ],
  },
  {
    name: 'Procreate Dreams',
    candidates: [
      '/logos/dreams copy.webp',
    ]
  },
  {
    name: 'Adobe Fresco',
    candidates: [
      '/logos/frisco copy.png',
    ],
  },
  {
    name: 'Krita',
    candidates: [
      '/logos/krita.png',
    ],
  },
]

function LogoImage({ candidates }: { candidates: string[] }) {
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const resolve = async () => {
      for (const candidate of candidates) {
        try {
          const response = await fetch(candidate, { method: 'HEAD' })
          if (response.ok && !cancelled) {
            setResolvedSrc(candidate)
            return
          }
        } catch {
          // Try the next candidate
        }
      }

      if (!cancelled) {
        setResolvedSrc('/placeholder-logo.svg')
      }
    }

    resolve()

    return () => {
      cancelled = true
    }
  }, [candidates])

  return (
    <Image
      src={resolvedSrc ?? '/placeholder-logo.svg'}
      alt="Software logo"
      width={48}
      height={48}
      className="h-full w-full rounded-[1.2rem] object-contain"
      unoptimized
    />
  )
}

export default function About() {
  return (
    <section id="about" className="bg-butter px-4 py-16 text-coffee sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 md:flex-row md:items-end md:justify-center">
          <div className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-border/40 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_24px_70px_rgba(0,0,0,0.24)] animate-float">
            <Image
              src="/images/me1.jpeg"
              alt="Portrait of Mayssa Beltaief"
              width={800}
              height={800}
              className="h-auto w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>

          <div className="w-full max-w-2xl md:pl-10 md:-translate-y-22">
            <h2 className="mb-4 text-left font-sans text-3xl font-semibold uppercase tracking-[0.12em] text-coffee sm:text-4xl md:text-5xl">
              About me
            </h2>
            <div className="text-lg leading-relaxed text-coffee/80 font-sans sm:text-lg">
              <p>
                I’m an artist, children’s book illustrator, and animator in progress, drawn to whimsical worlds, music, movies, quiet emotions, and visual storytelling. Through my art, I hope to create worlds that feel tender, cinematic, and emotionally alive.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="mb-8 text-center font-sans text-3xl font-extrabold uppercase tracking-[0.09em] text-coffee sm:mb-12 sm:text-4xl md:text-2xl">
            Software I Use
          </h3>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {softwareTools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center gap-3 rounded-[2rem] bg-transparent p-2 transition-all duration-300 hover:-translate-y-1 animate-float"
                style={{ animationDelay: `${(softwareTools.findIndex((item) => item.name === tool.name) + 1) * 0.12}s` }}
              >
                <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-[2rem] p-1">
                  <LogoImage candidates={tool.candidates} />
                </div>
                <p className="text-sm font-semibold text-coffee md:text-base">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
