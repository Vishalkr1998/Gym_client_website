import { useState } from 'react'
import { motion } from 'framer-motion'
import { GiWeightScale } from 'react-icons/gi'
import { HiOutlineInformationCircle } from 'react-icons/hi'

export default function BMI() {
  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(70)

  // Parse values safely
  const h = parseFloat(height) || 175
  const w = parseFloat(weight) || 70

  // BMI Math
  const bmi = w / Math.pow(h / 100, 2)
  const bmiFormatted = bmi.toFixed(1)
  
  let category, color, text
  if (bmi < 18.5) {
    category = 'Underweight'
    color = '#3b82f6' // blue
    text = 'You are currently underweight. A tailored nutrition plan can help you build healthy mass.'
  } else if (bmi < 25) {
    category = 'Healthy Weight'
    color = '#22c55e' // green
    text = 'Great job! You are in a healthy weight range. Keep up the good work and maintain your routine.'
  } else if (bmi < 30) {
    category = 'Overweight'
    color = '#eab308' // yellow
    text = 'You are slightly overweight. A mix of cardio and strength training can help you achieve your goals.'
  } else {
    category = 'Obese'
    color = '#ef4444' // red
    text = 'Your BMI indicates obesity. Please consult our trainers for a personalized, safe fitness plan.'
  }

  // Calculate position for the visualizer marker (scale 15 to 40)
  const markerPos = Math.min(Math.max(((bmi - 15) / 25) * 100, 0), 100)

  return (
    <section className="bg-gym-black py-24 border-t border-gym-gray/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
           <span className="section-eyebrow">Know Your Body</span>
           <h2 className="section-title text-4xl md:text-5xl mt-2 mb-4">BMI Calculator</h2>
           <p className="text-gym-white/60 max-w-2xl mx-auto">
             Slide the controls to instantly see your Body Mass Index (BMI).
           </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Sliders & Controls */}
          <div data-aos="fade-right" className="bg-gym-dark border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gym-red/5 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-150" />
            
            <h3 className="font-heading text-2xl text-gym-white mb-10 uppercase tracking-wide flex items-center gap-3">
              <GiWeightScale className="text-gym-red text-3xl" /> Enter Your Stats
            </h3>

            {/* Height Input */}
            <div className="mb-12 relative z-10">
              <div className="flex justify-between items-end mb-5">
                <label className="text-sm font-bold uppercase tracking-wider text-gym-white/60">Height</label>
                <div className="flex items-end gap-1">
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-24 bg-transparent text-right font-display text-4xl text-gym-white focus:outline-none border-b-2 border-white/10 focus:border-gym-red transition-colors pb-1 cursor-hover"
                  />
                  <span className="text-gym-white/40 text-sm pb-2 font-bold">cm</span>
                </div>
              </div>
              <input 
                type="range" min="100" max="250" 
                value={height} onChange={(e) => setHeight(e.target.value)}
                className="w-full h-2 bg-gym-black rounded-lg cursor-pointer cursor-hover"
                style={{ accentColor: '#E0102B' }}
              />
            </div>

            {/* Weight Input */}
            <div className="mb-12 relative z-10">
              <div className="flex justify-between items-end mb-5">
                <label className="text-sm font-bold uppercase tracking-wider text-gym-white/60">Weight</label>
                <div className="flex items-end gap-1">
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-24 bg-transparent text-right font-display text-4xl text-gym-white focus:outline-none border-b-2 border-white/10 focus:border-gym-red transition-colors pb-1 cursor-hover"
                  />
                  <span className="text-gym-white/40 text-sm pb-2 font-bold">kg</span>
                </div>
              </div>
              <input 
                type="range" min="30" max="200" 
                value={weight} onChange={(e) => setWeight(e.target.value)}
                className="w-full h-2 bg-gym-black rounded-lg cursor-pointer cursor-hover"
                style={{ accentColor: '#E0102B' }}
              />
            </div>
            
            <div className="bg-gym-black/50 border border-white/5 rounded-xl p-5 flex gap-4 items-start relative z-10">
              <HiOutlineInformationCircle className="text-gym-red text-2xl flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gym-white/60 leading-relaxed font-medium">
                BMI is a useful screening tool but does not diagnose body fatness or health. Muscular athletes might have a high BMI without having high body fat.
              </p>
            </div>
          </div>

          {/* RIGHT: Live Result & Visualizer */}
          <div data-aos="fade-left" className="flex flex-col justify-center items-center py-10 lg:py-0">
            
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-gym-white/50 mb-4">Live Result</p>
              
              <div className="flex justify-center items-center mb-6 h-32">
                <motion.div
                  key={bmiFormatted}
                  initial={{ scale: 0.8, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="font-display text-[7rem] md:text-[9rem] text-transparent bg-clip-text leading-none"
                  style={{ backgroundImage: `linear-gradient(to right, #ffffff, ${color})` }}
                >
                  {bmiFormatted}
                </motion.div>
              </div>
              
              <motion.div 
                animate={{ backgroundColor: `${color}15`, color: color, borderColor: `${color}40` }}
                className="inline-block px-8 py-3 rounded-full border text-sm font-bold uppercase tracking-widest transition-colors duration-500 shadow-xl"
              >
                {category}
              </motion.div>
            </div>

            {/* Interactive Scale Visualizer */}
            <div className="relative max-w-md mx-auto w-full px-4">
              {/* The Color Bar */}
              <div className="h-4 w-full rounded-full flex overflow-hidden relative z-0 shadow-inner bg-gym-black border border-white/5">
                 <div className="h-full bg-blue-500" style={{ width: '14%' }} />
                 <div className="h-full bg-green-500" style={{ width: '26%' }} />
                 <div className="h-full bg-yellow-500" style={{ width: '20%' }} />
                 <div className="h-full bg-red-500" style={{ width: '40%' }} />
              </div>
              
              {/* The Marker */}
              <motion.div
                  animate={{ left: `${markerPos}%` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="absolute top-[-8px] bottom-[-8px] w-[3px] bg-gym-white rounded-full -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(255,255,255,1)]"
              >
                 <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gym-white border-[3px] border-gym-black rounded-full shadow-lg" />
              </motion.div>

              {/* Scale Labels */}
              <div className="relative mt-4 h-6 text-[10px] font-bold text-gym-white/40">
                  <span className="absolute left-0">15</span>
                  <span className="absolute left-[14%] -translate-x-1/2">18.5</span>
                  <span className="absolute left-[40%] -translate-x-1/2">25</span>
                  <span className="absolute left-[60%] -translate-x-1/2">30</span>
                  <span className="absolute right-0">40+</span>
              </div>
            </div>

            <p className="text-center text-gym-white/60 text-sm mt-10 max-w-sm mx-auto leading-relaxed">
              {text}
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}
