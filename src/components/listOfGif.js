import React from 'react';
import Gifs from './Gif';

function ListOfGif({ gifs }) {
    return gifs.length > 0 ? (
        <ul>
            { gifs.map(({ id, title, url}) => <Gifs key={id} id={id} title={title} url={url} />)}
        </ul>
    ) : null
}

export default ListOfGif;