import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'

const REVIEWS = [
  {
    name: 'Karan Malhotra',
    text: 'Ironforge completely changed how I train. Lost 12kg in 4 months with the personal training team.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Neha Verma',
    text: 'The trainers actually care about form and progress, not just pushing you through a workout.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Aditya Rao',
    text: 'Best equipment I have used in the city. The CrossFit classes are intense but so rewarding.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Simran Kaur',
    text: 'Flexible plans, clean facility, and a genuinely motivating community. Highly recommend Ironforge.',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gym-black">
      <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <span className="section-eyebrow">Real Stories</span>
        <h2 className="section-title">What Our Members Say</h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {REVIEWS.map((review) => (
          <SwiperSlide key={review.name}>
            <div className="glass rounded-2xl p-8 h-full flex flex-col">
              <div className="flex gap-1 text-gym-red mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gym-white/80 text-sm leading-relaxed mb-6 flex-1">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={review.img}
                  alt={review.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="font-heading text-lg uppercase text-gym-white tracking-wide">{review.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
