'use client'

import { useEffect, useRef, useState } from 'react'

export default function Animations() {
  const animations = [
    { id: 1, title: 'Animation 1', webmUrl: '/videos/v1.webm', mp4Url: '/videos/v1.mp4' },
    { id: 2, title: 'Animation 2', webmUrl: '/videos/v2.webm', mp4Url: '/videos/v2.mp4' },
    { id: 3, title: 'Animation 3', webmUrl: '/videos/v3.webm', mp4Url: '/videos/v3.mp4' },
    { id: 4, title: 'Animation 4', webmUrl: '/videos/v4.webm', mp4Url: '/videos/v4.mp4' },
    { id: 5, title: 'Animation 5', webmUrl: '/videos/v5.webm', mp4Url: '/videos/v5.mp4' },
    { id: 6, title: 'Animation 6', webmUrl: '/videos/v6.webm', mp4Url: '/videos/v6.mp4' },
    { id: 7, title: 'Animation 7', webmUrl: '/videos/v7.webm', mp4Url: '/videos/v7.mp4' },
    { id: 8, title: 'Animation 8', webmUrl: '/videos/v8.webm', mp4Url: '/videos/v8.mp4' },
  ]

  const sectionRef = useRef<HTMLElement>(null)
  const [lastLoadedVideo, setLastLoadedVideo] = useState(-1)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLastLoadedVideo((current) => Math.max(current, 0))
          observer.disconnect()
        }
      },
      { rootMargin: '400px 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="animations" className="bg-butter px-4 py-16 text-coffee sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center font-sans text-4xl font-semibold uppercase tracking-[0.12em] text-coffee sm:text-5xl md:text-6xl">
          Animations
        </h2>
        <p className="mb-10 text-center text-sm text-coffee/70 md:text-base">
        
        </p>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {animations.map((animation, videoIndex) => (
            <div key={animation.id} className="flex flex-col gap-3 animate-float" style={{ animationDelay: `${animation.id * 0.15}s` }}>
              <div className="group aspect-[9/16] overflow-hidden rounded-[1.5rem] border border-border/30 bg-gradient-to-br from-primary/20 to-purple-200/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                {lastLoadedVideo >= videoIndex ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload={lastLoadedVideo === videoIndex ? 'metadata' : 'none'}
                      onLoadedData={() => {
                        setLastLoadedVideo((current) => Math.max(current, videoIndex + 1))
                      }}
                      className="h-full w-full object-cover"
                    >
                      <source src={animation.webmUrl} type="video/webm" />
                      <source src={animation.mp4Url} type="video/mp4" />
                    </video>
                ) : (
                  <div className="flex h-full items-center justify-center text-center">
                    <div>
                      <div className="mb-3 text-6xl opacity-30 transition-opacity group-hover:opacity-45">▶</div>
                      <p className="text-sm font-medium text-foreground/40"></p>
                    </div>
                  </div>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
