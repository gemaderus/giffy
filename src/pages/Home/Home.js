import React, { useCallback } from 'react';
import { Link, useLocation } from 'wouter';
import useGif from 'hooks/useGifs';
import ListOfGif from 'components/ListOfGif/ListOfGif';
import LazyTrending from 'components/TrendingSearches/Index';
import './home.css';
import SearchForm from 'components/SearchForm/SearchForm';


const POPULAR_GIFS = ['Panda', 'Rick', 'Morty', 'Monkey']

function Home() {
  const { gifs, loading } = useGif();
  const [path, pushLocation] = useLocation();

  const handleSubmit = useCallback(({ keyword }) => {
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return(
    <section>
      <SearchForm onSubmit={handleSubmit}/>
      <h2>Última búsqueda</h2>
      <ListOfGif gifs={gifs}/>
      <ul>
        {POPULAR_GIFS.map(gif => (
          <li key={gif} className="gif-link">
            <Link to={`/search/${gif}`}>{gif}</Link>
          </li>
        ))}
      </ul>
      <LazyTrending />

    </section>
  )
}

export default Home;