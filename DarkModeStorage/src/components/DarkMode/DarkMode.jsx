import { useState, useEffect } from 'react'
import './DarkMode.css'

const DarkMode = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  // Apply dark mode class on mount and when state changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', newMode)
      return newMode
    })
  }

  return (
    <section className="dark__section">
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>Click the button to toggle dark mode</p>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </section>
  )
}

export default DarkMode
