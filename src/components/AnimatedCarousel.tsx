'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

// images for bottom row on landing page
const images = [
    '/images/about/digi-cam.jpg',
    '/images/about/ny-shirt.png',
    '/images/about/denim-shorts.png',
    '/images/about/senna-helmet.png',
    '/images/about/black-top.png',
    '/images/about/white-blouse.png',
    '/images/about/george-helmet.png',
    '/images/about/oscar-helmet.png',
    '/images/about/tomato-shirt.png',
]

export function AnimatedCarousel() {
    const items = [...images, ...images, ...images]

    return (
        <div className="fixed bottom-5 md:bottom-8 lg:bottom-10 left-0 right-0 
                        h-[85px] md:h-[100px] lg:h-[120px] 
                        bg-linear-to-t from-white to-transparent overflow-hidden z-10">
            <motion.div
              className="flex items-center h-full py-2"
              style={{ gap: '2rem' }}
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                x: { repeat: Infinity, duration: 20, ease: 'linear', repeatType: 'loop'}
              }}
            >
                {items.map((src, i) => (
                    <div key={i} className="relative flex-shrink-0 h-full aspect-square">
                        <Image
                        src={src}
                        alt={`carousel-item-${i}`}
                        fill
                        className="object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}