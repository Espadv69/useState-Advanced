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

  return (
    <section className="editList">
      <h1>Inline Edit List</h1>

      <header className="form">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={handleAddItem}>Add</button>
      </header>

      <ul className="ul__list">
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => handleEditItem(index, e.target.value)}
              placeholder="Edit item"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default EditList
