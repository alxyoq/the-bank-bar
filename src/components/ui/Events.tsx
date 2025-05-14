'use client';

import { useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';

const eventImages = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  path: `/event-${i + 1}.jpg`,
  aspectRatio: ['1/1','3/4','4/3','9/16','16/9','3/2','2/3'][Math.floor(Math.random() * 7)]
}));

export default function Events() {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Shuffle once per page load
  const shuffledImages = useMemo(() => {
    return [...eventImages].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    if (!galleryRef.current) return;
    const items = Array.from(
      galleryRef.current.querySelectorAll<HTMLElement>('.event-item')
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('opacity-100');
          } else {
            el.classList.remove('opacity-100');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -25% 0px'
      }
    );

    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <section className="bg-[#0e172a] py-20 text-white">
      <div className="cafe-container" ref={galleryRef}>
        <h2 className="text-4xl font-quicksand font-semibold text-center text-[#a18559] mb-12">
          Events at The Bank Bar
        </h2>
        {/* default: 2 columns on mobile; then 2–3–4 as screen grows */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {shuffledImages.map((event) => (
            <div
              key={event.id}
              className="event-item opacity-0 transition-opacity duration-700 ease-in-out break-inside-avoid mb-4 transform hover:scale-[1.01]"
            >
              <div className="rounded-xl overflow-hidden shadow-md bg-[#1e2e49] border border-[#a18559]/30">
                <div
                  style={{
                    position: 'relative',
                    paddingBottom: getAspectRatioPadding(event.aspectRatio)
                  }}
                >
                  <Image
                    src={event.path}
                    alt={`Event ${event.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getAspectRatioPadding(aspectRatio: string): string {
  const [w, h] = aspectRatio.split('/').map(Number);
  return `${(h / w) * 100}%`;
}
