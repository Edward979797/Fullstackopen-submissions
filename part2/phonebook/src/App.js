import React, { useState } from 'react'
import Search from './components/Search'
import Numbers from './components/Numbers'
import Form from './components/Form'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0) {
      return alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
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
    setSearch(event.target.value)
    console.log(search)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        search={search}
        handleChange={handleSearchChange}
      />
      <h2>add a new</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} search={search} />
    </div>
  )
}

export default App