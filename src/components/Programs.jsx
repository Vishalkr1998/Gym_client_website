import { useState } from 'react'
import { HiArrowRight, HiClock, HiFire, HiLightningBolt, HiX } from 'react-icons/hi'
import { FaDumbbell, FaRunning, FaYinYang, FaBolt, FaHeartbeat, FaUserNinja } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const PROGRAMS = [
  {
    id: 0,
    title: 'Strength Training',
    tag: 'MOST POPULAR',
    desc: 'Build raw power and muscle mass through progressive overload and guided coaching. Perfect for all fitness levels.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    icon: FaDumbbell,
    duration: '60 min',
    level: 'All Levels',
    calories: '400–600',
    color: 'from-red-900/80',
    features: ['Free weights & machines', 'Expert form coaching', 'Progressive programming', 'Body composition tracking'],
  },
  {
    id: 1,
    title: 'Weight Loss',
    tag: 'HIGH DEMAND',
    desc: 'Shed fat fast with our science-backed combination of cardio, HIIT and diet coaching designed for maximum calorie burn.',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    icon: FaRunning,
    duration: '45 min',
    level: 'Beginner–Intermediate',
    calories: '500–700',
    color: 'from-orange-900/80',
    features: ['Cardio circuits', 'Nutrition guidance', 'Weekly check-ins', 'Fat loss analytics'],
  },
  {
    id: 2,
    title: 'HIIT',
    tag: 'INTENSE',
    desc: 'High-intensity interval training that torches calories during and after your session. Maximum results, minimum time.',
    img: 'https://images.unsplash.com/photo-1599058945522-28d584b6f4ff?q=80&w=1200&auto=format&fit=crop',
    icon: FaBolt,
    duration: '30 min',
    level: 'Intermediate–Advanced',
    calories: '600–800',
    color: 'from-yellow-900/80',
    features: ['Interval protocols', 'Functional movements', 'Group energy', 'Burn tracker'],
  },
  {
    id: 3,
    title: 'Yoga & Flexibility',
    tag: 'MIND & BODY',
    desc: 'Restore balance, improve flexibility and sharpen mental focus through guided yoga and mobility flows.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
    icon: FaYinYang,
    duration: '60 min',
    level: 'All Levels',
    calories: '200–350',
    color: 'from-teal-900/80',
    features: ['Guided vinyasa flows', 'Breathing techniques', 'Mobility work', 'Stress relief'],
  },
  {
    id: 4,
    title: 'CrossFit',
    tag: 'TEAM SPIRIT',
    desc: 'Functional, varied workouts combining gymnastics, weightlifting and metabolic conditioning in a high-energy group setting.',
    img: 'https://images.unsplash.com/photo-1526506114642-999335a14c33?q=80&w=1200&auto=format&fit=crop',
    icon: FaUserNinja,
    duration: '60 min',
    level: 'Intermediate',
    calories: '500–750',
    color: 'from-blue-900/80',
    features: ['WOD programming', 'Olympic lifting', 'Community vibe', 'Skill development'],
  },
  {
    id: 5,
    title: 'Cardio',
    tag: 'ENDURANCE',
    desc: 'Boost your cardiovascular health and stamina with structured endurance training on premium equipment.',
    img: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop',
    icon: FaHeartbeat,
    duration: '40 min',
    level: 'All Levels',
    calories: '350–500',
    color: 'from-pink-900/80',
    features: ['Treadmills & bikes', 'Heart-rate zones', 'Endurance metrics', 'Interval runs'],
  },
]

