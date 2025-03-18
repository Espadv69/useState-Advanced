import { useState, useEffect } from 'react'
import './DarkMode.css'

const DarkMode = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })
}

export default DarkMode
