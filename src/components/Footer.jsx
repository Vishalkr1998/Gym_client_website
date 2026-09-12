import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaDumbbell } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/classes' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const PROGRAM_LINKS = [
  'Strength Training',
  'Weight Loss',
  'HIIT',
  'Yoga',
  'CrossFit',
  'Cardio',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { isDark } = useTheme()

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className={`relative border-t pt-16 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-gym-black border-gym-gray/50' : 'bg-white border-black/10'
    }`}>
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gym-red to-transparent opacity-50" />

      {/* Decorative Background Elements */}
      <div className={`absolute top-0 right-0 w-64 h-64 bg-gym-red rounded-full blur-[150px] opacity-10 pointer-events-none transition-opacity ${isDark ? 'block' : 'hidden'}`} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link to="/" className="mb-6 cursor-hover w-max group">
              <img src="/logo.png" alt="Ironforge Gym" className="h-14 md:h-16 object-contain group-hover:scale-105 transition-transform" />
            </Link>
            <p className={`text-sm leading-relaxed max-w-xs mb-8 transition-colors ${
              isDark ? 'text-gym-white/60' : 'text-black/60'
            }`}>
              Transform your body. Transform your life. Join the Ironforge community and unlock your true potential.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="Social media link"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-hover hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-white/5 text-gym-white hover:bg-gym-red hover:shadow-red-glow' 
                      : 'bg-black/5 text-black hover:bg-gym-red hover:text-white hover:shadow-lg'
                  }`}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-heading text-xl uppercase tracking-wide mb-6 flex items-center gap-2 ${
              isDark ? 'text-gym-white' : 'text-black'
            }`}>
              <FaDumbbell className="text-gym-red text-sm" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={`text-sm flex items-center gap-2 transition-all cursor-hover group ${
                    isDark ? 'text-gym-white/60 hover:text-gym-red' : 'text-black/60 hover:text-gym-red'
                  }`}>
                    <HiArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gym-red" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className={`font-heading text-xl uppercase tracking-wide mb-6 flex items-center gap-2 ${
              isDark ? 'text-gym-white' : 'text-black'
            }`}>
              <FaDumbbell className="text-gym-red text-sm" />
              Programs
            </h4>
            <ul className="space-y-3">
              {PROGRAM_LINKS.map((program) => (
                <li key={program}>
                  <Link to="/classes" className={`text-sm flex items-center gap-2 transition-all cursor-hover group ${
                    isDark ? 'text-gym-white/60 hover:text-gym-red' : 'text-black/60 hover:text-gym-red'
                  }`}>
                    <HiArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gym-red" />
                    <span className="group-hover:translate-x-1 transition-transform">{program}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={`font-heading text-xl uppercase tracking-wide mb-6 flex items-center gap-2 ${
              isDark ? 'text-gym-white' : 'text-black'
            }`}>
              Join Newsletter
            </h4>
            <p className={`text-sm mb-6 max-w-xs transition-colors ${
              isDark ? 'text-gym-white/60' : 'text-black/60'
            }`}>
              Subscribe to get the latest fitness tips, workout guides, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 relative">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={`w-full cursor-hover rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gym-red transition-all ${
                    isDark 
                      ? 'bg-gym-dark border border-white/10 text-gym-white placeholder-gym-white/40' 
                      : 'bg-black/5 border border-black/10 text-black placeholder-black/40'
                  }`}
                />
                <button 
                  type="submit" 
                  className="absolute right-1 w-10 h-10 bg-gym-red rounded-full flex items-center justify-center text-white cursor-hover hover:bg-red-600 transition-colors active:scale-95"
                  aria-label="Subscribe"
                >
                  <HiArrowRight />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-green-500 font-medium absolute -bottom-6">
                  Thanks for subscribing! 🎉
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors ${
          isDark ? 'border-white/10' : 'border-black/10'
        }`}>
          <p className={`text-xs ${isDark ? 'text-gym-white/50' : 'text-black/50'}`}>
            © {new Date().getFullYear()} IronForge Gym & Fitness. All rights reserved.
          </p>
          <div className={`flex gap-6 text-xs ${isDark ? 'text-gym-white/50' : 'text-black/50'}`}>
            <a href="#" className="hover:text-gym-red transition-colors cursor-hover">Privacy Policy</a>
            <a href="#" className="hover:text-gym-red transition-colors cursor-hover">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
