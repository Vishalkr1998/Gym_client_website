import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="cursor-hover fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-gym-gray border border-white/10 flex items-center justify-center text-gym-white hover:bg-gym-red transition-colors shadow-lg"
    >
      <HiArrowUp />
    </button>
  )
}
