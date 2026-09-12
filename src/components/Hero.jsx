import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { HiArrowRight } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const STATS = [
  { value: 20, suffix: '+', label: 'Professional Trainers' },
  { value: 5000, suffix: '+', label: 'Members' },
  { value: 15, suffix: '+', label: 'Years Experience' },
]

export default function Hero() {
  const { isDark } = useTheme()

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center pt-20 pb-12">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-a-man-lifting-weights-in-a-gym-2632/1080p.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Dynamic Overlays for Light/Dark Mode */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: isDark ? 'rgba(10,10,10,0.7)' : 'rgba(242,242,242,0.75)' }} 
      />
      <div 
        className="absolute inset-0"
        style={{
          background: isDark 
            ? 'linear-gradient(to top, rgba(10,10,10,1), transparent, rgba(10,10,10,0.4))'
            : 'linear-gradient(to top, rgba(242,242,242,1), transparent, rgba(242,242,242,0.4))'
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-24 md:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-sm md:text-base tracking-[0.2em] uppercase mb-4 ${isDark ? 'text-gym-white' : 'text-gym-red font-black drop-shadow-sm'}`}
        >
          Ironforge Gym &amp; Fitness
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`font-display text-[15vw] leading-[0.85] md:text-[9rem] uppercase ${isDark ? 'text-gym-white' : 'text-black drop-shadow-sm'}`}
        >
          No Pain<br /> <span className="text-gym-red">No Gain</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-6 text-lg md:text-2xl font-heading tracking-wide uppercase max-w-xl ${isDark ? 'text-gym-white/80' : 'text-black/80'}`}
        >
          Transform Your Body. Transform Your Life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/pricing" className="btn-primary cursor-hover">
            Join Now <HiArrowRight />
          </Link>
          <Link 
            to="/pricing" 
            className={`btn-outline cursor-hover ${isDark ? '' : 'border-black/30 text-black hover:border-gym-red hover:text-gym-red hover:bg-gym-red/5'}`}
            style={!isDark ? { borderColor: 'rgba(0,0,0,0.3)', color: '#000' } : {}}
          >
            Explore Plans
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className={`mt-16 grid grid-cols-3 max-w-xl gap-6 border-t pt-8 ${isDark ? 'border-white/10' : 'border-black/10'}`}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className={`font-display text-3xl md:text-5xl ${isDark ? 'text-gym-white' : 'text-black'}`}>
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </p>
              <p className={`text-xs md:text-sm uppercase tracking-wider mt-1 ${isDark ? 'text-gym-white/60' : 'text-black/70'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-6 h-10 border-2 rounded-full flex items-start justify-center p-1 ${isDark ? 'border-gym-white/40' : 'border-black/40'}`}
      >
        <div className="w-1 h-2 bg-gym-red rounded-full" />
      </motion.div>
    </section>
  )
}
