import Image from 'next/image'

export default function Collaborations() {
  const collaborations = [
    {
      image: '/images/collaboration1.jpeg',
      id: 1,
      title: 'Eid Vibes with NN Store',
      year: '2026',
      description: 'An Eid-themed animation created in collaboration with NN Store, showcasing the brand’s latest outfits through vibrant visuals and stylish character animation inspired by Eid vibes. ',
    },
    {
      image: '/images/coll22.jpeg',
      id: 2,
      title: 'The Woman Of Tunisia',
      year: '2025',
      description: 'A cultural-inspired animation created in collaboration with My Nabeul, an Instagram page dedicated to Tunisian culture and heritage, featuring traditional clothing and iconic cultural elements. ',
    },
    {
      image: '/images/books.jpeg',
      id: 3,
      title: 'Bookshelf Brand Animation',
      year: '2026',
      description: 'A brand animation created in collaboration with Beebooks, showcasing the elegance and functionality of their bookshelf collection through clean motion design and modern visual storytelling.',
    },
  ]

  return (
    <section id="collaborations" className="bg-coffee px-4 py-16 text-butter sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-sans text-4xl font-semibold uppercase tracking-[0.12em] text-butter sm:mb-20 sm:text-5xl md:text-6xl">Collaborations</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {collaborations.map((collab) => (
            <div
              key={collab.id}
              className="group cursor-pointer animate-float"
              style={{ animationDelay: `${collab.id * 0.2}s` }}
            >
              <div className="mb-8 overflow-hidden rounded-3xl border border-white/20 shadow-sm transition-all duration-300 hover:shadow-2xl">
                {collab.image ? (
                  <Image
                    src={collab.image}
                    alt={collab.title}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white/10">
                    <div className="text-center relative z-10">
                        <div className="text-7xl opacity-40 mb-2 group-hover:opacity-60 transition-opacity">🤝</div>
                        <p className="text-butter/40 text-sm font-medium">Project {collab.id}</p>
                      </div>
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-butter mb-3 group-hover:text-butter/80 transition-colors">{collab.title}</h3>
              <p className="text-butter/60 mb-4 text-sm font-medium">| {collab.year}</p>
              <p className="text-butter/70 text-sm leading-relaxed mb-6">
                {collab.description}
              </p>
              
            
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
