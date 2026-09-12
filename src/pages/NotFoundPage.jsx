import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'

import { useTheme } from '../context/ThemeContext'

export default function NotFoundPage() {
  const { isDark } = useTheme()

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gym-black pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1600&auto=format&fit=crop" 
          alt="404 Background" 
          className="w-full h-full object-cover grayscale opacity-30"
        />
        {/* Gradients */}
        <div 
          className="absolute inset-0" 
          style={{
            background: isDark
              ? 'linear-gradient(to top, rgba(10,10,10,1), rgba(10,10,10,0.8), rgba(10,10,10,0.4))'
              : 'linear-gradient(to top, rgba(242,242,242,1), rgba(242,242,242,0.8), rgba(242,242,242,0.4))'
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Massive 404 Text */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="font-display text-[10rem] md:text-[16rem] lg:text-[20rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-gym-white to-gym-white/5 drop-shadow-2xl"
        >
          404
        </motion.h1>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="-mt-4 md:-mt-10 relative z-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading uppercase tracking-wider text-gym-red mb-4 shadow-black drop-shadow-md">
            Looks like this page skipped leg day
          </h2>
          <p className="text-gym-white/70 text-base md:text-xl mb-10 max-w-xl mx-auto font-medium">
            The page you are looking for has been moved, deleted, or doesn't exist. Let's get you back to your workout.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary cursor-hover flex items-center gap-2 !px-8 !py-4 text-sm md:text-base">
              <HiHome className="text-xl" /> Back To Homepage
            </Link>
            <Link to="/classes" className="btn-outline cursor-hover !px-8 !py-4 text-sm md:text-base">
              Explore Programs
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating rings */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] border border-gym-red/10 rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] border border-gym-white/5 rounded-full pointer-events-none"
      />
    </section>
  )
}

