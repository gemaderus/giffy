import React from 'react';
import Gifs from '../Gif/Gif';

function ListOfGif({ gifs }) {

    return gifs.length > 0 ? (
        <ul className="list-gifs">
            { gifs.map(({ id, title, url}) => <Gifs key={id} id={id} title={title} url={url} />)}
        </ul>
    ) : <div style={{minHeight: '100vh'}}/>
}

export default ListOfGif;