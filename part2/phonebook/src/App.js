import React, { useState } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import People from './components/People'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (persons.map(person => person.name).indexOf(newName) >= 0) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={newSearch} handleChange={handleSearchChange} />
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <People persons={persons} newSearch={newSearch} />
    </div>
  )
}

export default App