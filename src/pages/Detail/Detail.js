import React from 'react';
import Gif from 'components/Gif/Gif';
import useSingleGif from '../../hooks/useSingleGif';
import useSeo from '../../hooks/useSeo';

import { Redirect } from 'wouter';
// import useGlobalGifs from 'hooks/useGlobalGifs';

function Detail( { params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })
    const title = gif ? gif.title : ''

    useSeo({ description: `Detail of ${title}`, title })
    // const gifs = useGlobalGifs();
    if(isLoading) return <h2>Cargando...</h2>
    if(isError) <Redirect to="404" />
    if(!gif) return null;

    console.log(gif)

    return (
        <>
            <h3>{gif.title}</h3>
            <Gif {...gif} />
        </>
    )
    
}

export default Detail;