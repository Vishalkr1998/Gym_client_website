import { useState } from 'react'
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=400&auto=format&fit=crop',
]

const TRAINERS = [
  {
    name: 'Rahul Sharma',
    role: 'Strength Coach',
    exp: '8 Years Experience',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Priya Singh',
    role: 'Yoga Specialist',
    exp: '5 Years Experience',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Amit Verma',
    role: 'CrossFit Trainer',
    exp: '6 Years Experience',
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Neha Kapoor',
    role: 'HIIT Expert',
    exp: '4 Years Experience',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop',
  }
]

import { useTheme } from '../context/ThemeContext'

export default function GalleryTrainers() {
  const { isDark } = useTheme()

  return (
    <section className="bg-gym-dark border-t border-gym-gray/50 flex flex-col xl:flex-row">
      {/* GALLERY SECTION (Left Half) */}
      <div className="w-full xl:w-1/2 p-6 md:p-12 lg:p-20 border-b xl:border-b-0 xl:border-r border-gym-gray/50" data-aos="fade-right">
        <span className="section-eyebrow">Our Gallery</span>
        <h2 className="section-title text-4xl mb-4">SEE OUR WORLD</h2>
        <p className="text-gym-white/60 text-sm mb-10 max-w-md">
          Explore our modern facility, premium equipment and vibrant workout atmosphere.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {GALLERY_IMAGES.map((src, i) => (
            <div key={i} className="aspect-square rounded-md overflow-hidden group cursor-hover">
              <img 
                src={src} 
                alt="Gym Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <button className="inline-flex items-center gap-2 border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:border-gym-red hover:text-gym-red transition-colors cursor-hover">
          View More Photos <HiArrowRight />
        </button>
      </div>

      {/* TRAINERS SECTION (Right Half) */}
      <div className="w-full xl:w-1/2 p-6 md:p-12 lg:p-20 relative" data-aos="fade-left">
        <span className="section-eyebrow">Meet Our Trainers</span>
        <h2 className="section-title text-4xl mb-4">EXPERTS WHO PUSH YOU FURTHER</h2>
        <p className="text-gym-white/60 text-sm mb-10 max-w-md">
          Our certified trainers are here to guide, motivate and support you at every step.
        </p>

        <div className="relative group">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: '.trainer-prev',
              nextEl: '.trainer-next',
            }}
            className="pb-4"
          >
            {TRAINERS.map((trainer, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gym-black rounded-lg border border-white/5 overflow-hidden group/card cursor-hover h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={trainer.img} 
                      alt={trainer.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 grayscale-[20%]"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: isDark
                          ? 'linear-gradient(to top, rgba(10,10,10,1), transparent, transparent)'
                          : 'linear-gradient(to top, rgba(242,242,242,1), transparent, transparent)'
                      }}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-heading text-lg uppercase text-gym-white">{trainer.name}</h3>
                    <p className="text-[10px] text-gym-white/60 uppercase tracking-widest mb-1">{trainer.role}</p>
                    <p className="text-[9px] text-gym-red uppercase tracking-wider mb-4">{trainer.exp}</p>
                    <div className="mt-auto flex items-center justify-between text-xs border-t border-white/5 pt-3">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <HiStar /> <span className="text-gym-white">{trainer.rating}</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">f</div>
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">in</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="trainer-prev absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gym-white hover:bg-gym-red hover:border-gym-red transition-colors z-10 cursor-hover">
            <HiChevronLeft />
          </button>
          <button className="trainer-next absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gym-white hover:bg-gym-red hover:border-gym-red transition-colors z-10 cursor-hover">
            <HiChevronRight />
          </button>
        </div>

        <div className="mt-10">
          <button className="inline-flex items-center gap-2 border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:border-gym-red hover:text-gym-red transition-colors cursor-hover">
            View All Trainers <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

