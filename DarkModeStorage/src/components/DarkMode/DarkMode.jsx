import { useState, useEffect } from 'react'
import './DarkMode.css'

const DarkMode = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', newMode)
      return newMode
    })
  }

  // Apply dark mode class on mount and when state changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])
}

export default DarkMode
