'use client';

import Hero from '@/components/ui/Hero';
import Layout from '@/components/layout/Layout';
import Menu from '@/components/ui/Menu';
import Events from '@/components/ui/Events';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function HomePage() {
  const lenisRef = useRef<Lenis | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.075, wheelMultiplier: 0.7 });
    ;(window as any).__lenis = lenis;
    lenisRef.current = lenis;
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const MIN_SCALE = 0.6;
    const MAX_SCALE = 0.85;
    const STOP_AT = 0.6;
    const MAX_PADDING = 48;

    let sectionTop = 0,
      sectionHeight = 0,
      scaleZone = 0;

    const measure = () => {
      if (!sectionRef.current) return;
      sectionTop = sectionRef.current.offsetTop;
      sectionHeight = sectionRef.current.offsetHeight;
      scaleZone = sectionHeight * STOP_AT;
    };

    const clamp = (v: number, min: number, max: number) =>
      Math.min(Math.max(v, min), max);

    const onScroll = () => {
      if (!bubbleRef.current) return;
      const progress = clamp((window.scrollY - sectionTop) / scaleZone, 0, 1);
      bubbleRef.current.style.transform = `translate(-50%,0) scale(${
        MIN_SCALE + (MAX_SCALE - MIN_SCALE) * progress
      })`;
      bubbleRef.current.style.padding = `${MAX_PADDING * (1 - progress)}px`;
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      measure();
      onScroll();
    });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <Layout>
      <Hero />

      {/* sticky video bubble */}
      <section
        ref={sectionRef}
        className="relative w-full h-[400vh] pt-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/city-fog.jpg')" }}
      >
        {/* add mobile padding to match the rest of your site */}
        <div className="relative h-full pb-24 px-8 sm:px-0">
          <div
            ref={bubbleRef}
            className="
              sticky left-1/2 -translate-x-1/2
              top-1/2 -translate-y-1/2 sm:top-32 sm:translate-y-0
              z-30 will-change-transform
              rounded-[3rem] overflow-hidden shadow-xl pointer-events-none
              w-full sm:w-[640px] h-[600px] max-h-[45vw]
              p-12 box-border
            "
          >
            <Image
              src="/gradient-bg.png"
              alt="Gradient bubble"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <video
                src="/food-vid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      </section>

      {/* menu and events anchors */}
      <section id="menu">
        <Menu />
      </section>
      <section id="events">
        <Events />
      </section>
    </Layout>
  );
}
