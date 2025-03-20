import { useState } from 'react'
import './EditList.css'

const EditList = () => {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')

  // Function to handle adding a new item to the list
  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem])
      setNewItem('')
    }
  }

  // Function to handle editing an item in the list
  const handleEditItem = (index, value) => {
    const updatedItems = [...items]
    updatedItems[index] = value
    setItems(updatedItems)
  }
}

export default EditList
