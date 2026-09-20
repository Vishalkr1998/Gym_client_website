import { useState } from 'react'
import { HiX, HiChevronLeft, HiChevronRight, HiArrowsExpand } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

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
  const { isDark } = useTheme()

  const close = () => setActiveIndex(null)
  const prev = () => setActiveIndex((i) => (i === 0 ? IMAGES.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === IMAGES.length - 1 ? 0 : i + 1))

  return (
    <section id="gallery" className={`py-20 transition-colors duration-300 ${isDark ? 'bg-gym-dark' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="section-eyebrow">Inside Ironforge</span>
          <h2 className={`section-title text-4xl md:text-5xl mt-2 ${isDark ? 'text-white' : 'text-black'}`}>
            Gallery
          </h2>
          <p className={`mt-4 text-sm md:text-base ${isDark ? 'text-gym-white/60' : 'text-black/60'}`}>
            Take a tour of our state-of-the-art facility.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {IMAGES.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 80}
              className={`cursor-hover block w-full break-inside-avoid rounded-xl overflow-hidden group relative shadow-md ${
                isDark ? 'shadow-black/50' : 'shadow-black/10'
              }`}
            >
              <img
                src={src}
                alt={`Gym gallery photo ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gym-red text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <HiArrowsExpand className="text-xl" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
            onClick={close}
          >
            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-gym-red rounded-full flex items-center justify-center text-2xl text-white transition-colors cursor-hover z-50"
              aria-label="Close lightbox"
            >
              <HiX />
            </button>
            
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-4 md:left-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-gym-red rounded-full flex items-center justify-center text-2xl md:text-3xl text-white transition-colors cursor-hover z-50"
              aria-label="Previous image"
            >
              <HiChevronLeft />
            </button>
            
            {/* Current Image */}
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={IMAGES[activeIndex]}
              alt="Gallery preview"
              className="max-h-[85vh] max-w-[90vw] md:max-w-[80vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-4 md:right-10 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-gym-red rounded-full flex items-center justify-center text-2xl md:text-3xl text-white transition-colors cursor-hover z-50"
              aria-label="Next image"
            >
              <HiChevronRight />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium tracking-widest">
              {activeIndex + 1} / {IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
