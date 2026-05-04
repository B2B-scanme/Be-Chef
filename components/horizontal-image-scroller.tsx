'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Minus, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ScrollerImage {
  src: string;
  alt: string;
}

interface HorizontalImageScrollerProps {
  images: ScrollerImage[];
  className?: string;
  cardClassName?: string;
  sizes?: string;
  priorityFirstImage?: boolean;
}

export function HorizontalImageScroller({
  images,
  className,
  cardClassName,
  sizes = '(max-width: 640px) 78vw, 340px',
  priorityFirstImage = false,
}: HorizontalImageScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;
  const canZoomOut = zoomLevel > 1;
  const canZoomIn = zoomLevel < 3;

  const scrollByPage = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const step = Math.max(container.clientWidth * 0.8, 220);
    const offset = direction === 'right' ? step : -step;

    container.scrollBy({
      left: offset,
      behavior: 'smooth',
    });
  };

  const openPreview = (index: number) => {
    setSelectedIndex(index);
    setZoomLevel(1);
  };

  const closePreview = () => {
    setSelectedIndex(null);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel((current) => Math.min(3, Number((current + 0.25).toFixed(2))));
  };

  const zoomOut = () => {
    setZoomLevel((current) => Math.max(1, Number((current - 0.25).toFixed(2))));
  };

  useEffect(() => {
    if (selectedImage === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePreview();
        return;
      }

      if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        zoomIn();
        return;
      }

      if (event.key === '-') {
        event.preventDefault();
        zoomOut();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={cn('relative w-full', className)}>
      {images.length > 1 && (
        <button
          type="button"
          onClick={() => scrollByPage('left')}
          aria-label="Scroll images left"
          className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#8B0000] shadow-md ring-1 ring-[#e8e2d6] transition hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto px-10 pb-1"
      >
        {images.map((image, index) => (
          <button
            type="button"
            key={`${image.src}-${index}`}
            onClick={() => openPreview(index)}
            aria-label={`Open ${image.alt} in full screen`}
            className={cn(
              'relative h-52 w-[78%] min-w-[78%] snap-start overflow-hidden rounded-2xl bg-black/5 text-left shadow-sm ring-1 ring-[#e8e2d6] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B0000] focus-visible:ring-offset-2 sm:w-[340px] sm:min-w-[340px]',
              cardClassName
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes={sizes}
              priority={priorityFirstImage && index === 0}
            />
          </button>
        ))}
      </div>

      {images.length > 1 && (
        <button
          type="button"
          onClick={() => scrollByPage('right')}
          aria-label="Scroll images right"
          className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#8B0000] shadow-md ring-1 ring-[#e8e2d6] transition hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={closePreview}
        >
          <div
            className="relative flex h-[85vh] w-[92vw] max-w-6xl flex-col gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 text-white">
              <p className="truncate text-sm sm:text-base">{selectedImage.alt}</p>
              <button
                type="button"
                onClick={closePreview}
                aria-label="Close preview"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 self-end rounded-full bg-white/15 p-1">
              <button
                type="button"
                onClick={zoomOut}
                disabled={!canZoomOut}
                aria-label="Zoom out"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-14 text-center text-xs font-medium text-white sm:text-sm">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={zoomIn}
                disabled={!canZoomIn}
                aria-label="Zoom in"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-auto rounded-xl bg-black/30 p-3">
              <div className="mx-auto h-full w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1600}
                  height={1200}
                  sizes="92vw"
                  className="mx-auto h-auto w-full max-w-none rounded-lg object-contain"
                  style={{ width: `${zoomLevel * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
