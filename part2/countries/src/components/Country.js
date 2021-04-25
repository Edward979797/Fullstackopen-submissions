import React from 'react'

const Country = ({ name, capital, population, languages, flag }) => {

    return (
        <div>
            <h2>{name}</h2>
            <div>capital {capital}</div>
            <div>population {population}</div>
            <h3>languages</h3>
            <ul>
                {languages.map(language =>
                    <li key={language.name}>{language.name}</li>
                )}
            </ul>
            <img src={flag} width="280" height="180" alt="flag" />
        </div>
    )
}

export default Country