import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'

import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import EvaChatbot from './components/EvaChatbot'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Classes from './pages/Classes'
import TrainersPage from './pages/TrainersPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import NotFoundPage from './pages/NotFoundPage'

function LoadingScreen({ visible }) {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-gym-black flex flex-col items-center justify-center transition-opacity duration-700 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img src="/logo.png" alt="Ironforge Gym" className="h-20 md:h-28 object-contain mb-8 animate-pulse" />
      <div className="w-56 h-[3px] bg-gym-gray-light overflow-hidden rounded-full">
        <div className="loader-bar w-full h-full origin-left animate-[loaderGrow_1.1s_ease-in-out_infinite]" />
      </div>
      <style>{`
        @keyframes loaderGrow {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }
      `}</style>
    </div>
  )
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setDotPos({ x: e.clientX, y: e.clientY })
    }
    const overCheck = (e) => {
      const target = e.target
      if (target.closest('a, button, input, textarea, .cursor-hover')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', overCheck)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', overCheck)
    }
  }, [])

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 44 : 24,
          height: hovering ? 44 : 24,
          backgroundColor: hovering ? 'rgba(224,16,43,0.15)' : 'transparent',
        }}
      />
      <div className="custom-cursor-dot hidden md:block" style={{ left: dotPos.x, top: dotPos.y }} />
    </>
  )
}

function ScrollProgressBar() {
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScale(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{ width: '100%', transform: `scaleX(${scale})` }}
    />
  )
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="cursor-hover fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.61 1.902 6.482L4 29l7.71-1.878A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3zm0 21.818a9.77 9.77 0 0 1-4.977-1.364l-.357-.212-4.573 1.114 1.22-4.455-.233-.457A9.77 9.77 0 0 1 6.18 15c0-5.415 4.406-9.818 9.82-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818zm5.386-7.354c-.294-.147-1.74-.858-2.01-.956-.27-.098-.467-.147-.663.147-.196.294-.76.956-.932 1.152-.171.196-.343.221-.637.074-.294-.147-1.242-.458-2.366-1.463-.874-.78-1.464-1.744-1.636-2.038-.171-.294-.018-.453.129-.6.132-.132.294-.343.441-.514.147-.171.196-.294.294-.49.098-.196.049-.368-.024-.515-.074-.147-.663-1.6-.909-2.19-.24-.577-.484-.5-.663-.51l-.564-.01c-.196 0-.515.074-.784.368-.27.294-1.03 1.007-1.03 2.456s1.055 2.848 1.202 3.045c.147.196 2.077 3.17 5.032 4.445.703.304 1.251.485 1.679.62.705.224 1.347.192 1.855.117.566-.084 1.74-.71 1.985-1.396.245-.686.245-1.274.171-1.396-.073-.123-.269-.196-.564-.343z"/>
      </svg>
    </a>
  )
}

function AppShell({ children }) {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 })
  }, [])

  useEffect(() => {
    AOS.refresh()
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <LoadingScreen visible={loading} />
      <ScrollProgressBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <EvaChatbot />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </ThemeProvider>
  )
}
