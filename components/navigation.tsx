'use client'

export default function Navigation() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About me' },
    { href: '#collaborations', label: 'Collaborations' },
    { href: '#animations', label: 'Animations' },
    { href: '#illustrations', label: 'Illustrations' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-butter/25 bg-coffee/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-butter md:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-[11px] font-medium font-sans transition-colors duration-200 hover:text-white sm:px-4 sm:text-sm md:px-0 md:py-0 md:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
