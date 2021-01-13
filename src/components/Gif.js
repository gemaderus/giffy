import React from 'react';

function Gif({title, id, url}) {
    return (
    <li key={id}>
        <a href="`#${id}`">
          <span>{id}</span>
          <span>{title}</span>
          <img src={url}/>
        </a>
    </li>
    )
}

export default Gif;