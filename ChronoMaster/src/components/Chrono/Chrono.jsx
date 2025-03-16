import { useState, useEffect } from 'react'
import './Chrono.css'

const Chrono = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [isActive, setIsActive] = useState(false)

  // Start the timer
  useEffect(() => {
    let interval

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1)
                return 0
              }
              return prevMinutes + 1
            })
            return 0
          }
          return prevSeconds + 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive])

  // Reset the timer
  const handleReset = () => {
    setSeconds(0)
    setMinutes(0)
    setHours(0)
    setIsActive(false)
  }
}

export default Chrono
