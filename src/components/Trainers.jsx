import { useState } from 'react'
import { HiArrowRight, HiStar, HiCheck } from 'react-icons/hi'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaDumbbell, FaUserGraduate, FaMedal } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const TRAINERS = [
  {
    name: 'Rahul Sharma',
    role: 'Strength & Powerlifting',
    exp: '8 Years',
    rating: 4.9,
    reviews: 142,
    clients: '200+',
    cert: 'NSCA Certified',
    tag: 'HEAD COACH',
    tagColor: 'bg-gym-red',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    bio: 'Rahul is an NSCA-certified strength coach with a passion for helping clients build real-world power. Former national powerlifting competitor, he brings elite-level coaching to every session.',
    specialties: ['Progressive Overload', 'Powerlifting Technique', 'Muscle Hypertrophy', 'Body Recomposition'],
    social: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'Priya Singh',
    role: 'Yoga & Mindfulness',
    exp: '5 Years',
    rating: 4.8,
    reviews: 98,
    clients: '150+',
    cert: 'RYT 500 Certified',
    tag: 'WELLNESS EXPERT',
    tagColor: 'bg-teal-600',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop',
    bio: 'Priya brings a holistic approach to fitness through yoga and mindfulness. Her sessions blend movement, breathwork and meditation to help you build balance from the inside out.',
    specialties: ['Vinyasa Yoga', 'Pranayama', 'Mobility & Flexibility', 'Stress Recovery'],
    social: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'Amit Verma',
    role: 'CrossFit & Conditioning',
    exp: '6 Years',
    rating: 4.7,
    reviews: 115,
    clients: '180+',
    cert: 'CF-L2 Certified',
    tag: 'CROSSFIT COACH',
    tagColor: 'bg-blue-700',
    img: 'https://images.unsplash.com/photo-1526506114642-999335a14c33?q=80&w=600&auto=format&fit=crop',
    bio: 'Amit is a CrossFit Level 2 trainer known for his high-energy coaching style. He specialises in functional fitness and metabolic conditioning that delivers results fast.',
    specialties: ['WOD Programming', 'Olympic Lifting', 'Metabolic Conditioning', 'Functional Fitness'],
    social: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'Neha Kapoor',
    role: 'HIIT & Weight Loss',
    exp: '4 Years',
    rating: 4.9,
    reviews: 89,
    clients: '130+',
    cert: 'ACE Certified',
    tag: 'TRANSFORMATION',
    tagColor: 'bg-pink-700',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
    bio: 'Neha has helped over 130 clients achieve dramatic transformations through her science-backed HIIT and nutrition protocols. She specialises in sustainable fat loss and body confidence.',
    specialties: ['HIIT Protocols', 'Fat Loss Strategy', 'Nutrition Coaching', 'Body Confidence'],
    social: { ig: '#', li: '#', tw: '#' },
  },
]

function StatChip({ icon: Icon, label, value, isDark }) {
  return (
    <div className={`flex flex-col items-center gap-1 rounded-xl p-3 border text-center transition-colors ${isDark ? 'bg-gym-black/50 border-white/5' : 'bg-gray-50 border-black/5 shadow-sm'}`}>
      <Icon className="text-gym-red text-lg" />
      <span className={`font-bold text-sm ${isDark ? 'text-gym-white' : 'text-black'}`}>{value}</span>
      <span className={`text-[9px] uppercase tracking-widest ${isDark ? 'text-gym-white/40' : 'text-black/40'}`}>{label}</span>
    </div>
  )
}

