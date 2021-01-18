import React from 'react';
import Gifs from 'components/Gif/Gif';
import useGif from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import { useEffect, useRef } from 'react/cjs/react.development';

function SearchResults({ params }) {
    const { keyword } = params;
    const { gifs, loading, setPage } = useGif({ keyword });
    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({ externalRef : loading ? null : externalRef });
    console.log('*********', isNearScreen)
    
    useEffect(() => {
        if(isNearScreen) handleNextPageNew()
    }, [isNearScreen])
    
    if(loading) return <i>Cargando</i>

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
    }

    const handleNextPageNew = () => console.log('next page')
    
    

    return gifs.length > 0 ? (
        <section>
        <h3>{decodeURI(keyword)}</h3>
            <ul className="list-gifs">
                { gifs.map(({ id, title, url}) => <Gifs key={id} id={id} title={title} url={url} />)}
            </ul>
            <div id="visor" ref={externalRef}></div>
            <button onClick={handleNextPage}>Get next page</button>
        </section>
    ) : null
}

export default SearchResults; 