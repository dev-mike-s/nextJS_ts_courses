//root/components/Slider.tsx

/* CLIENT COMPONENT
 * Nutzt natives CSS-Snap für die Performance statt z.B. schwerer Bootstrap-JS-Libs (Carousel).
 * Bilder werden über das 'fill' Property responsiv optimiert.
 * Nutzt snap-mandatory und scroll-smooth für native Animationen.
 * useEffect-Methode wird nach dem Rendern ausgeführt.
 */

'use client';

import Image from 'next/image';
import {useState,useEffect,useRef} from 'react'

const slides = [
    { src: '/bilder/essen/burger.jpg', alt: 'Saftiger Burger' },
    { src: '/bilder/essen/pizza.jpg', alt: 'Steinofen Pizza' },
    { src: '/bilder/essen/burrito.jpg', alt: 'Mexikanischer Burrito' }
];

export default function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0);

    // REFERENCE: Ein direkter Zugriff auf das HTML-Element im Browser-DOM
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev+1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [] );

    // Animation: Scrollt den Container automatisch zum neuen Index
    useEffect(() => {
        if (scrollContainerRef.current) {
            const { offsetWidth } = scrollContainerRef.current;
            scrollContainerRef.current.scrollTo({
                left: offsetWidth * currentIndex,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

        return (
            <div className="relative w-full rounded-2xl shadow-2xl my-8 overflow-hidden bg-gray-100 min-h-[300px]"
            >
                <div
                    ref={scrollContainerRef}
                    className="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth"
                    style={{ display: 'flex' }}
                >
                    { slides.map((slide, index) => (
                        <div
                            key={slide.src}
                            className="snap-center shrink-0 w-full aspect-[21/9] relative min-h-[300px]"
                            style={{ flexShrink: 0, width: '100%' }}
                        >
                          <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2"
                >
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-3 w-3 rounded-full transition-all ${
                                i === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
      )
}

// className="object-cover transition-transform duration-700 hover:scale-105"
