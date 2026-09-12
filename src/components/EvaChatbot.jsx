import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiChat, HiX, HiPaperAirplane, HiSparkles, 
  HiRefresh, HiDownload, HiDuplicate, HiCheck,
  HiThumbUp, HiThumbDown, HiOutlineThumbUp, HiOutlineThumbDown,
  HiMicrophone, HiArrowsExpand
} from 'react-icons/hi'
import { FaRobot } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

export default function EvaChatbot() {
  const { isDark } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const initialMessage = { sender: 'eva', text: 'Hi there! 👋 I am EVA, your Ironforge Virtual Assistant. How can I help you today?' }
  const [messages, setMessages] = useState([initialMessage])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [feedback, setFeedback] = useState({})
  const [isListening, setIsListening] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, isOpen])

  const handleMic = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser. Try Chrome or Edge.");
      return;
    }
    
    if (isListening) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => (prev ? prev + ' ' + transcript : transcript));
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  }

  const generateEvaResponse = (userText) => {
    const text = userText.toLowerCase()
    
    // 1. GREETINGS
    if (text.includes('hi ') || text === 'hi' || text.includes('hello') || text.includes('hey')) {
      return "Hello there! 👋 I am EVA, your Ironforge Virtual Assistant.\n\nI can help you with:\n🔸 Membership Plans & Fees\n🔸 Gym Timings\n🔸 Classes & Programs\n🔸 Contact & Location\n🔸 BMI & Diet guidance\n\nWhat would you like to know?"
    }
    
    // 2. PRICING & MEMBERSHIP
    if (text.includes('price') || text.includes('cost') || text.includes('plan') || text.includes('fee') || text.includes('membership') || text.includes('package')) {
      return "We have 3 premium membership plans:\n\n🥉 Basic: ₹999/month (Standard Access)\n🥈 Standard: ₹1499/month (All Classes + Sauna)\n🥇 Premium: ₹2499/month (Personal Training + Diet)\n\n👉 Tip: Check the 'Pricing' page for yearly discounts!"
    }
    
    // 3. TIMINGS
    if (text.includes('time') || text.includes('hour') || text.includes('open') || text.includes('close')) {
      return "Here are our gym timings:\n\n🕒 Monday - Saturday: 5:00 AM to 11:00 PM\n🕒 Sunday: 6:00 AM to 8:00 PM\n\nWe are open 365 days a year to keep you fit!"
    }
    
    // 4. PROGRAMS & CLASSES
    if (text.includes('class') || text.includes('program') || text.includes('workout') || text.includes('yoga') || text.includes('crossfit') || text.includes('hiit') || text.includes('cardio')) {
      return "We offer world-class group programs, including:\n\n🏋️‍♂️ Strength Training\n🏃‍♀️ HIIT & Cardio\n🧘‍♀️ Yoga & Flexibility\n🤸‍♂️ CrossFit\n\nOur 'Programs' page has all the details!"
    }
    
    // 5. TRAINERS & COACHES
    if (text.includes('trainer') || text.includes('coach') || text.includes('personal training') || text.includes('guide')) {
      return "We have certified, elite trainers to guide you:\n\n💪 Rahul Sharma (Strength & Muscle)\n🧘‍♀️ Priya Singh (Yoga & Flexibility)\n🏋️‍♂️ Amit Verma (CrossFit)\n🏃‍♀️ Neha Kapoor (HIIT & Cardio)"
    }
    
    // 6. CONTACT & LOCATION
    if (text.includes('location') || text.includes('where') || text.includes('address') || text.includes('contact') || text.includes('phone') || text.includes('call') || text.includes('email') || text.includes('number')) {
      return "We'd love to hear from you!\n\n📍 Location: Ironforge Gym, Mumbai, India\n📞 Phone: +91-9876543210\n✉️ Email: info@ironforgegym.com\n\nYou can also use the 'Contact' page to send us a direct message."
    }
    
    // 7. DIET, BMI & WEIGHT LOSS
    if (text.includes('diet') || text.includes('nutrition') || text.includes('weight') || text.includes('fat') || text.includes('bmi') || text.includes('lose') || text.includes('gain')) {
      return "Nutrition is 70% of the journey! 🥗\n\nOur Premium plan includes custom diet plans. Also, don't forget to check out our free BMI Calculator on the Home page to know your current body metrics!"
    }
    
    // 8. HOW TO JOIN
    if (text.includes('join') || text.includes('register') || text.includes('enroll') || text.includes('start') || text.includes('admission')) {
      return "Ready to transform your body? 🚀\n\nSimply click the red 'JOIN NOW' button at the top of the website, choose your preferred plan, and you're good to go!"
    }
    
    // 9. FACILITIES & EQUIPMENT
    if (text.includes('equipment') || text.includes('facility') || text.includes('machine') || text.includes('dumbell') || text.includes('gallery')) {
      return "Ironforge Gym is equipped with state-of-the-art international machines, free weights, a dedicated CrossFit section, and luxury locker rooms.\n\nCheck out our 'Gallery' page to see it yourself!"
    }

    // 10. OFFERS
    if (text.includes('offer') || text.includes('discount') || text.includes('coupon') || text.includes('promo')) {
      return "🎉 We currently offer 2 Months FREE on all our Yearly Plans!\n\nHead over to the 'Pricing' page and switch to the 'Yearly' tab to grab this offer."
    }

    // 11. THANKS
    if (text.includes('thank') || text.includes('thx') || text.includes('tysm') || text.includes('awesome')) {
      return "You're very welcome! If you need anything else, I'm right here. Keep pushing and NO PAIN NO GAIN! 💪"
    }
    
    // 12. BYE
    if (text.includes('bye') || text.includes('cya') || text.includes('goodbye')) {
      return "Goodbye! Have a great day and see you at the gym! 🏋️‍♂️"
    }

    // FALLBACK
    return "I'm sorry, I didn't quite catch that. 🤔\n\nTry asking me about:\n- Membership fees\n- Gym timings\n- Our trainers\n- Contact details\n- Diet & BMI\n- Ongoing offers"
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }])
    setInput('')
    setIsTyping(true)

    // Simulate network delay for EVA's response
    setTimeout(() => {
      const evaReply = generateEvaResponse(userMessage)
      setMessages((prev) => [...prev, { sender: 'eva', text: evaReply }])
      setIsTyping(false)
    }, 800)
  }

  const handleRefresh = () => {
    setMessages([initialMessage])
  }

  const handleDownload = () => {
    const textContent = messages.map(m => `${m.sender === 'eva' ? 'EVA' : 'YOU'}: ${m.text}`).join('\n\n')
    const blob = new Blob([textContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Ironforge_Chat_Transcript.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleDownloadMessage = (text, index) => {
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `EVA_Response_${index}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleFeedback = (index, type) => {
    setFeedback(prev => ({
      ...prev,
      [index]: prev[index] === type ? null : type // toggle off if clicked again
    }))
  }

  return (
    <>
      {/* Floating Draggable Chat Button */}
      <motion.button
        drag
        dragMomentum={false}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-[5.5rem] right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-tr from-gym-red to-red-500 text-white cursor-move shadow-red-glow group ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chatbot"
      >
        {/* Pulsing ring behind the button */}
        <div className="absolute inset-0 rounded-full border-2 border-gym-red animate-ping opacity-30 pointer-events-none" />
        
        {/* Robot Icon */}
        <FaRobot className="text-2xl relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Hover Tooltip */}
        <div className="absolute right-[115%] top-1/2 -translate-y-1/2 !bg-black !text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/20 shadow-xl hidden md:block">
          Chat with EVA
          {/* Tooltip Triangle */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black rotate-45 border-r border-t border-white/20"></div>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed z-[100] flex flex-col shadow-2xl overflow-hidden border transition-all duration-300 ${
              isFullScreen 
                ? 'inset-0 w-full h-full rounded-none md:inset-4 md:w-auto md:h-auto md:rounded-2xl' 
                : 'bottom-6 right-6 md:right-24 w-[90%] max-w-[380px] h-[550px] max-h-[80vh] rounded-2xl'
            } ${isDark ? 'bg-gym-gray-light border-white/10' : 'bg-white border-black/10'}`}
          >
            {/* Header */}
            <div className="bg-gym-red px-4 py-4 flex items-center justify-between text-white shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm">
                  <HiSparkles className="text-xl" />
                </div>
                <div>
                  <h3 className="font-heading tracking-wider text-xl leading-none">EVA</h3>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/80">Virtual Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleRefresh}
                  title="Refresh Chat"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <HiRefresh className="text-lg" />
                </button>
                <button 
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  title={isFullScreen ? "Exit Full Screen" : "Full Screen"}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <HiArrowsExpand className="text-lg" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  title="Close Chat"
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors ml-1"
                >
                  <HiX className="text-xl" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className={`flex-1 overflow-y-auto p-4 flex flex-col gap-4 ${isDark ? 'bg-gym-black/50' : 'bg-[#f8f8f8]'}`}>
              {messages.map((msg, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} group w-full`}
                >
                  {/* Message Bubble */}
                  <div 
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl whitespace-pre-wrap text-sm shadow-sm relative ${
                      msg.sender === 'user' 
                        ? 'bg-gym-red text-white rounded-br-sm' 
                        : isDark 
                          ? 'bg-gym-gray text-gym-white rounded-bl-sm border border-white/5' 
                          : 'bg-white text-black rounded-bl-sm border border-black/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                  
                  {/* ChatGPT-style Action Toolbar (Only for EVA) */}
                  {msg.sender === 'eva' && (
                    <div className={`flex items-center gap-1.5 mt-1.5 ml-2 transition-opacity ${isDark ? 'text-white/50' : 'text-black/40'}`}>
                      <button 
                        onClick={() => handleCopy(msg.text, index)}
                        title="Copy Message"
                        className={`p-1 hover:scale-110 transition-transform ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
                      >
                        {copiedIndex === index ? <HiCheck className="text-green-500 text-sm" /> : <HiDuplicate className="text-sm" />}
                      </button>
                      <button 
                        onClick={() => handleDownloadMessage(msg.text, index)}
                        title="Download Message"
                        className={`p-1 hover:scale-110 transition-transform ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
                      >
                        <HiDownload className="text-sm" />
                      </button>
                      <button 
                        onClick={() => handleFeedback(index, 'up')}
                        title="Good Response"
                        className={`p-1 hover:scale-110 transition-transform ${feedback[index] === 'up' ? 'text-gym-red' : isDark ? 'hover:text-white' : 'hover:text-black'}`}
                      >
                        {feedback[index] === 'up' ? <HiThumbUp className="text-sm" /> : <HiOutlineThumbUp className="text-sm" />}
                      </button>
                      <button 
                        onClick={() => handleFeedback(index, 'down')}
                        title="Bad Response"
                        className={`p-1 hover:scale-110 transition-transform ${feedback[index] === 'down' ? 'text-gym-red' : isDark ? 'hover:text-white' : 'hover:text-black'}`}
                      >
                        {feedback[index] === 'down' ? <HiThumbDown className="text-sm" /> : <HiOutlineThumbDown className="text-sm" />}
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className={`px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1.5 ${isDark ? 'bg-gym-gray border border-white/5' : 'bg-white border border-black/5'}`}>
                    <div className="w-2 h-2 rounded-full bg-gym-red animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-gym-red animate-bounce" style={{ animationDelay: '0.15s' }} />
                    <div className="w-2 h-2 rounded-full bg-gym-red animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSend} 
              className={`p-3 flex items-center gap-2 border-t z-10 ${isDark ? 'bg-gym-gray-light border-white/10' : 'bg-white border-black/10'}`}
            >
              <button
                type="button"
                onClick={handleMic}
                title="Voice Type"
                className={`w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center transition-all ${
                  isListening 
                    ? 'bg-gym-red text-white animate-pulse shadow-red-glow' 
                    : isDark ? 'text-white/50 hover:bg-white/10 hover:text-white' : 'text-black/50 hover:bg-black/5 hover:text-black'
                }`}
              >
                <HiMicrophone className="text-lg" />
              </button>

              <input
                type="text"
                value={isListening ? 'Listening...' : input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isListening}
                placeholder="Ask EVA about Ironforge..."
                className={`flex-1 bg-transparent border-none focus:ring-0 text-sm px-1 outline-none ${isDark ? 'text-white placeholder-white/40' : 'text-black placeholder-black/40'}`}
              />
              <button 
                type="submit"
                disabled={!input.trim() || isListening}
                className="w-10 h-10 flex-shrink-0 rounded-full bg-gym-red flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gym-red-dark transition-colors cursor-hover shadow-sm"
              >
                <HiPaperAirplane className="rotate-90 ml-[-2px] text-lg" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

