import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

function SearchForm ({ onSubmit }) {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const handleSubmit = () => {
        pushLocation(`/search/${keyword}`)
        onSubmit({ keyword })
      }
    
    const handleChange = e => {
        setKeyword(e.target.value)

    }

    return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'red'}} className="form">
        <input type="text" value={keyword} onChange={handleChange} placeholder="Search a gif here..."/>
      </form>
    )
}

export default React.memo(SearchForm);