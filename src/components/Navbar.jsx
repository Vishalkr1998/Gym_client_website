import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/classes' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? isDark 
            ? 'bg-gym-black/85 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5'
            : 'bg-white/85 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-black/5' 
          : isDark 
            ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 lg:py-6'
            : 'bg-gradient-to-b from-white/90 via-white/40 to-transparent py-5 lg:py-6'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 xl:px-20 mx-auto w-full max-w-[1800px]">
        {/* Logo */}
        <Link to="/" className="cursor-hover flex items-center shrink-0 z-50 hover:scale-105 transition-transform duration-300">
          <img 
            src="/logo.png" 
            alt="Ironforge Gym" 
            className="h-10 md:h-14 object-contain"
          />
        </Link>

        {/* Desktop Nav links - Glassmorphism Pill */}
        <nav className={`hidden lg:flex items-center gap-1.5 px-2 py-1.5 rounded-full transition-all duration-500 ${
          scrolled 
            ? isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/5' 
            : isDark ? 'bg-black/20 border border-white/5 backdrop-blur-sm' : 'bg-white/60 border border-black/5 backdrop-blur-sm shadow-sm'
        }`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `cursor-hover relative px-5 py-2 rounded-full text-[11px] xl:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                  isActive 
                    ? 'bg-gym-red text-white shadow-red-glow' 
                    : isDark 
                      ? 'text-gym-white/70 hover:text-white hover:bg-white/10'
                      : 'text-black/70 hover:text-black hover:bg-black/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-5 z-50 shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`cursor-hover relative w-12 h-6 rounded-full border flex items-center p-1 hover:border-gym-red hover:shadow-red-glow active:scale-95 transition-all duration-300 ${
              isDark ? 'border-gym-white/20 bg-gym-gray' : 'border-black/20 bg-black/10'
            }`}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-gym-red flex items-center justify-center shadow-sm"
              animate={{ x: isDark ? 0 : 22 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.span key="moon" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }}>
                    <HiMoon className="text-[9px] text-white" />
                  </motion.span>
                ) : (
                  <motion.span key="sun" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }}>
                    <HiSun className="text-[9px] text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </button>

          <Link 
            to="/pricing" 
            className="cursor-hover relative overflow-hidden group bg-gym-red text-white text-[11px] xl:text-xs font-bold uppercase tracking-widest px-7 py-3 rounded-full shadow-red-glow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(224,16,43,0.6)] active:scale-95"
          >
            <span className="relative z-10">Join Now</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden text-3xl cursor-hover active:scale-90 transition-transform duration-200 z-50 ${isDark ? 'text-gym-white' : 'text-black'}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'circOut' }}
            className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm border-l z-50 flex flex-col p-8 shadow-2xl ${
              isDark ? 'bg-gym-black border-white/5' : 'bg-[#f2f2f2] border-black/5'
            }`}
          >
            <div className="flex justify-between items-center mb-12">
              <img 
                src="/logo.png" 
                alt="Ironforge Gym" 
                className="h-10 object-contain" 
              />
              <button 
                onClick={() => setOpen(false)} 
                className={`text-3xl hover:text-gym-red transition-colors ${isDark ? 'text-gym-white/70' : 'text-black/70'}`}
                aria-label="Close menu"
              >
                <HiX />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-heading uppercase tracking-widest transition-colors ${
                      isActive 
                        ? 'text-gym-red' 
                        : isDark ? 'text-gym-white/80 hover:text-white' : 'text-black/80 hover:text-black'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className={`mt-12 flex items-center gap-4 cursor-hover group p-4 rounded-xl border ${
                isDark ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'
              }`}
            >
              <div className={`relative w-12 h-6 rounded-full border flex items-center p-1 ${isDark ? 'border-gym-white/20 bg-gym-gray' : 'border-black/20 bg-black/10'}`}>
                <motion.div
                  className="w-4 h-4 rounded-full bg-gym-red shadow-red-glow flex items-center justify-center"
                  animate={{ x: isDark ? 0 : 22 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  {isDark ? <HiMoon className="text-[9px] text-white" /> : <HiSun className="text-[9px] text-white" />}
                </motion.div>
              </div>
              <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                isDark ? 'text-gym-white/80 group-hover:text-white' : 'text-black/80 group-hover:text-black'
              }`}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>

            <Link to="/pricing" onClick={() => setOpen(false)} className="btn-primary mt-6 text-center py-4 text-sm tracking-widest shadow-red-glow">
              Join Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 backdrop-blur-sm z-40 lg:hidden ${isDark ? 'bg-black/80' : 'bg-white/60'}`}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  )
}
