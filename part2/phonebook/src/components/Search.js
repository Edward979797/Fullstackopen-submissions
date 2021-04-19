import React from 'react'

const Search = ({ value, handleChange }) => {
    return(
        <div>
            filter shown with
            <input
                value={value}
                onChange={handleChange} />
        </div>
    )
}

export default Search