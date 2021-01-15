import React from 'react';
import Gifs from '../../components/Gif.js';
import useGif from '../../hooks/useGifs';

function SearchResults({ params }) {
    const { keyword } = params;
    const { gifs, loading } = useGif({ keyword });

    if(loading) return <i>Cargando</i>
    
    return gifs.length > 0 ? (
        <ul>
            { gifs.map(({ id, title, url}) => <Gifs key={id} id={id} title={title} url={url} />)}
        </ul>
    ) : null
}

export default SearchResults;