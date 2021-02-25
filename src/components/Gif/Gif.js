import React from 'react';
import { Link } from 'wouter';

import './gif.css';

function Gif({title, id, url}) {
    return (
    <li key={id} className="list-gif-item">
      <Link to={`/gif/${id}`} className="Gif-link">
        <span className="list-gif-title">{title}</span>
        <img className="list-gif-image" src={url} alt={title}/>
      </Link>
    </li>
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
});