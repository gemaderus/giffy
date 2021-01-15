import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import useGif from '../../hooks/useGifs';
import ListOfGif from '../../components/listOfGif.js';

import './home.css';

const POPULAR_GIFS = ['Panda', 'Rick', 'Morty', 'Monkey']

function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  const { gifs, loading } = useGif();
  

  const handleSubmit = e => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return(
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} placeholder="Search a gif here..."/>
      </form>
      <h2>Última búsqueda</h2>
      <ListOfGif gifs={gifs}/>
      <ul className="home">
        {POPULAR_GIFS.map(gif => (
          <li key={gif}>
            <Link to={`/search/${gif}`}>{gif}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Home;