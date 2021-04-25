import {React, useState } from 'react'
import Country from './Country'
import Weather from './Weather'

const Countries = ({ countries, search }) => {
    const [countryToShow, setCountryToShow] = useState('')


    if (countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase())).length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase())).length <= 10 && countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase())).length > 1) {
        return (countries
            .filter(country => country.name.toUpperCase().includes(search.toUpperCase()))
            .map(country =>
                    countryToShow === country.name
                    ? <div key={country.name}>
                        <Country
                    name={country.name}
                    capital={country.capital}
                    population={country.population}
                    languages={country.languages}
                    flag={country.flag}
                    />
                    <Weather 
                        capital={country.capital} 
                    />
                        </div>
                    : <div key={country.name}>
                        {country.name}
                        <button onClick={() => {
                            setCountryToShow(country.name)
                            console.log(countryToShow)
                        }}>
                            show
                        </button>
                    </div>
            )
        )
    } else if (countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase())).length === 1) {
        return (
        countries
            .filter(country => country.name.toUpperCase().includes(search.toUpperCase()))
            .map(country =>
                <div key={country.name}>
                    <Country
                        name={country.name}
                        capital={country.capital}
                        population={country.population}
                        languages={country.languages}
                        flag={country.flag}
                    />
                    <Weather 
                        capital={country.capital}
                    />
                </div>
        )
        )
    } else {
        return (
            <div>No matches</div>
        )
    }
}

export default Countries