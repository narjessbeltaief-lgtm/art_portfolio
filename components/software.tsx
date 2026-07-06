import Image from 'next/image'

export default function Software() {
  const tools = [
    { name: 'Procreate', logo: '/logos/procreate.svg' },
    { name: 'Procreate Dreams', logo: '/logos/procreate-dreams.svg' },
    { name: 'Adobe Fresco', logo: '/logos/adobe-fresco.svg' },
    { name: 'Krita', logo: '/logos/krita.svg' },
  ]

  return (
    <section id="software" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-black text-foreground mb-20 text-center">
          Software I Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center rounded-[1.5rem] border border-border/40 bg-card/70 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 p-2">
                <Image src={tool.logo} alt={`${tool.name} logo`} width={48} height={48} className="h-full w-full object-contain" />
              </div>
              <p className="text-foreground/85 font-bold text-center text-sm md:text-base">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
