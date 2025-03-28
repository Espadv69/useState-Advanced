import { useState, useEffect } from 'react'
import './Chrono.css'

const Chrono = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [isActive, setIsActive] = useState(false)

  // Start the timer
  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 59) {
          setSeconds(0)
          setMinutes((prev) => prev + 1)

          if (minutes >= 59) {
            setMinutes(0)
            setSeconds(0)
            setHours((prev) => prev + 1)
          } else {
            setSeconds((prev) => prev + 1)
          }
        } else {
          setSeconds((prev) => prev + 1)
        }
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  // Reset the timer
  const handleReset = () => {
    setIsActive(false)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  // Handle isActive state
  const handleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <section className="chrono">
      <header className="chrono-display">
        <span>{String(hours).padStart(2, '0')}</span>:
        <span>{String(minutes).padStart(2, '0')}</span>:
        <span>{String(seconds).padStart(2, '0')}</span>
      </header>
      <footer className="chrono-controls">
        <button onClick={handleIsActive}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </footer>
    </section>
  )
}

export default Chrono
