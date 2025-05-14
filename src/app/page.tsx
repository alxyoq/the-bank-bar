'use client';

import Hero   from '@/components/ui/Hero';
import Layout from '@/components/layout/Layout';
import Menu   from '@/components/ui/Menu';
import Events from '@/components/ui/Events';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function HomePage() {
  /* ───────── refs ───────── */
  const lenisRef   = useRef<Lenis | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const bubbleRef  = useRef<HTMLDivElement | null>(null);

  /* ───────── smooth-scroll (Lenis) ───────── */
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.075, wheelMultiplier: 0.7 });
    (window as any).__lenis = lenis;
    lenisRef.current = lenis;

    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  /* ───────── bubble scale / padding animation ───────── */
  useEffect(() => {
    if (!sectionRef.current || !bubbleRef.current) return;

    const MIN_SCALE   = 0.6;
    const MAX_SCALE   = 0.85;
    const STOP_AT     = 0.6;   // fraction of section height
    const MAX_PADDING = 48;    // px

    let sectionTop     = 0;
    let sectionHeight  = 0;
    let scaleZone      = 0;

    const measure = () => {
      sectionTop    = sectionRef.current!.offsetTop;
      sectionHeight = sectionRef.current!.offsetHeight;
      scaleZone     = sectionHeight * STOP_AT;
    };

    const clamp = (v: number, min: number, max: number) =>
      Math.min(Math.max(v, min), max);

    const onScroll = () => {
      const progress = clamp((window.scrollY - sectionTop) / scaleZone, 0, 1);
      const scale    = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * progress;

      bubbleRef.current!.style.transform = `scale(${scale})`;
      bubbleRef.current!.style.padding   = `${MAX_PADDING * (1 - progress)}px`;
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      measure();
      onScroll();
    });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ───────── page layout ───────── */
  return (
    <Layout>
      <Hero />

      {/* ───── food-vid section ───── */}
      <section
        ref={sectionRef}
        className="relative w-full h-[400vh] pt-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/city-fog.jpg')" }}
      >
        {/* wrapper centres bubble horizontally; bubble sits slightly lower */}
        <div className="relative h-full pb-24 flex justify-center">
          <div
            ref={bubbleRef}
            className="
              sticky
              top-[200px]          /* 48 px (top-12) + 10 px */
              sm:top-[138px]      /* 128 px (top-32) + 10 px */
              z-30                /* keeps bubble above overlay */
              w-[90%] sm:w-[640px] h-[600px] max-h-[45vh]
              mx-auto rounded-[3rem] overflow-hidden shadow-xl
              pointer-events-none will-change-transform origin-top
            "
          >
            <video
              src='/food-vid.mp4'
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* dim background only – stays beneath the bubble */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      </section>

      {/* ───── menu & events anchors ───── */}
      <section id="menu">
        <Menu />
      </section>
      <section id="events">
        <Events />
      </section>
    </Layout>
  );
}
