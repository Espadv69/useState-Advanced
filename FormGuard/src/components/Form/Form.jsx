import { useState } from 'react'
import './Form.css'

const Form = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({ name: '', email: '' })
  // State to handle error message
  const [error, setError] = useState({ name: '', email: '' })

  // Function to validate name input
  const validateName = (name) => {
    return name.length >= 3 ? '' : 'Name must be at least 3 characters.'
  }
}

export default Form
