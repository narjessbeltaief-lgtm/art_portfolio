'use client'

import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="bg-butter px-4 py-16 text-coffee sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        

        <div className="space-y-5 max-w-2xl mx-auto">
          {/* Contact */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-foreground sm:mb-8 sm:text-3xl">Contact</h3>
            <div className="space-y-6">
              <a href="mailto:" className="group flex items-center gap-4 font-sans text-coffee/70 transition-colors duration-200 hover:text-coffee">
                <Image
                  src="/images/mail.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain"
                  unoptimized
                />
                <span className="text-lg sm:text-xl">mayssart.st0re@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>

            <div className="space-y-6">
              <a href="https://www.instagram.com/maysart__?igsh=MTdmcHpobWl4NDlxcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 font-sans text-coffee/70 transition-colors duration-200 hover:text-coffee">
                <Image
                  src="/images/insta1.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                  unoptimized
                />
                <span className="text-lg sm:text-xl">maysart__</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
