'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';

const OFFSET = -80;

/**
 * Scrolls to the requested section every time the link is clicked,
 * even when the current URL already contains that same #hash.
 */
function scrollToSection(
  id: string,
  closeMenu: () => void,
  e: React.MouseEvent<HTMLAnchorElement>
) {
  e.preventDefault();

  const el = document.getElementById(id);
  if (!el) return;

  const lenis: any = (window as any).__lenis;
  const scrollOpts = { offset: OFFSET, lerp: 0.15 };

  if (lenis?.scrollTo) {
    lenis.scrollTo(el, scrollOpts);
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY + OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  /* ── force the hash to update so the handler always re-fires ── */
  if (location.hash === `#${id}`) {
    history.replaceState(null, '', location.pathname + location.search); // clear hash
  }
  history.pushState(null, '', `#${id}`); // set (or reset) hash

  closeMenu();
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('section');
      if (hero) setScrolled(window.scrollY > hero.offsetHeight - 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const outside = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(t) &&
        buttonRef.current &&
        !buttonRef.current.contains(t)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', outside);
    return () => document.removeEventListener('mousedown', outside);
  }, [menuOpen]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-3xl w-[80vw] pointer-events-none">
      <div
        className="pointer-events-auto w-full flex justify-center items-center h-12 border border-cafe-cream rounded-xl px-2 sm:px-4 backdrop-blur-md relative transition-all duration-500 space-x-6"
        style={{
          boxShadow: scrolled
            ? '0 12px 32px -8px rgba(161,133,89,0.8)'
            : '0 12px 32px -8px rgba(161,133,89,0.3)',
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="hidden md:block absolute left-2 h-10 w-auto object-contain"
        />

        <Link
          href="/"
          className="text-cafe-rose font-semibold text-sm sm:text-base whitespace-nowrap"
        >
          THE BANK BAR
        </Link>

        {/* ── desktop nav ── */}
        <nav className="hidden md:flex items-center space-x-4 text-sm text-cafe-cream ml-6">
          <a
            href="#menu"
            onClick={(e) => scrollToSection('menu', () => {}, e)}
            className="hover:text-cafe-rose font-medium transition"
          >
            Menu
          </a>
          <a
            href="#events"
            onClick={(e) => scrollToSection('events', () => {}, e)}
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

        {/* ── mobile hamburger ── */}
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-cafe-rose p-1 rounded focus:outline-none focus:ring-2 focus:ring-cafe-rose absolute right-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* ── mobile dropdown ── */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-20 left-1/2 -translate-x-1/2 w-[80vw] max-w-3xl bg-cafe-lavender/95 border border-cafe-cream rounded-xl shadow-lg px-4 py-6 space-y-3 text-base text-cafe-cream animate-fadeIn z-[60] pointer-events-auto"
        >
          <a
            href="#menu"
            onClick={(e) => scrollToSection('menu', () => setMenuOpen(false), e)}
            className="block py-2 px-2 rounded hover:bg-cafe-cream/20 font-medium"
          >
            Menu
          </a>
          <a
            href="#events"
            onClick={(e) => scrollToSection('events', () => setMenuOpen(false), e)}
            className="block py-2 px-2 rounded hover:bg-cafe-cream/20 font-medium"
          >
            Events
          </a>
          <Link
            href="/order-online"
            className="block font-bold mx-auto flex items-center text-cafe-rose hover:text-cafe-cream transition"
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingBag size={18} className="mr-2" />
            Order Online
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
