import { useState } from 'react'
import './Form.css'

const Form = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({ name: '', email: '' })
  // State to handle error message
  const [error, setError] = useState({ name: '', email: '' })
}

export default Form
