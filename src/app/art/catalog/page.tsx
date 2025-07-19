'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/Modal';
import BackButton from '@/components/BackButton';
import Slideshow from '@/components/Slideshow';
import type { Slide } from './data';
import { paintingSlides, posterSlides, logoSlides, 
         sketchSlides, cellpressSlides, } from './data';


const allSlides: Record<string, Slide[]> = {
  paintings: paintingSlides,
  posters: posterSlides,
  "logos & stickers": logoSlides,
  sketches: sketchSlides,
  "Cell Press designs": cellpressSlides,
};

interface Project {
  key: keyof typeof allSlides;
  title: string;
  coverImg: string;
}

const projects: Project[] = [
  {
    key: "paintings",
    title: "paintings",
    coverImg: "/images/art/catalog/painting-cover.jpg",
  },
  {
    key: "posters",
    title: "posters",
    coverImg: "/images/art/catalog/poster-cover.jpg",
  },
  {
    key: "logos & stickers",
    title: "logos & stickers",
    coverImg: "/images/art/catalog/logo-cover.jpg",
  },
  {
    key: "sketches",
    title: "sketches",
    coverImg: "/images/art/catalog/sketch-cover.webp",
  },
  {
    key: "Cell Press designs",
    title: "Cell Press designs",
    coverImg: "/images/art/catalog/cellpress-cover.webp",
  },
];

export default function CatalogPage() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <main className="max-w-7xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="flex justify-between">
        <div><h1 className="text-8xl mb-8">Featured Work</h1></div>
        <div className="flex justify-end"><BackButton /></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((p) => (
          <div key={p.title} onClick={() => setActive(p)}
            className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Cover Image */}
            <div className="relative w-full h-48">
              <Image
                src={p.coverImg}
                alt={p.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            {/* Caption */}
            <div className="p-4 flex items-center space-x-2">
              <p className="text-md italic">{p.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal overlay */}
      {active && (
        <Modal onClose={() => setActive(null)}>
          <h2 className="text-5xl font-display pl-4 pb-3 border-b">{active.title}</h2>

          {/* slide show */}
          <Slideshow slides={allSlides[active.title]} />
          
        </Modal>
      )}
    </main>
  );
}
