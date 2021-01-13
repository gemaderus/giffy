import React, { useEffect, useState } from 'react';
import Gifs from './Gif';
import getGifs from '../services/getGifs';


function ListOfGifs({ params }) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    const { keyword } = params;
    console.log(params)

    useEffect( () =>  {
        setLoading(true);
        getGifs({ keyword })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        }
            )
      }, [keyword]);

    if(loading) return <i>Cargando</i>
    
    return gifs.length > 0 ? (
        <ul>
            { gifs.map(({ id, title, url}) => <Gifs key={id} id={id} title={title} url={url} />)}
        </ul>
    ) : null
}

export default ListOfGifs;