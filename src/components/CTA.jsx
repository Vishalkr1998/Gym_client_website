import { Link } from 'react-router-dom'
import { HiArrowRight, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

export default function CTA() {
  const { isDark } = useTheme()

  return (
    <section className="relative py-20 overflow-hidden bg-gym-black border-t border-gym-gray/50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: isDark 
              ? 'linear-gradient(to right, #0a0a0a, rgba(10,10,10,0.9), transparent)' 
              : 'linear-gradient(to right, #f2f2f2, rgba(242,242,242,0.9), transparent)'
          }}
        />
      </div>
      
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12" data-aos="fade-up">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl text-gym-white uppercase leading-none mb-4">
            Ready to start your <br />
            <span className="text-gym-red">fitness journey?</span>
          </h2>
          <p className="text-gym-white/70 text-sm md:text-base mb-8">
            Join IronForge today and take the first step towards a healthier, stronger and more confident you.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/pricing" className="btn-primary cursor-hover !py-3 !px-6 text-xs">
              Join Now <HiArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline cursor-hover !py-3 !px-6 text-xs">
              Get 3 Days Free Trial
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gym-red/30 flex items-center justify-center text-gym-red text-xl flex-shrink-0">
              <HiPhone />
            </div>
            <div>
              <p className="text-gym-white font-bold text-sm">+91 98765 43210</p>
              <p className="text-gym-white/50 text-xs">Call us anytime</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gym-red/30 flex items-center justify-center text-gym-red text-xl flex-shrink-0">
              <HiMail />
            </div>
            <div>
              <p className="text-gym-white font-bold text-sm">info@ironforge.com</p>
              <p className="text-gym-white/50 text-xs">Drop us a message</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gym-red/30 flex items-center justify-center text-gym-red text-xl flex-shrink-0">
              <HiLocationMarker />
            </div>
            <div>
              <p className="text-gym-white font-bold text-sm">Noida, Sector 62</p>
              <p className="text-gym-white/50 text-xs">Visit our facility</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
