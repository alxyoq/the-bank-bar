'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Generate array of image paths for the gallery using the new gallery image names
  const galleryImages = Array.from({ length: 96 }, (_, i) => ({
    id: i + 1,
    path: `/images/gallery/gallery-image-${i + 1}.jpg`,
    // Generate random aspect ratios for variety
    aspectRatio: [
      '1/1',   // square
      '3/4',   // portrait
      '4/3',   // landscape
      '9/16',  // tall portrait
      '16/9',  // wide landscape
      '3/2',   // standard landscape
      '2/3'    // standard portrait
    ][Math.floor(Math.random() * 7)]
  }));

  // Add animation to reveal images as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const galleryItems = document.querySelectorAll('.gallery-item');
    for (const item of galleryItems) {
      observer.observe(item);
    }

    return () => {
      for (const item of galleryItems) {
        observer.unobserve(item);
      }
    };
  }, []);

  // Open lightbox with specific image
  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  // Navigate to next image
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryImages.length]);

  // Navigate to previous image
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  }, [galleryImages.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <div ref={galleryRef} className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item opacity-0 transition-opacity duration-700 break-inside-avoid mb-4 transform hover:scale-[1.01] transition-transform duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer">
              <div style={{ position: 'relative', paddingBottom: getAspectRatioPadding(image.aspectRatio) }}>
                <Image
                  src={image.path}
                  alt={`Woodbury Station Cafe Gallery Image ${image.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && galleryImages.length > 0 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-cafe-rose transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-cafe-rose transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-cafe-rose transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          <div className="relative w-full max-w-6xl h-[80vh]">
            <Image
              src={galleryImages[currentImageIndex].path}
              alt={`Woodbury Station Cafe Gallery Image ${galleryImages[currentImageIndex].id}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}

function getAspectRatioPadding(aspectRatio: string): string {
  const [width, height] = aspectRatio.split('/').map(Number);
  return `${(height / width) * 100}%`;
}