export default function Trainers() {
  const [active, setActive] = useState(0)
  const { isDark } = useTheme()
  const trainer = TRAINERS[active]

  return (
    <section id="trainers" className={`border-t section-padding transition-colors duration-500 ${isDark ? 'bg-gym-black border-gym-gray/50' : 'bg-[#f2f2f2] border-black/10'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12" data-aos="fade-up">
          <div>
            <span className={`text-sm md:text-base tracking-[0.2em] uppercase mb-4 ${isDark ? 'text-gym-white' : 'text-gym-red font-black'}`}>Meet The Team</span>
            <h2 className={`font-display text-5xl md:text-6xl uppercase leading-none mt-2 ${isDark ? 'text-gym-white' : 'text-black'}`}>EXPERT<br />TRAINERS</h2>
          </div>
          <Link
            to="/trainers"
            className={`inline-flex items-center gap-2 border text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-300 cursor-hover self-start md:self-auto mb-1 ${
              isDark ? 'border-white/15 text-gym-white hover:border-gym-red hover:text-gym-red' : 'border-black/20 text-black hover:border-gym-red hover:text-gym-red'
            }`}
          >
            View All Trainers <HiArrowRight />
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">

          {/* LEFT — Trainer Cards List */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {TRAINERS.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                data-aos="fade-right"
                data-aos-delay={i * 80}
                className={`flex-shrink-0 lg:flex-shrink flex items-center gap-4 p-3 rounded-xl border text-left transition-all duration-300 cursor-hover w-64 lg:w-auto ${
                  active === i
                    ? (isDark ? 'bg-gym-dark border-gym-red shadow-red-glow' : 'bg-white border-gym-red shadow-md')
                    : (isDark ? 'bg-gym-dark/50 border-white/5 hover:border-white/20' : 'bg-gray-100 border-black/5 hover:border-black/20')
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={t.img}
                    alt={t.name}
                    className={`w-14 h-14 rounded-lg object-cover transition-all duration-300 ${active === i ? 'grayscale-0' : 'grayscale-[60%]'}`}
                  />
                  {active === i && (
                    <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gym-red rounded-full border-2 flex items-center justify-center ${isDark ? 'border-gym-dark' : 'border-white'}`}>
                      <HiCheck className="text-white text-[8px]" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className={`font-heading text-base uppercase tracking-wider truncate ${active === i ? (isDark ? 'text-gym-white' : 'text-black') : (isDark ? 'text-gym-white/60' : 'text-black/60')}`}>{t.name}</p>
                  <p className={`text-[10px] uppercase tracking-widest truncate ${active === i ? 'text-gym-red' : (isDark ? 'text-gym-white/30' : 'text-black/40')}`}>{t.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, s) => (
                      <HiStar key={s} className={`text-[10px] ${s < Math.floor(t.rating) ? 'text-yellow-400' : (isDark ? 'text-white/20' : 'text-black/10')}`} />
                    ))}
                    <span className={`text-[9px] ml-1 ${active === i ? (isDark ? 'text-gym-white/60' : 'text-black/60') : (isDark ? 'text-gym-white/30' : 'text-black/40')}`}>{t.rating}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — Trainer Detail */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`rounded-2xl border overflow-hidden shadow-xl ${isDark ? 'bg-gym-dark border-white/5' : 'bg-white border-black/10'}`}
                data-aos="fade-left"
              >
                {/* Hero image */}
                <div className="relative h-60 md:h-72 overflow-hidden">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gym-dark via-gym-dark/30 to-transparent' : 'from-white via-white/40 to-transparent'}`} />

                  {/* Tag */}
                  <span className={`absolute top-4 left-4 ${trainer.tagColor} text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg`}>
                    {trainer.tag}
                  </span>

                  {/* Cert badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 shadow-lg">
                    <FaMedal className="text-yellow-400 text-xs" />
                    {trainer.cert}
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-5">
                    <h3 className={`font-heading text-3xl md:text-4xl uppercase leading-none drop-shadow-md ${isDark ? 'text-white' : 'text-black'}`}>{trainer.name}</h3>
                    <p className="text-gym-red text-[10px] uppercase tracking-widest font-bold drop-shadow-sm">{trainer.role}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <StatChip icon={FaDumbbell} label="Experience" value={trainer.exp} isDark={isDark} />
                    <StatChip icon={FaUserGraduate} label="Clients" value={trainer.clients} isDark={isDark} />
                    <StatChip icon={HiStar} label="Rating" value={`${trainer.rating} (${trainer.reviews})`} isDark={isDark} />
                  </div>

                  {/* Bio */}
                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gym-white/60' : 'text-black/70'}`}>{trainer.bio}</p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-gym-white/30' : 'text-black/40'}`}>Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((s) => (
                        <span key={s} className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${isDark ? 'text-gym-white/70 bg-white/5 border-white/10' : 'text-black/70 bg-black/5 border-black/10'}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-gym-red" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer — Social + Book CTA */}
                  <div className={`flex items-center justify-between pt-5 flex-wrap gap-4 border-t ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                    <div className="flex gap-2">
                      {[
                        { Icon: FaInstagram, href: trainer.social.ig },
                        { Icon: FaLinkedinIn, href: trainer.social.li },
                        { Icon: FaTwitter, href: trainer.social.tw },
                      ].map(({ Icon, href }, i) => (
                        <a
                          key={i}
                          href={href}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 cursor-hover ${
                            isDark 
                              ? 'bg-white/5 border-white/10 text-gym-white hover:bg-gym-red hover:border-gym-red' 
                              : 'bg-black/5 border-black/10 text-black hover:text-white hover:bg-gym-red hover:border-gym-red'
                          }`}
                        >
                          <Icon className="text-xs" />
                        </a>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="btn-primary !py-2.5 !px-5 !text-xs cursor-hover"
                    >
                      Book a Session <HiArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
