import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#222222]/5 bg-[#FAF8F5]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="text-lg font-semibold tracking-tight text-[#111111] transition-opacity hover:opacity-80"
        >
          Madevix<span className="text-[#0F62FE]">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            href="/weboldalkeszites" 
            className="text-sm font-medium text-[#222222]/80 transition-colors hover:text-[#111111]"
          >
            Weboldalkészítés
          </Link>
          <Link 
            href="/referenciak" 
            className="text-sm font-medium text-[#222222]/80 transition-colors hover:text-[#111111]"
          >
            Referenciák
          </Link>
          <Link 
            href="/kapcsolat" 
            className="text-sm font-medium text-[#222222]/80 transition-colors hover:text-[#111111]"
          >
            Kapcsolat
          </Link>
        </nav>

        {/* Action CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/kapcsolat"
            className="inline-flex items-center justify-center rounded-full bg-[#0F62FE] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0F62FE]/90 shadow-sm"
          >
            Projekt indítása
          </Link>
        </div>
      </div>
    </header>
  );
}