export default function Programs() {
  const { isDark } = useTheme()
  const [active, setActive] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const current = PROGRAMS[active]

  return (
    <section id="programs" className="bg-gym-black border-t border-gym-gray/50 overflow-hidden">

      {/* Header */}
      <div className="section-padding pb-6 max-w-7xl mx-auto" data-aos="fade-up">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="section-eyebrow">Our Programs</span>
            <h2 className="section-title text-5xl md:text-6xl">FITNESS FOR<br />EVERY GOAL</h2>
          </div>
          <p className="text-gym-white/50 text-sm max-w-xs leading-relaxed mb-2">
            Click a program to explore what makes it unique.
          </p>
        </div>

        {/* Tab Selector — horizontally scrollable, no wrapping */}
        <div className="relative">
          <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {PROGRAMS.map((p, i) => {
              const Icon = p.icon
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-hover active:scale-90 whitespace-nowrap ${
                    active === i
                      ? 'bg-gym-red border-gym-red text-white shadow-red-glow'
                      : 'border-white/10 text-gym-white/50 hover:border-white/30 hover:text-gym-white bg-gym-dark'
                  }`}
                >
                  <Icon className={`text-sm flex-shrink-0 ${active === i ? 'text-white' : 'text-gym-red'}`} />
                  {p.title}
                </button>
              )
            })}
          </div>
          {/* Fade-out edge hint */}
          <div 
            className="absolute top-0 right-0 h-full w-12 pointer-events-none md:hidden" 
            style={{
              background: isDark
                ? 'linear-gradient(to left, #0a0a0a, transparent)'
                : 'linear-gradient(to left, #f2f2f2, transparent)'
            }}
          />
        </div>
      </div>

      {/* Detail Panel — fixed min-height so page doesn't jump */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid lg:grid-cols-2 gap-6 items-stretch"
          >
            {/* Image Panel */}
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-[420px] group">
              <img
                src={current.img}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${current.color} to-transparent`} />

              {/* Floating tag */}
              <div className="absolute top-4 left-4 bg-gym-red text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                {current.tag}
              </div>

              {/* Stat chips */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3 flex-wrap">
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
                  <HiClock className="text-gym-red" />
                  {current.duration}
                </div>
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
                  <HiLightningBolt className="text-gym-red" />
                  {current.level}
                </div>
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10">
                  <HiFire className="text-gym-red" />
                  {current.calories} kcal
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="bg-gym-dark border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gym-red/10 border border-gym-red/30 flex items-center justify-center">
                    {(() => { const Icon = current.icon; return <Icon className="text-gym-red text-xl" /> })()}
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl uppercase text-gym-white leading-none">{current.title}</h3>
                    <p className="text-gym-red text-[10px] uppercase tracking-widest font-bold">{current.tag}</p>
                  </div>
                </div>

                <p className="text-gym-white/60 text-sm leading-relaxed mb-8">{current.desc}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {current.features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-2.5 text-xs text-gym-white/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gym-red flex-shrink-0" />
                      {f}
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar (visual intensity indicator) */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gym-white/40">Intensity Level</span>
                    <span className="text-[10px] font-bold text-gym-red uppercase">{
                      active <= 1 ? 'High' : active === 2 ? 'Very High' : active === 3 ? 'Low' : 'High'
                    }</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-red-gradient rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${[75, 70, 95, 40, 80, 60][active]}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-3 flex-col sm:flex-row">
                <Link to="/contact" className="btn-primary flex-1 !py-3 !text-xs cursor-hover">
                  Enroll Now <HiArrowRight />
                </Link>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-1 text-center border border-white/15 text-gym-white text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-full hover:border-gym-red hover:text-gym-red transition-all duration-300 active:scale-95 cursor-hover"
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {PROGRAMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 cursor-hover active:scale-75 ${
                active === i ? 'w-8 h-2 bg-gym-red' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* PROGRAM DETAILS MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              onClick={() => setShowModal(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-gym-dark border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-gym-red hover:border-gym-red transition-colors z-20 cursor-hover active:scale-90"
              >
                <HiX className="text-xl" />
              </button>

              {/* Left: Image & Stats */}
              <div className="w-full md:w-2/5 h-48 md:h-auto relative flex-shrink-0">
                <img src={current.img} alt={current.title} className="w-full h-full object-cover grayscale-[20%]" />
                <div className={`absolute inset-0 bg-gradient-to-t ${current.color} to-transparent opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-transparent md:hidden" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-heading text-4xl text-white uppercase leading-none mb-4 drop-shadow-lg">{current.title}</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-wider drop-shadow-md">
                      <HiClock className="text-gym-red" /> {current.duration}
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-wider drop-shadow-md">
                      <HiLightningBolt className="text-gym-red" /> {current.level}
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-xs font-bold uppercase tracking-wider drop-shadow-md">
                      <HiFire className="text-gym-red" /> {current.calories} kcal
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Detailed Info */}
              <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto no-scrollbar">
                <div className="mb-8">
                  <span className="text-gym-red text-[10px] uppercase tracking-widest font-bold mb-2 block">Program Overview</span>
                  <p className="text-gym-white/80 text-sm leading-relaxed mb-6">
                    {current.desc} Take your fitness to the next level with our specialized {current.title.toLowerCase()} curriculum. Designed by industry experts, this program focuses on delivering maximum results in minimum time.
                  </p>
                  
                  <span className="text-gym-red text-[10px] uppercase tracking-widest font-bold mb-3 block">What You'll Learn & Do</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {current.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 bg-gym-black/50 p-3 rounded-lg border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gym-red mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-gym-white/70 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  <span className="text-gym-red text-[10px] uppercase tracking-widest font-bold mb-3 block">Weekly Schedule</span>
                  <div className="space-y-2 mb-8">
                    {['Monday, Wednesday, Friday — 06:00 AM', 'Tuesday, Thursday — 06:30 PM', 'Saturday (Weekend Warrior) — 08:00 AM'].map((time, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 text-xs text-gym-white/60">
                        <span>{time.split(' — ')[0]}</span>
                        <span className="text-gym-white font-bold">{time.split(' — ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="btn-primary w-full !py-4 cursor-hover block text-center" onClick={() => setShowModal(false)}>
                  Book Your Spot Now <HiArrowRight className="inline-block ml-2" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
