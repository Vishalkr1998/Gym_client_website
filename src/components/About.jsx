import { 
  FaDumbbell, 
  FaUserTie, 
  FaUserNinja, 
  FaMoneyCheckAlt, 
  FaHandSparkles, 
  FaAppleAlt 
} from 'react-icons/fa'

const FEATURES = [
  { icon: FaDumbbell, title: 'Modern Equipment', desc: 'State-of-the-art machines and workout zones' },
  { icon: FaUserTie, title: 'Certified Trainers', desc: 'Experienced & professional fitness experts' },
  { icon: FaUserNinja, title: 'Personal Training', desc: 'One-on-one guidance for faster results' },
  { icon: FaMoneyCheckAlt, title: 'Flexible Membership', desc: 'Plans for every budget and goal' },
  { icon: FaHandSparkles, title: 'Clean & Hygienic', desc: 'Safe, clean and comfortable environment' },
  { icon: FaAppleAlt, title: 'Diet & Nutrition Support', desc: 'Customized diet plans for better results' },
]

import { useTheme } from '../context/ThemeContext'

export default function About() {
  const { isDark } = useTheme()

  return (
    <section id="about" className="section-padding bg-gym-black border-t border-gym-gray/50">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        
        <div data-aos="fade-right">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title mb-6 text-[3rem] md:text-[4.5rem]">
            YOUR FITNESS.<br/>OUR PRIORITY.
          </h2>
          <p className="text-gym-white/70 leading-relaxed mb-10 max-w-lg">
            At IronForge, we believe fitness is not just about looks,
            it's about a better, healthier and stronger you. Our state-of-the-art facility, expert trainers and supportive community
            help you achieve your goals, no matter where you are
            in your fitness journey.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
            {FEATURES.map((feat) => (
              <div key={feat.title} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full border border-gym-red/30 flex items-center justify-center text-gym-red text-xl">
                  <feat.icon />
                </div>
                <div>
                  <h3 className="text-gym-white font-bold text-sm tracking-wide mb-1">{feat.title}</h3>
                  <p className="text-gym-white/50 text-xs leading-snug">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-left" className="relative h-full min-h-[500px]">
          <div className="relative rounded-lg overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop" 
              alt="Gym Interior" 
              className="w-full h-full object-cover grayscale-[20%] contrast-125"
              loading="lazy"
            />
            {/* Adding the Stronger Than Yesterday text overlay to simulate the image */}
            <div className="absolute top-1/4 right-8 flex flex-col items-end opacity-80 mix-blend-overlay">
              <span className="font-display text-5xl md:text-7xl text-gym-white uppercase">Stronger</span>
              <span className="font-display text-5xl md:text-7xl text-gym-white uppercase">Than</span>
              <span className="font-display text-5xl md:text-7xl text-gym-red uppercase">Yesterday</span>
            </div>
            <div 
              className="absolute inset-0" 
              style={{
                background: isDark
                  ? 'linear-gradient(to right, rgba(10,10,10,0.8), transparent, transparent)'
                  : 'linear-gradient(to right, rgba(242,242,242,0.8), transparent, transparent)'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
