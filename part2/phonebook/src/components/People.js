import React from 'react'

const People = ({ persons, newSearch, deletePerson }) => {
    return (
        <div>
        <h2>Numbers</h2>
            <ul>
                {newSearch === ''
                ? persons.map(person =>
                <li key={person.id}>{person.name} {person.number}
                    <button onClick={deletePerson(person.name, person.id)}>
                        delete
                    </button>
                </li>)
                : persons.filter(person => person.name.toUpperCase().search(newSearch.toUpperCase()) >= 0)
                .map(person => 
                    <li key={person.id}>
                        {person.name} {person.number}
                        <button onClick={deletePerson(person.name, person.id)}>
                            delete
                        </button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default People