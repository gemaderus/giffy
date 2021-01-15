import React from 'react';
import { Link } from 'wouter';

function Gif({title, id, url}) {
    return (
    <li key={id}>
      <Link to={`/gif/${id}`}>
        <span>{id}</span>
        <span>{title}</span>
        <img src={url} alt={title}/>
      </Link>
    </li>
    )
}

export default Gif;