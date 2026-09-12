import { useState } from 'react'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const IMAGES = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop',
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = () => setActiveIndex(null)
  const prev = () => setActiveIndex((i) => (i === 0 ? IMAGES.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === IMAGES.length - 1 ? 0 : i + 1))

  return (
    <section id="gallery" className="section-padding bg-gym-dark">
      <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <span className="section-eyebrow">Inside Ironforge</span>
        <h2 className="section-title">Gallery</h2>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {IMAGES.map((src, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            data-aos="fade-up"
            data-aos-delay={(i % 4) * 80}
            className="cursor-hover block w-full break-inside-avoid rounded-xl overflow-hidden group relative"
          >
            <img
              src={src}
              alt={`Gym gallery photo ${i + 1}`}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gym-black/0 group-hover:bg-gym-black/30 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[90] bg-gym-black/95 flex items-center justify-center p-6"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 text-3xl text-gym-white cursor-hover"
            aria-label="Close lightbox"
          >
            <HiX />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 md:left-10 text-3xl text-gym-white cursor-hover"
            aria-label="Previous image"
          >
            <HiChevronLeft />
          </button>
          <img
            src={IMAGES[activeIndex]}
            alt="Gallery preview"
            className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 md:right-10 text-3xl text-gym-white cursor-hover"
            aria-label="Next image"
          >
            <HiChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}
