'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Slide } from '@/app/art/catalog/data';

interface SlideshowProps {
  slides: Slide[]
}

export default function Slideshow({ slides }: SlideshowProps) {
  const [idx, setIdx] = useState(0)
  const { title, img, text } = slides[idx];
  const prev = () => setIdx((idx - 1 + slides.length) % slides.length);
  const next = () => setIdx((idx + 1) % slides.length);

  return (
    <div className="w-full max-h-[65vh] flex flex-col">
        
        <div className="flex-grow overflow-y-auto px-6 pt-6 space-y-6">
        {/* Image */}
        <div className="relative w-full h-[30vh] sm:h-[40vh]">
          <Image
            src={img}
            alt={title}
            fill
            className="object-contain rounded"
          />
        </div>

        {/* Title & Text */}
        <div className="space-y-4">
          <h3 className="text-4xl font-display">{title}</h3>
          <p className="prose mb-4">{text}</p>
        </div>
      </div>

      {/* Fixed‑at‑bottom controls */}
      <div className="border-t px-6 pt-4 flex justify-between items-center">
        <button onClick={prev} className="px-1 py-1 hover:underline hover:italic">
          ‹ prev
        </button>

        <span className="text-sm text-gray-600">
          {idx + 1} / {slides.length}
        </span>

        <button onClick={next} className="px-1 py-1 hover:underline hover:italic">
          next ›
        </button>
      </div>
    </div>
  );
}
