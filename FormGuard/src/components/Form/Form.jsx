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

  // Function to validate email input
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? ''
      : 'Invalid email format.'
  }

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'name') {
      setError((prev) => ({ ...prev, name: validateName(value) }))
    } else if (name === 'email') {
      setError((prev) => ({ ...prev, email: validateEmail(value) }))
    }
  }

  const isFormValid =
    !error.name && !error.email && formData.name && formData.email

  return (
    <section className="form__section">
      <h1>Form</h1>
      <p>Fill out the form below:</p>
      <form className="form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {error.name && <p style={{ color: 'red' }}>{error.name}</p>}

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>

      <footer>
        <h2>To see how the form works, go to the explanation section below.</h2>
        <h3>⬇️</h3>
      </footer>
    </section>
  )
}

export default Form
