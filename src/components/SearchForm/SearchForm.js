import React from 'react';

import { useLocation } from 'wouter';
import useForm from '../../hooks/useForm';

const RATING = ["g", "pg", "pg-13", "r"];

function SearchForm ({ initialRating, initialKeyword = ''}) {
    const [path, pushLocation] = useLocation();
    const { keyword, rating, times, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

    const handleSubmit = e => {
      // Navegar a otra ruta
      pushLocation(`/search/${keyword}/${rating}`)
    }
    
    const handleChange = e => {
      updateKeyword(e.target.value);
      //dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value })
    }

    const handleChangeRating = e => {
      updateRating(e.target.value);
      //dispatch({ type: ACTIONS.UPDATE_RATING, payload: e.target.value })
    }

    return (
    <form onSubmit={handleSubmit} className="form">
        <button>Buscar</button>
        <input type="text" value={keyword} onChange={handleChange} placeholder="Search a gif here..."/>
        <select onChange={handleChangeRating} value={rating}>
          <option disabled>Rating type</option>
          {RATING.map(rating => <option key={rating}>{rating}</option>)}
        </select>
        <small>{times}</small>
      </form>
    )
}

export default React.memo(SearchForm);