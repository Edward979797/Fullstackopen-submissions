import React from 'react'

const People = ({ persons, newSearch }) => {
    return (
        <div>
        <h2>Numbers</h2>
            <ul>
                {newSearch === ''
                ? persons.map(person =>
                <li>{person.name} {person.number}</li>)
                : persons.filter(person => person.name.search(newSearch) >= 0)
                .map(person => <li>{person.name} {person.number}</li>)
                }
            </ul>
        </div>
    )
}

export default People