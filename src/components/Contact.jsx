import { useState } from 'react'
import { HiLocationMarker, HiPhone, HiMail, HiCheckCircle } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const initialForm = { name: '', email: '', phone: '', message: '', interest: '' }

const INTERESTS = [
  'Membership',
  'Personal Training',
  'Group Classes',
  'Other',
]

// Add your real email here where you want to receive the gym inquiries!
const RECEIVER_EMAIL = 'vishalkumar199874@gmail.com'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) e.phone = 'Invalid phone'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    
    if (!Object.keys(errs).length) {
      setIsSending(true)
      
      try {
        await fetch(`https://formsubmit.co/ajax/${RECEIVER_EMAIL}`, {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              "Athlete Name": form.name,
              "Phone Number": form.phone,
              "Email Address": form.email,
              "Interested In": form.interest || 'Not Specified',
              "Message": form.message,
              _subject: `New Inquiry from ${form.name} | Ironforge Gym`,
              _autoresponse: `Hi ${form.name},\n\nThank you for reaching out to Ironforge Gym!\n\nWe have received your query regarding ${form.interest || 'our services'}. Our expert team will review your message and contact you as soon as possible with all the information you need.\n\nKeep pushing, NO PAIN NO GAIN!\n\nBest Regards,\nTeam Ironforge\n📞 +91 98765 43210\n📍 Connaught Place, New Delhi`,
              _template: 'table'
          })
        })

        setSubmitted(true)
        setForm(initialForm)
      } catch (error) {
        console.error("Email send failed:", error)
        alert("Failed to send message. Please try again later.")
      } finally {
        setIsSending(false)
      }
    }
  }

  const inputClass = (name) => 
    `w-full bg-gym-black border px-4 py-3 rounded-lg text-gym-white text-sm focus:outline-none transition-colors cursor-hover ${
      errors[name] ? 'border-gym-red' : 'border-white/10 focus:border-gym-red'
    }`

  return (
    <section id="contact" className="bg-gym-black py-20 border-t border-gym-gray/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── HEADER ── */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="section-eyebrow">Contact Us</span>
          <h2 className="section-title text-4xl md:text-5xl mt-2 mb-4">WE'RE HERE TO HELP</h2>
          <p className="text-gym-white/60 text-sm md:text-base">
            Have questions about memberships, personal training, or our facilities? Drop us a message or visit us directly.
          </p>
        </div>

        {/* ── 3 INFO CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-aos="fade-up" data-aos-delay="100">
          
          <div className="bg-gym-dark border border-white/5 p-8 rounded-2xl text-center group hover:border-gym-red/50 transition-colors cursor-hover">
            <div className="w-16 h-16 bg-gym-black border border-white/5 group-hover:bg-gym-red group-hover:border-gym-red transition-colors flex items-center justify-center rounded-full mx-auto mb-5 shadow-card">
              <HiLocationMarker className="text-gym-red group-hover:text-white text-3xl transition-colors" />
            </div>
            <h3 className="text-gym-white font-heading text-xl uppercase tracking-wider mb-2">Location</h3>
            <p className="text-gym-white/60 text-sm">123 Fitness Street, Connaught Place<br/>New Delhi - 110001</p>
          </div>

          <div className="bg-gym-dark border border-white/5 p-8 rounded-2xl text-center group hover:border-gym-red/50 transition-colors cursor-hover">
            <div className="w-16 h-16 bg-gym-black border border-white/5 group-hover:bg-gym-red group-hover:border-gym-red transition-colors flex items-center justify-center rounded-full mx-auto mb-5 shadow-card">
              <HiPhone className="text-gym-red group-hover:text-white text-3xl transition-colors" />
            </div>
            <h3 className="text-gym-white font-heading text-xl uppercase tracking-wider mb-2">Phone</h3>
            <p className="text-gym-white/60 text-sm">+91 98765 43210<br/>Mon-Sun, 5:30 AM - 10:00 PM</p>
          </div>

          <div className="bg-gym-dark border border-white/5 p-8 rounded-2xl text-center group hover:border-gym-red/50 transition-colors cursor-hover">
            <div className="w-16 h-16 bg-gym-black border border-white/5 group-hover:bg-gym-red group-hover:border-gym-red transition-colors flex items-center justify-center rounded-full mx-auto mb-5 shadow-card">
              <HiMail className="text-gym-red group-hover:text-white text-3xl transition-colors" />
            </div>
            <h3 className="text-gym-white font-heading text-xl uppercase tracking-wider mb-2">Email</h3>
            <p className="text-gym-white/60 text-sm">hello@ironforge.fit<br/>support@ironforge.fit</p>
          </div>

        </div>

        {/* ── MAP & FORM SPLIT ── */}
        <div className="bg-gym-dark border border-white/5 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl" data-aos="fade-up" data-aos-delay="200">
          
          {/* Left: Map */}
          <div className="w-full lg:w-1/2 h-64 lg:h-auto relative bg-gym-black">
            <iframe
              title="Ironforge Location"
              src="https://www.google.com/maps?q=connaught+place+new+delhi&output=embed"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100 min-h-[300px]"
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center py-6"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <HiCheckCircle className="text-green-500 text-5xl" />
                  </div>
                  <h3 className="font-heading text-3xl text-gym-white uppercase mb-2">Message Sent!</h3>
                  <p className="text-gym-white/60 text-sm mb-6">
                    A confirmation email has been sent to your inbox. Our team will contact you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-gym-red text-xs font-bold uppercase tracking-widest border border-gym-red/30 px-6 py-3 rounded-full hover:bg-gym-red hover:text-white transition-colors w-full cursor-hover">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-heading text-gym-white uppercase tracking-wider mb-6">Send A Message</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-2">
                    {INTERESTS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm({ ...form, interest: opt })}
                        className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 cursor-hover active:scale-90 border ${
                          form.interest === opt
                            ? 'bg-gym-red text-white border-gym-red shadow-red-glow'
                            : 'bg-gym-black text-gym-white/60 border-transparent hover:border-white/20'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputClass('name')} placeholder="Full Name *" />
                      {errors.name && <p className="text-gym-red text-[10px] mt-1 ml-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className={inputClass('phone')} placeholder="Phone Number *" />
                      {errors.phone && <p className="text-gym-red text-[10px] mt-1 ml-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass('email')} placeholder="Email Address *" />
                    {errors.email && <p className="text-gym-red text-[10px] mt-1 ml-1">{errors.email}</p>}
                  </div>

                  <div>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange} required className={`${inputClass('message')} resize-none`} placeholder="How can we help you? *" />
                    {errors.message && <p className="text-gym-red text-[10px] mt-1 ml-1">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={isSending} className="btn-primary w-full !py-4 mt-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSending ? 'Sending Message...' : 'Submit Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
