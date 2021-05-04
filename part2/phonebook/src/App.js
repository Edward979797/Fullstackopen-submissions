import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import People from './components/People'
import peopleService from './services/people'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ message, setMessage ] = useState(null)

  useEffect(() => {
    peopleService
        .getAll()
        .then(initialPeople => {
            setPersons(initialPeople)
      })
  }, [])

  const addName = (event, id) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (persons.filter(person => person.name.toUpperCase() === newName.toUpperCase()).length > 0) {

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const replacedPerson = persons.find(p => p.name === newName)
        const changedPerson = {...replacedPerson, number: newNumber}

        peopleService
          .update(replacedPerson.id, changedPerson)
          .then(newPerson => {
            setPersons(persons.map(person => person.name ? newPerson : person))
          })
          .catch(error => {
            setMessage(
              `Information of '${newName}' has already been removed from server`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setPersons(persons.filter(n => n.name !== newName))
        })
        setNewName('')
        setNewNumber('')
        setMessage(`Added ${replacedPerson.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
    } else {
      peopleService
      .create(nameObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        setMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
    )
  }
}

  const deletePerson = (name, id) => {
    return () => {
        if (window.confirm(`Delete ${name}?`)) {
        peopleService
          .deletePerson(id)
          .then(() => {
            setPersons(persons.filter(n => n.id !== id))
            setNewName('')
            setNewNumber('')
          })
          setTimeout(() => {
            setMessage(null);
          }, 5000)
        }
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
      <Notification message={message} />
      <Search value={newSearch} handleChange={handleSearchChange} />
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <People persons={persons} newSearch={newSearch} deletePerson={deletePerson} />
    </div>
  )
}

export default App