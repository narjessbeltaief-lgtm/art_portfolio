import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-coffee px-4 text-butter sm:px-6">
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <Image
          src="/images/port1.jpeg"
          alt="Portfolio"
          width={900}
          height={260}
          priority
          className="mx-auto h-auto w-full max-w-[min(90vw,900px)]"
        />
      </div>
    </section>
  )
}
