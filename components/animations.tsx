export default function Animations() {
  const animations = [
    { id: 1, title: 'Animation 1', videoUrl: '/videos/v1.mp4' },
    { id: 2, title: 'Animation 2', videoUrl: '/videos/v2.mp4' },
    { id: 3, title: 'Animation 3', videoUrl: '/videos/v3.mp4' },
    { id: 4, title: 'Animation 4', videoUrl: '/videos/v4.mp4' },
    { id: 5, title: 'Animation 5', videoUrl: '/videos/v5.mp4' },
    { id: 6, title: 'Animation 6', videoUrl: '/videos/v6.mp4' },
    { id: 7, title: 'Animation 7', videoUrl: '/videos/v7.mp4' },
    { id: 8, title: 'Animation 8', videoUrl: '/videos/v8.mp4' },
  ]

  const hasVideo = (url: string) => Boolean(url?.trim())

  return (
    <section id="animations" className="bg-butter px-4 py-16 text-coffee sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center font-sans text-4xl font-semibold uppercase tracking-[0.12em] text-coffee sm:text-5xl md:text-6xl">
          Animations
        </h2>
        <p className="mb-10 text-center text-sm text-coffee/70 md:text-base">
        
        </p>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {animations.map((animation) => (
            <div key={animation.id} className="flex flex-col gap-3 animate-float" style={{ animationDelay: `${animation.id * 0.15}s` }}>
              <div className="group aspect-[9/16] overflow-hidden rounded-[1.5rem] border border-border/30 bg-gradient-to-br from-primary/20 to-purple-200/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                {hasVideo(animation.videoUrl) ? (
                  animation.videoUrl.includes('youtube.com') || animation.videoUrl.includes('youtu.be') ? (
                    <iframe
                      src={animation.videoUrl}
                      title={animation.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  ) : (
                    <video
                      src={animation.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  )
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
