import { useState, useEffect } from 'react'
import './DarkMode.css'

const DarkMode = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false)
  // State to manage dark mode in local storage
  const [darkModeStorage, setDarkModeStorage] = useState(false)

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
}

export default DarkMode
