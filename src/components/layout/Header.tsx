'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const OFFSET = -64; // match your header’s actual height + top offset

function scrollToSection(
  id: string,
  e: React.MouseEvent<HTMLAnchorElement>
) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;

  const lenis: any = (window as any).__lenis;
  const opts = { offset: OFFSET, lerp: 0.15 };

  if (lenis?.scrollTo) {
    lenis.scrollTo(el, opts);
  } else {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY + OFFSET,
      behavior: 'smooth',
    });
  }

  // Always clear the old hash then push the new one
  history.replaceState(null, '', location.pathname + location.search);
  history.pushState(null, '', `#${id}`);
}

function scrollToHome(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const lenis: any = (window as any).__lenis;
  if (lenis?.scrollTo) {
    lenis.scrollTo(0, { lerp: 0.15 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Clear any hash
  history.replaceState(null, '', location.pathname + location.search);
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        setScrolled(window.scrollY > heroSection.clientHeight - 100);
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
        {/* Logo hidden on mobile, visible from sm breakpoint up */}
        <a
          href="/"
          onClick={scrollToHome}
          className="hidden sm:block absolute left-2 h-10 w-auto"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
        </a>

        {/* Brand name */}
        <a
          href="/"
          onClick={scrollToHome}
          className="text-cafe-rose font-semibold text-sm sm:text-base whitespace-nowrap"
        >
          THE BANK BAR
        </a>

        {/* Nav links always visible */}
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
