import Image from 'next/image'

export default function Illustrations() {
  const illustrations = [
    { id: 1, image: '/images/1.png' },
    { id: 2, image: '/images/2.jpeg' },
    { id: 3, image: '/images/3.jpeg' },
    { id: 4, image: '/images/4.jpg' },
    { id: 5, image: '/images/5.jpeg' },
    { id: 6, image: '/images/6.jpeg' },
    { id: 7, image: '/images/7.jpeg' },
    { id: 8, image: '/images/8.jpeg' },
    { id: 9, image: '/images/9.png' },
    { id: 10, image: '/images/10.png' },
    { id: 11, image: '/images/11.jpeg' },
    { id: 12, image: '/images/12.jpeg' },
    { id: 13, image: '/images/13.jpeg' },
  ]

  return (
    <section id="illustrations" className="bg-coffee px-4 py-16 text-butter sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-center font-sans text-4xl font-semibold uppercase tracking-[0.12em] text-butter sm:text-5xl md:text-6xl">
          Illustrations
        </h2>

        <div className="columns-1 gap-3 space-y-3 md:columns-2 lg:columns-3 xl:columns-4">
          {illustrations.map((illustration, index) => (
            <div
              key={illustration.id}
              className="group mb-3 inline-block w-full break-inside-avoid transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
              style={{
                animation: `float ${3 + (index % 3) * 0.5}s ease-in-out infinite`,
              }}
            >
              <Image
                src={illustration.image}
                alt={`Illustration ${illustration.id}`}
                width={1200}
                height={1600}
                className="block h-auto w-full rounded-[1.5rem] border border-white/20 bg-white/10 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 border-white/20 pt-10 text-center">
          <p className="mb-6 font-sans text-base text-butter/80 sm:text-lg md:text-xl">If you want to see more</p>
          <a
            href="https://www.instagram.com/maysart__?igsh=MTdmcHpobWl4NDlxcw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full rounded-lg bg-butter px-8 py-4 font-bold text-coffee transition-all duration-300 hover:bg-butter/90 hover:shadow-lg sm:w-auto sm:px-10"
          >
            Click here
          </a>
        </div>
      </div>
    </section>
  )
}
