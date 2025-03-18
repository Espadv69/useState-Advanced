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
}

export default DarkMode
