import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)

  // On first load, check saved preference
  useEffect(() => {
    const saved = localStorage.getItem('ironforge-theme')
    if (saved === 'light') {
      setIsDark(false)
      document.documentElement.classList.add('light')
    } else {
      // Default is dark — ensure light class is removed
      document.documentElement.classList.remove('light')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextIsDark = !prev
      if (nextIsDark) {
        document.documentElement.classList.remove('light')
        localStorage.setItem('ironforge-theme', 'dark')
      } else {
        document.documentElement.classList.add('light')
        localStorage.setItem('ironforge-theme', 'light')
      }
      return nextIsDark
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

