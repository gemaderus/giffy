import React, { useCallback } from 'react';
import Gifs from 'components/Gif/Gif';
import useGif from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import { useEffect, useRef } from 'react/cjs/react.development';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';

function SearchResults({ params }) {
    const { keyword } = params;
    const { gifs, loading, setPage } = useGif({ keyword });
    const externalRef = useRef();
    const {isNearScreen} = useNearScreen(
        { 
            externalRef : loading ? null : externalRef,
            once: false 
        });
    
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
      ), [setPage])

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : null
    
    useEffect(() => {
        
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    if(loading) return <i>Cargando</i>

    return gifs.length > 0 ? (
        <section>
            <Helmet>
                <title>{title}</title>
            </Helmet>
        <h3>{decodeURI(keyword)}</h3>
            <ul className="list-gifs">
                { gifs.map(({ id, title, url}) => <Gifs key={id} id={id} title={title} url={url} />)}
            </ul>
            <div id="visor" ref={externalRef}></div>
        </section>
    ) : null
}

export default SearchResults; 