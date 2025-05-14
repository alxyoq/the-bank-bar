'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const OFFSET = -64; // header height + desired offset

/* ───────── helpers ───────── */
function isMobile() {
  return typeof window !== 'undefined' &&
         window.matchMedia('(max-width: 640px)').matches;
}

function scrollToSection(id: string, e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();

  const el = document.getElementById(id);
  if (!el) return;

  const lenis: any = (window as any).__lenis;
  const mobile = isMobile();

  /* —— Lenis path —— */
  if (lenis?.scrollTo) {
    lenis.scrollTo(el, {
      offset: OFFSET,
      /* jump immediately on mobile, keep smooth on desktop */
      immediate: mobile,
      lerp: mobile ? 0 : 0.15,
    });
  } else {
    /* —— native scroll —— */
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY + OFFSET,
      behavior: mobile ? 'auto' : 'smooth', // skip CSS smooth on mobile
    });
  }

  // update hash in URL
  history.replaceState(null, '', location.pathname + location.search);
  history.pushState(null, '', `#${id}`);
}

function scrollToHome(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();

  const lenis: any = (window as any).__lenis;
  const mobile = isMobile();

  if (lenis?.scrollTo) {
    lenis.scrollTo(0, {
      immediate: mobile,
      lerp: mobile ? 0 : 0.15,
    });
  } else {
    window.scrollTo({ top: 0, behavior: mobile ? 'auto' : 'smooth' });
  }

  history.replaceState(null, '', location.pathname + location.search);
}

/* ───────── component ───────── */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('section');
      if (hero) {
        setScrolled(window.scrollY > hero.clientHeight - 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[120] max-w-3xl w-[95vw] sm:w-[80vw] pointer-events-none">
      <div
        className="pointer-events-auto w-full flex justify-center items-center h-12 border border-cafe-cream rounded-xl px-2 sm:px-4 backdrop-blur-md relative transition-all duration-500 space-x-6"
        style={{
          boxShadow: scrolled
            ? '0 12px 32px -8px rgba(161,133,89,0.8)'
            : '0 12px 32px -8px rgba(161,133,89,0.3)',
        }}
      >
        {/* Logo hidden on mobile */}
        <a
          href="/"
          onClick={scrollToHome}
          className="hidden sm:block absolute left-2 h-10 w-auto"
        >
          <img src="/logo.png" alt="Logo" className="h-full w-auto object-contain" />
        </a>

        {/* Brand */}
        <a
          href="/"
          onClick={scrollToHome}
          className="text-cafe-rose font-semibold text-sm sm:text-base whitespace-nowrap"
        >
          THE BANK BAR
        </a>

        {/* Nav */}
        <nav className="flex items-center space-x-4 text-sm text-cafe-cream ml-6">
          <a
            href="#menu"
            onClick={(e) => scrollToSection('menu', e)}
            className="hover:text-cafe-rose font-medium transition"
          >
            Menu
          </a>
          <a
            href="#events"
            onClick={(e) => scrollToSection('events', e)}
            className="hover:text-cafe-rose font-medium transition"
          >
            Events
          </a>
          <Link
            href="/order-online"
            className="font-bold flex items-center text-cafe-rose hover:text-cafe-cream transition"
          >
            <ShoppingBag size={16} className="mr-1" />
            Order Online
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
