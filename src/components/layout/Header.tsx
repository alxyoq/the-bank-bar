'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Instagram, Facebook, Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ease-in-out ${
        scrolled ? 'shadow-lg py-2 h-[56px]' : 'py-4 h-[80px]'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 flex items-center justify-between h-full">
        {/* Brand text box */}
        <Link href="/" className="leading-tight">
          <div className="px-4 py-1 rounded-md bg-white/60 backdrop-blur-md border border-gray-300 text-center transition-all">
            <h1 className="text-base md:text-lg font-quicksand font-semibold tracking-wide text-cafe-rose leading-none">
              WOODBURY STATION
            </h1>
            <p className="text-[11px] text-gray-600 tracking-wider -mt-1">CAFÉ</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4 text-sm text-gray-700">
          {[
            ['/', 'Home'],
            ['/menu', 'Menu'],
            ['/catering-events', 'Catering & Events'],
            ['/gallery', 'Gallery'],
            ['/reviews', 'Reviews'],
            ['/contact', 'Contact'],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-cafe-rose hover:underline transition duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/order-online"
            className="btn-outline text-xs px-3 py-[5px] ml-2 flex items-center"
          >
            <ShoppingBag size={16} className="mr-1" />
            Order Online
          </Link>
          <Link href="https://www.instagram.com/woodburystationcafe/" target="_blank" aria-label="Instagram">
            <Instagram size={16} className="text-cafe-rose hover:text-cafe-lavender transition-colors" />
          </Link>
          <Link href="https://www.facebook.com/woodburystation/" target="_blank" aria-label="Facebook">
            <Facebook size={16} className="text-cafe-rose hover:text-cafe-lavender transition-colors" />
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cafe-rose p-2 rounded focus:outline-none focus:ring-2 focus:ring-cafe-rose"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden px-3 pb-4 space-y-3 text-base text-gray-800 animate-fadeIn w-full bg-white border-t border-gray-100 shadow z-[60]"
        >
          {[
            ['/', 'Home'],
            ['/menu', 'Menu'],
            ['/catering-events', 'Catering & Events'],
            ['/gallery', 'Gallery'],
            ['/reviews', 'Reviews'],
            ['/contact', 'Contact'],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="block py-2 px-2 rounded hover:bg-cafe-cream w-full"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/order-online"
            className="block btn-outline text-xs w-fit mt-2 mx-auto flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingBag size={16} className="mr-1" />
            Order Online
          </Link>
          <div className="flex items-center space-x-4 pt-2 justify-center">
            <Link href="https://www.instagram.com/woodburystationcafe/" target="_blank" aria-label="Instagram">
              <Instagram size={18} className="text-cafe-rose hover:text-cafe-lavender" />
            </Link>
            <Link href="https://www.facebook.com/woodburystation/" target="_blank" aria-label="Facebook">
              <Facebook size={18} className="text-cafe-rose hover:text-cafe-lavender" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
