import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const TRANSFORMATIONS = [
  {
    name: 'Vikram S.',
    before: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop', 
    after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop', 
    stats: 'Lost 18 kg | 6 Months',
    desc: 'Personal Training + Nutrition',
  },
  {
    name: 'Anjali M.',
    before: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop', 
    after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop', 
    stats: 'Lost 12 kg | 4 Months',
    desc: 'CrossFit + Diet Plan',
  },
]

export default function Transformations() {
  return (
    <section className="section-padding bg-gym-black border-t border-gym-gray/50">
      <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <span className="section-eyebrow">Real Transformation</span>
        <h2 className="section-title">Before & After</h2>
        <p className="text-gym-white/60 mt-4 text-sm max-w-lg mx-auto">
          It's not just a gym, it's a lifestyle. See the real results our members have achieved.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {TRANSFORMATIONS.map((t, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex flex-col items-center">
            <div className="flex gap-2 w-full mb-4">
              <div className="relative w-1/2 rounded-lg overflow-hidden group">
                <img src={t.before} alt="Before" className="w-full h-64 md:h-80 object-cover grayscale opacity-80" />
                <span className="absolute bottom-2 left-2 bg-gym-black/70 px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded">Before</span>
              </div>
              <div className="relative w-1/2 rounded-lg overflow-hidden group">
                <img src={t.after} alt="After" className="w-full h-64 md:h-80 object-cover" />
                <span className="absolute bottom-2 left-2 bg-gym-black/70 px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded">After</span>
              </div>
            </div>
            <h3 className="font-heading text-xl uppercase tracking-wide text-gym-white mb-1">{t.stats}</h3>
            <p className="text-xs text-gym-white/60 uppercase tracking-wider">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center" data-aos="fade-up">
        <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:border-gym-red hover:text-gym-red transition-colors">
          Start Your Transformation <HiArrowRight />
        </Link>
      </div>
    </section>
  )
}

