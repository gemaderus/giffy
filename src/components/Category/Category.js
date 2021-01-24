import React from 'react';
import { Link } from 'wouter';

function Category({name, options }) {
    return (
        <section>
            <h3>{name}</h3>
            {options.map(option => <li key={name}><Link to={`/search/${option}`}>{option}</Link></li>)}
        </section>
    )
}

export default Category;