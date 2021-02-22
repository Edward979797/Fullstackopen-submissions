import React from 'react'

const Numbers = ({ persons, search }) => {

  return (
    <ul>
        {
        search === ''
        ? persons.map(person =>
        <li key={person.name}>{person.name} {person.number}</li>
          )
        : persons.filter(person =>
          person.name.search(search) >= 0)
          .map(person =>
          <li key={person.name}>{person.name} {person.number}</li>
          )
        }
      </ul>
  )
}

export default Numbers