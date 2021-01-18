import React, { useEffect, useState } from 'react';
import getTrendingTerms from '../../services/getTrendingTerms';
import Category from '../Category/Category';

function TrendingSearches() {
    const [trends, setTrends] = useState([]);

    useEffect(function () {
        getTrendingTerms({ limit: 25 })
        .then(setTrends)
    }, [])

    return <Category name='Tendencias' options={trends}></Category>
}

export default TrendingSearches;