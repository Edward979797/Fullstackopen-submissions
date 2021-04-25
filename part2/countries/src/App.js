import React, { useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response =>
      setCountries(response.data))

  return (
    <div>
      <Search search={search} handleSearch={handleSearch} />
      <Countries countries={countries} search={search} setSearch={setSearch} />
    </div>
  )
}

export default App