import { useState } from 'react'
import { MOCK } from '../../data/mock'

import './Explorer.css'

const Explorer = () => {
  // State to handle the search input
  const [search, setSearch] = useState('')

  // Filter the MOCK array based on the search input
  const filteredData = MOCK.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <section className="explorer">
      <h1>Mock API Explorer</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredData.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.role}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Explorer
