import React from 'react';
import Gif from 'components/Gif/Gif';
import useSingleGif from '../../hooks/useSingleGif';
import { Helmet } from 'react-helmet';
import { Redirect } from 'wouter';

function Detail( { params }) {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })
    const title = gif ? gif.title : ''

    if(isLoading) return (
        <>
            <Helmet>
                <title>Cargando...</title>
            </Helmet>
            <h2>Cargando...</h2>
        </>
    )
    if(isError) <Redirect to="404" />
    if(!gif) return null;

    console.log(gif)

    return (
        <>
            <Helmet>
                <title>{title}  || Giffy </title>
            </Helmet>
            <h3>{gif.title}</h3>
            <Gif {...gif} />
        </>
    )
    
}

export default Detail;