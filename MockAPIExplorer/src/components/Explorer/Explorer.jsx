import { useState } from 'react'
import { MOCK } from '../../data/mock'

import './Explorer.css'

const Explorer = () => {
  // State to handle the search input
  const [search, setSearch] = useState('')

  // Filter the MOCK array based on the search input
  const filteredData = MOCK.filter((item) => {
    item.name.toLowerCase().includes(search.toLowerCase())
  })
}

export default Explorer
