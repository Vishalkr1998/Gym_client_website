import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiCheck, HiX, HiShieldCheck, HiLightningBolt, HiArrowRight, HiChevronDown } from 'react-icons/hi'
import { FaDumbbell, FaFire, FaUserNinja, FaCrown } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const PLANS = [
  {
    name: 'Basic',
    desc: 'Perfect to get started',
    badge: null,
    icon: FaDumbbell,
    color: 'from-slate-800 to-slate-900',
    monthlyPrice: 999,
    yearlyPrice: 8999,
    features: [
      { text: 'Full gym floor access', included: true },
      { text: 'Standard equipment', included: true },
      { text: 'Locker & shower access', included: true },
      { text: '1 Free fitness consultation', included: true },
      { text: 'Group classes', included: false },
      { text: 'Personal trainer sessions', included: false },
      { text: 'Nutrition guidance', included: false },
      { text: 'Sauna & steam room', included: false },
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    desc: 'Most chosen by members',
    badge: 'Most Popular',
    icon: FaFire,
    color: 'from-red-900/60 to-gym-gray',
    monthlyPrice: 1499,
    yearlyPrice: 13499,
    features: [
      { text: 'Full gym floor access', included: true },
      { text: 'All equipment access', included: true },
      { text: 'Locker & shower access', included: true },
      { text: 'Unlimited group classes', included: true },
      { text: 'Sauna & steam room', included: true },
      { text: 'Monthly fitness assessment', included: true },
      { text: 'Personal trainer sessions', included: false },
      { text: 'Custom nutrition plan', included: false },
    ],
    popular: true,
    cta: 'Join Now',
  },
  {
    name: 'Premium',
    desc: 'For serious athletes',
    badge: null,
    icon: FaUserNinja,
    color: 'from-slate-800 to-slate-900',
    monthlyPrice: 2499,
    yearlyPrice: 22499,
    features: [
      { text: 'Full gym floor access', included: true },
      { text: 'All equipment access', included: true },
      { text: 'Locker & shower access', included: true },
      { text: 'Unlimited group classes', included: true },
      { text: 'Sauna & steam room', included: true },
      { text: '4 Personal training sessions', included: true },
      { text: 'Custom diet & nutrition plan', included: true },
      { text: 'Supplement guidance', included: true },
    ],
    popular: false,
    cta: 'Go Premium',
  },
  {
    name: 'Elite PT',
    desc: 'Complete transformation',
    badge: 'Best Value',
    icon: FaCrown,
    color: 'from-slate-800 to-slate-900',
    monthlyPrice: 4999,
    yearlyPrice: 44999,
    features: [
      { text: 'Everything in Premium', included: true },
      { text: 'Unlimited PT sessions', included: true },
      { text: 'Daily progress tracking', included: true },
      { text: 'Advanced nutrition support', included: true },
      { text: 'Body composition analysis', included: true },
      { text: 'Priority class booking', included: true },
      { text: 'Sports massage (2x/mo)', included: true },
      { text: 'Guest passes (2x/mo)', included: true },
    ],
    popular: false,
    cta: 'Go Elite',
  },
]

const FEATURES_COMPARISON = [
  { label: 'Gym Floor Access', basic: true, standard: true, premium: true, elite: true },
  { label: 'Group Classes', basic: false, standard: true, premium: true, elite: true },
  { label: 'Sauna & Steam', basic: false, standard: true, premium: true, elite: true },
  { label: 'Personal Trainer', basic: false, standard: false, premium: true, elite: true },
  { label: 'Custom Nutrition Plan', basic: false, standard: false, premium: true, elite: true },
  { label: 'Unlimited PT Sessions', basic: false, standard: false, premium: false, elite: true },
  { label: 'Guest Passes', basic: false, standard: false, premium: false, elite: true },
]

const FAQS = [
  { q: 'Can I freeze my membership?', a: 'Yes, you can pause your membership for up to 2 months per year for medical or travel reasons with no extra charge.' },
  { q: 'Is there a joining or setup fee?', a: 'No hidden costs. You only pay for the plan you choose. The price you see is the price you pay.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. You can upgrade to a higher tier at any time and simply pay the prorated difference.' },
  { q: 'What happens if I miss sessions?', a: 'Personal training sessions are valid for 30 days. You can reschedule with 24-hour notice at no extra cost.' },
  { q: 'Is there a trial available?', a: 'Yes! All new members get a 3-day free trial to experience the gym before committing to a plan.' },
  { q: 'Do you offer student discounts?', a: 'We offer 15% off on all plans for students with valid ID. Just show it at reception when you sign up.' },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border border-white/10 rounded-lg overflow-hidden transition-colors ${open ? 'border-gym-red/30' : 'hover:border-white/20'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-hover"
      >
        <span className="text-sm font-bold text-gym-white">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <HiChevronDown className={`text-xl flex-shrink-0 ${open ? 'text-gym-red' : 'text-gym-white/50'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-5 pb-5 text-xs text-gym-white/60 leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [showComparison, setShowComparison] = useState(false)

  return (
    <section id="pricing" className="section-padding bg-gym-black border-t border-gym-gray/50 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gym-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gym-red/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10" data-aos="fade-up">
          <span className="section-eyebrow">Membership Plans</span>
          <h2 className="section-title text-5xl md:text-6xl mb-4">CHOOSE YOUR PLAN</h2>
          <p className="text-gym-white/60 text-sm leading-relaxed">
            Flexible plans designed to match your goals. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Monthly / Yearly Toggle */}
        <div className="flex justify-center items-center gap-5 mb-14" data-aos="fade-up" data-aos-delay="100">
          <span className={`text-sm font-bold uppercase tracking-wider transition-colors ${!isYearly ? 'text-gym-white' : 'text-gym-white/30'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-[52px] h-7 rounded-full bg-gym-gray-light border border-white/10 cursor-hover"
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-1 left-1 w-5 h-5 rounded-full bg-gym-red shadow-red-glow"
              animate={{ x: isYearly ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold uppercase tracking-wider transition-colors ${isYearly ? 'text-gym-white' : 'text-gym-white/30'}`}>
              Yearly
            </span>
            <AnimatePresence>
              {isYearly && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/30"
                >
                  SAVE 25%
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                layout
                className={`relative rounded-2xl overflow-hidden flex flex-col cursor-hover group border transition-all duration-300 ${
                  plan.popular
                    ? 'border-gym-red shadow-[0_0_50px_rgba(224,16,43,0.2)] bg-gradient-to-b from-red-950/40 to-gym-dark lg:scale-[1.04] z-10'
                    : 'border-white/10 bg-gym-dark hover:border-white/25 hover:-translate-y-1'
                }`}
              >
                {/* Top accent bar */}
                {plan.popular && <div className="h-1 bg-red-gradient w-full" />}

                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${plan.popular ? 'bg-gym-red text-white' : 'bg-white/10 text-gym-white/70 border border-white/20'}`}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-6 lg:p-7 flex flex-col flex-1">
                  {/* Icon + name */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${plan.popular ? 'bg-gym-red shadow-red-glow' : 'bg-white/5 border border-white/10'}`}>
                    <Icon className={`text-xl ${plan.popular ? 'text-white' : 'text-gym-white/70'}`} />
                  </div>

                  <h3 className="font-heading text-2xl uppercase text-gym-white mb-0.5">{plan.name}</h3>
                  <p className="text-xs text-gym-white/50 mb-5">{plan.desc}</p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-5xl text-gym-white">
                            ₹{(isYearly ? plan.yearlyPrice : plan.monthlyPrice).toLocaleString()}
                          </span>
                        </div>
                        <span className="text-xs text-gym-white/40 uppercase tracking-wider">
                          per {isYearly ? 'year' : 'month'}
                          {isYearly && (
                            <span className="ml-2 text-green-400">
                              (₹{Math.round((plan.monthlyPrice * 12 - plan.yearlyPrice)).toLocaleString()} saved)
                            </span>
                          )}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className={`flex items-center gap-2.5 text-xs ${feat.included ? 'text-gym-white/80' : 'text-gym-white/20 line-through'}`}>
                        {feat.included ? (
                          <HiCheck className={`flex-shrink-0 text-sm ${plan.popular ? 'text-gym-red' : 'text-gym-white/50'}`} />
                        ) : (
                          <HiX className="flex-shrink-0 text-sm text-gym-white/20" />
                        )}
                        {feat.text}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`group/btn flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-xs px-5 py-3.5 rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gym-red text-white hover:bg-gym-red-dark shadow-red-glow hover:shadow-[0_0_25px_rgba(224,16,43,0.5)]'
                        : 'border border-white/15 text-gym-white hover:border-gym-red hover:text-gym-red bg-white/2'
                    }`}
                  >
                    {plan.cta}
                    <HiArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16" data-aos="fade-up">
          {[
            { icon: HiShieldCheck, text: 'No Hidden Fees' },
            { icon: HiLightningBolt, text: 'Instant Activation' },
            { icon: HiShieldCheck, text: 'Cancel Anytime' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-gym-white/50 text-xs uppercase tracking-wider">
              <Icon className="text-gym-red text-base" />
              {text}
            </div>
          ))}
        </div>

        {/* Plan Comparison Table */}
        <div className="mb-16" data-aos="fade-up">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="w-full flex items-center justify-center gap-2 py-4 border border-white/10 rounded-lg text-sm font-bold uppercase tracking-wider text-gym-white/60 hover:text-gym-white hover:border-white/30 transition-colors cursor-hover"
          >
            {showComparison ? 'Hide' : 'Compare All Plans'}
            <motion.div animate={{ rotate: showComparison ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <HiChevronDown />
            </motion.div>
          </button>

          <AnimatePresence>
            {showComparison && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="mt-6 border border-white/10 rounded-xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gym-dark border-b border-white/10">
                        <th className="text-left p-4 text-gym-white/50 text-xs uppercase tracking-wider font-bold">Feature</th>
                        {['Basic', 'Standard', 'Premium', 'Elite PT'].map((h) => (
                          <th key={h} className="p-4 text-center text-gym-white text-xs uppercase tracking-wider font-heading">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {FEATURES_COMPARISON.map((row, i) => (
                        <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-gym-black' : 'bg-gym-dark/50'}`}>
                          <td className="p-4 text-gym-white/70 text-xs">{row.label}</td>
                          {[row.basic, row.standard, row.premium, row.elite].map((val, j) => (
                            <td key={j} className="p-4 text-center">
                              {val ? (
                                <HiCheck className="mx-auto text-gym-red text-base" />
                              ) : (
                                <HiX className="mx-auto text-white/15 text-sm" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FAQ — Accordion */}
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h3 className="font-heading text-3xl uppercase text-gym-white mb-8 text-center">Common Questions</h3>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
