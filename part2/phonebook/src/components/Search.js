import React from 'react'

const Search = ({ search, handleChange }) => {

  return (
    <div>
        filter shown with
        <input
          value={search}
          onChange={handleChange}
        />
    </div>
  )
}

export default Search